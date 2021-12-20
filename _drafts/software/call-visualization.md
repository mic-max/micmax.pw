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

[YAML Deserialized to Python Custom Class](https://pynative.com/python-yaml/)

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

`TODO`

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

<https://android.stackexchange.com/questions/16915/where-on-the-file-system-are-sms-messages-stored>
in sqlite db - need to root phone to view them.
`adb find / -name "*mmssms*"`

- `./dbdata/databases/com.android.providers.telephony/mmssms.db`
- `./data/data/com.jb.gosms/databases/gommssms.db`

<https://android.stackexchange.com/questions/189110/sms-mms-database-location>
<https://newbedev.com/can-adb-be-used-to-recover-sms-messages-while-in-permanent-safe-mode>
<https://android.stackexchange.com/questions/61153/how-can-i-get-the-last-dialled-number-and-call-duration-via-adb>
<https://www.fonepaw.com/tips/where-are-text-messages-stored-android.html>
[Root Guide - Pixel 4a (5G)](https://forum.xda-developers.com/t/guide-root-pixel-4a-5g-android-12.4221133/)

<https://www.androidpolice.com/2018/06/11/google-duo-lets-export-call-history-easily-no-adb-hacks-necessary/>

```text
Timestamp, Activity type, Local user, Remote user, Direction, Length
2020-05-02 12:56:21, Call, +16137954472, +12069146982, Incoming, 0
2019-07-24 18:12:59, Call, +16137954472, +1-44533ea9-1df1-4763-8ba5-95016b8546b4, Incoming, 0
```

[sqlit3 on Android](https://forum.xda-developers.com/t/no-sqlite3-commands-available-via-adb.1817246/)
a comment has a github link <https://github.com/stockrt/sqlite3-android> with a script to make the binary. someone also just uploaded a zip file with one they made, had, or found.

1. install ndk-build
1. install make on wsl linux
1. make clean
1. make
   - which failed because I installed ndk-build for windows not wsl linux
1. run ndk-build from the `sqlite3-android-master` directory
1. `adb push .\libs\armeabi-v7a\sqlite3-static /data/local/`

```text
> adb push .\libs\armeabi-v7a\sqlite3-static /data/local/
adb: error: failed to copy '.\libs\armeabi-v7a\sqlite3-static' to '/data/local/sqlite3-static': remote couldn't create file: Permission denied
.\libs\armeabi-v7a\sqlite3-static: 1 file pushed, 0 skipped. 62.0 MB/s (587476 bytes in 0.009s)

> adb root
adbd cannot run as root in production builds

> adb shell su
/system/bin/sh: su: inaccessible or not found
```

1. `adb shell chmod 755 /data/local/sqlite3`
1. `adb shell /data/local/sqlite3 -help`

```text
> adb push sqlite3 /data/local/tmp/sqlite3
C:\Users\PROLE\Downloads\sqlite3\sqlite3: 1 file pushed, 0 skipped. 60.7 MB/s (33428 bytes in 0.001s)
> adb shell chmod 775 /data/local/tmp/sqlite3
> adb shell /data/local/tmp/sqlite3
"/data/local/tmp/sqlite3": error: Android 5.0 and later only support position-independent executables (-fPIE).
```

<https://sqlite.org/download.html>
<https://sqlitebrowser.org/>

<https://developer.android.com/studio/command-line/adb>
Could not be opened in Microsoft Edge, so I had to use Firefox. Then it started working randomly after a few error codes...

At this point of trying to not use a third party call history exporter I was considering taking a video of me scrolling through my call history on my phone. Or maybe I could take a bunch of screenshots and vertically stitch them together. Then analyze it using optical character recognition and template matching for any icons...
This project was originally done in a few hours and now I am blowing it up, but like in a fun way, ya know... :bomb:
Maybe if I spend more time developing this little program than I spent on the phone it would hurt less.

Beginning of script could open phone history page, make screenshots, scroll perfect amount down until reach the bottom? then use `adb pull` to copy images from device to dev machine.
[ADB Screenshot](https://developer.android.com/studio/command-line/adb#screencap)

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
<https://note.nkmk.me/en/python-pillow-basic/> In fact, I tried to `pip install PIL` and turns out it's not even hosted on `PyPi` anymore... [Python Imaging Library Project Page](https://pypi.org/project/PIL/)
Maybe I should change the dependency to `Pillow`... *joke about using Pillow to smother PIL*
Thankfully, no code change was needed to migrate between the two libraries 🙏

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
*Completed one night for the girl I was evidently talking to **a lott** at the time.*

View the full source code file on my GitHub [here](https://github.com/mic-max/calls)

After looking at the final image and seeing no calls between the hours of 6am to 9am, maybe 6:00 should be the top row rather than 0:00. That way the calls that crossover the midnight mark can be rendered as a single block rather than the currently disjointed way. Any easy-hack of a way to do so would be to subtract 6 hours from all `datetime` fields... It also will elimate any of the purple in the original image that was used to indicate a date change happening while a call was happening.
