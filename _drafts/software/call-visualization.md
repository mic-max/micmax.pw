---
layout: post
title: Phone Call Visualization
---

Given a call history file, generate an image showing all calls with their time, duration, and type. Okay, the wording I used might make this sound like homework...
Nope, this is just something I felt compelled to make in my spare time and to share with the person on the other end of these calls.

## Export Call Log

The first thing to do was export my call log `XML` file from my phone. I used the Android app [Call Log Backup & Restore](https://play.google.com/store/apps/details?id=com.tekxperiastudios.callloganalyser) to generate the file and copied it to my PC.

Ideally you don't want to install a third party application to do this export, since they might be saving your information. I'm not much of an Android developer though, but I learned anything throughout highschool and university, it was how to plagiarize.

<https://github.com/atul2889/call-log-call-history-for-Ionic---v2/blob/1ab3479f33ef759d66ada939767151a39dfdcfba/Device.java#L200>
<https://github.com/creacore-team/cordova-plugin-calllog/blob/master/src/android/be/creacore/calllog/CallLog.java>

TODO Make a simple AF call history file exporter.

1. Permission to `Manifest.permission.READ_CALL_LOG`
1. Read data from `content://call_log/calls`
1. Write a file: JSON, XML, YAML, CSV, etc.

### Manually?

I am not sure how this program works exactly. It requires the `READ_CALL_LOG` permission from your Android device. I found somewhere the mention of a `.clbu` file, which stands for `Android Call Log Backup`. There must be some files on the filesystem that contain the call information, but I cannot find anything.

I Checked the following folders for anything but they were all empty, likely behind operating system permissions

- `Android/data/`
  - `com.android.providers.telephony`
  - `com.google.android.dialer`

Sorry iPhone users, you're on your own getting a call history file. Please let me know how you did so and I could update this post and program!
TODO
<https://www.filedesc.com/en/file/clbu>
<https://github.com/CamilleDesmots/AndroidCallLogStats>
Good thing I went to a French immersion school :sweat: et peux comprendre la `lire-moi-svp.md` file.

| Value | Call Type                                                |
|-------|----------------------------------------------------------|
| 1     | <span style = "color:#2ecc71">Incoming</span>            |
| 2     | <span style = "color:#3498db">Outgoing</span>            |
| 3     | <span style = "color:#f39c12">Missed</span>              |
| 4     | <span style = "color:#ff4ff6">Voicemail</span>           |
| 5     | <span style = "color:#e74c3c">Rejected</span>            |
| 6     | <span style = "color:#ff4ff6">Blocked</span>             |
| 7     | <span style = "color:#ff4ff6">Answered Externally</span> |

Source: [Android CallLog.Calls Documentation](https://developer.android.com/reference/android/provider/CallLog.Calls)

## Call Log File Format

The file is simply a bunch of `callLog` objects sorted in reverse chronological order by their `dateTime`.

To avoid this whole encoding decoding fiasco, I should use [protocol buffers](https://developers.google.com/protocol-buffers/). That way I can define the data I want to store and then generate the `Kotlin` and `Python` classes I need. I have known about protocol buffers for a few years now, but haven't actually utilized them in a non-work related project. It's even more interesting since I will be using two different programming languages!

### Protocol Buffer Format

I want to save four main pieces of data for each phone call in the log. Funny enough an address book with phone numbers is exactly the example used in the [ProtoBuf Tutorial](https://developers.google.com/protocol-buffers/docs/kotlintutorial)

- `phoneNumber`: The phone number
- `dateTime`: The time the call started in [Epoch Unix Timestamp](https://www.unixtimestamp.com/) format
- `callDuration`: The duration of the call in seconds
- `logType`: An enum of call types: 1=Incoming, 2=Outgoing, 3=Missed, 5=Rejected

```proto
syntax = "proto3";
package calls;
import "google/protobuf/timestamp.proto";

message Call {
    string number = 1;
    google.protobuf.Timestamp datetime = 2;
    int32 duration = 3;

    enum CallType {
        Incoming = 1;
        Outgoing = 2;
        Missed = 3;
        Voicemail = 4;
        Rejected = 5;
        Blocked = 6;
        AnsweredExternally = 7;
    }

    CallType type = 4;
}

message CallHistory {
    repeated Call calls = 1;
}
```

Now to generate the accompanying classes in both `Kotlin` and `Python`

`protoc -I=$SRC_DIR --java_out=$DST_DIR --kotlin_out=$DST_DIR $SRC_DIR/call.proto`
`protoc -I=$SRC_DIR --python_out=$DST_DIR $SRC_DIR/call.proto`

```xml
<?xml version='1.0' encoding='UTF-8' standalone='yes' ?>
<callLogBackUp>
  <callLog>
    <phoneNumber>+1206xxxxxxx</phoneNumber>
    <dateTime>1608106156835</dateTime>
    <callDuration>90</callDuration>
    <logType>1</logType>
  </callLog>
<callLogBackUp>
```

## Parsing XML

First thing I want to do is parse the XML file content into a list of objects with some more friendly fields.
That object will look like

```python
call_log = {
    'number': '+1206xxxxxxx',
    'datetime': datetime,
    'duration': timedelta,
    'type': LogType.Enum,
}
```

## Rendering the Image

I heard [PIL](https://pypi.org/project/PIL/) library was easy to use and so that's what I used. I think it was also why I chose Python in the first place :thinking:
[PIL Documentation](https://omz-software.com/pythonista/docs/ios/PIL.html)

Each type of call is rendered using a different colour.

Which is also rendered at the top left corner of the final image along with the count of each call type.

Calls are rendered as being at least 6 minutes so they get rendered as a sliver in the image rather than not appearing at all.

I actually hadn't realized at the time of writing this program, but `PIL` is no longer being developed for.
<https://note.nkmk.me/en/python-pillow-basic/>
Maybe I should change the dependency to `Pillow`... *joke about using Pillow to smother PIL*

I tried to make it look pretty, so I got a pallett from this website I've used a bunch for little projects: [Flat UI Colours](https://flatuicolors.com/)

## Executing the Program

I wanted the program to be able to do the filtering to a single phone number if provided rather than having the user modify their `XML` file manually to remove phone calls irrellevant to the image they want to produce.
The 3 command line arguments are thus

1. number: The number to use when filtering `callLog` objects. Note: Exclude hypens and country code (e.g. `+1`)
1. xml_file: The path to the input `XML` file
1. image_file: The path to the output `PNG` file

Example execution: `python call_log.py [number] xml_file.csv calls.png`
Note: You will need to have [Python](https://www.python.org/downloads/) installed to run the above command.

## Final Product

![Call Visualization](/assets/img/calls.png)
*Completed one night for the girl I was evidently talking to a **lott** at the time.*

View the full source code file on my GitHub [here](https://github.com/mic-max/calls)

After looking at the final image and seeing no calls between the hours of 6am to 9am, maybe 6:00 should be the top row rather than 0:00. That way the calls that crossover the midnight mark can be rendered as a single block rather than the currently disjointed way. Any easy-hack of a way to do so would be to subtract 6 hours from all `datetime` fields... It also will elimate any of the purple in the original image that was used to indicate a date change happening while a call was happening.
