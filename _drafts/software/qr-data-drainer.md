---
layout: post
title: QR Data Drainer
---

The idea is to spread awareness of the risks that come with scanning random QR codes in the wild. The penalty for scanning mine: draining 100 MB from your data plan. Here's hoping you have unlimited.

## Download File QR Code

There are different types of QR Codes, some of which are

- Contacts
- WiFi Credentials
- Download file

### Static vs. Dynamic Codes

Static codes encode all the data within the QR code. Some are the URL, text, contact, email, phone, or SMS.
Dynamic codes point to an online location to get the PDF, application, MP3 file, etc.

Dynamic codes allow you to modify what the client will receive without having to change the QR code after the fact.

## Other

1. Create file download service
1. Generate QR Codes
1. Make them (stickers, spraypaint templates, paper)

## File Download Service - Drainer

The reason I want to create a service instead of simply setting up some apache file server is to collect analytics.

<!-- TODO answer above question better -->

Originally I tried the CLI guide but had issues with the `func init` command so I followed the [C# Azure Function for VS Code Guide](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-csharp) instead.

- Add `<GenerateAssemblyInfo>false</GenerateAssemblyInfo>` to `.csproj` according to [this](https://stackoverflow.com/a/44502724)
- Warning: [NuGet Manager] [Warning] The plugin credential provider could not acquire credentials. Authentication may require manual action. Consider re-running the command with --interactive for `dotnet`, /p:NuGetInteractive="true" for MSBuild or removing the -NonInteractive switch for `NuGet`

![Azure Function Errors](/assets/img/qr-data-drainer/func-errors.png)

<!-- https://github.com/fukuchi/libqrencode -->
<!-- https://github.com/zxing/zxing/wiki/Barcode-Contents -->

I actually want my endpoint to send a file, a very large file, to the client, not a tiny amount of text. Some modifications are required. I found [the same question on Stack overflow](https://stackoverflow.com/questions/55499499), muhaha.

```csharp
[FunctionName("MyFunction")]
public static async Task<IActionResult> Run(
    [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = "video/{fileName}")] HttpRequest req,
    [Blob("test/{fileName}", FileAccess.Read, Connection = "BlobConnection")] ICloudBlob blob,
    ILogger log)
{
    var blobStream = await blob.OpenReadAsync().ConfigureAwait(false);
    return new FileStreamResult(blobStream, "application/octet-stream");
}
```

[Source](https://stackoverflow.com/a/64391885)

<!-- ensure QR code immediately starts download. if it says would you like to download pi.txt (100MB) people will much more likely not. -->

## Generate QR Codes

After searching online and watching several videos the most prelevant information seems to be surround online services that you can use to create and host the content of the dynamic QR codes. This is not what I want and after changing my search to include "command line" I found the good stuff.

[Immediately in the first hit, Dave Mckay](https://www.howtogeek.com/devops/how-to-create-qr-codes-from-the-linux-command-line/) explains the issue with the above services

| Why not use an online QR code generator? There are plenty out there, but many of them stipulate they are allowed to retain and store the information you provide them, and they can do what they want with the data. if you’re going to be creating QR codes with personal or sensitive information in them, such as contact details or Wi-Fi connection details, this poses a significant security risk. All your data stays within your control if you use a command-line tool like qrencode. It also allows you to create scripts and aliases to create QR codes programmatically.

[Similar sentiment from Paul E King](https://pocketables.com/2022/01/how-to-format-that-wifi-qr-code-in-plain-text.html)

| Side note – every QR code generating website that keeps contacting me: this is how to do without your service for purposes of creating something manually in like, a label maker. I am not linking to you. I know you want SEO of this, but when I link to places that auto generate it, this defeats the purpose

From Ubuntu running on WSL

```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install qrencode
```

### Connect to WiFi w/ QR Code

This is possible. In fact I used to have one printed out on a drawing of my WiFi password in my apartment that I have taken down and for obvious reasons won't share a picture here.

But, how did that work?

Is there anything special in the QR code standard that specifies WiFi authorisation or is it just regular text data that phones can recognize as a WiFi login and understand what to do.

One way to find out is by generating one with `qrencode` and one with some online generator. I read them using `qrencode -r -o -` which output the same data. However the images differed, meaning the [online generator](https://www.qr-code-generator.com/solutions/wifi-qr-code/) and qrcode programs were using different amounts of error correction.

`qrencode -r /mnt/c/Users/PROLE/Downloads/wifi.png -o -`

```text
PNG

D;ֈ:QKKK/PLTEٟtRNSȵ        pHYs~IDAT8ӱ
 &LmdhDoX7=&o%x٥j9{:;z$B__yy-G;#cYQDͥv;k>@&.kRE/apܽ=+.qySVѽcЌIENDB`
```

`qrencode -r qr.png -o -`

```text
PNG

D;ֈ:QKKK/PLTEٟtRNSȵ        pHYs~IDAT8ӱ
 &LmdhDoX7=&o%x٥j9{:;z$B__yy-G;#cYQDͥv;k>@&.kRE/apܽ=+.qySVѽcЌIENDB`
```

```shell
SSID=SSID_GOES_HERE
pwgen -s 63 > 00wifi.txt
qrencode -o 00wifi.png "WIFI:T:WPA;S:${SSID};P:$(cat 00wifi.txt);;"
```

[Source](https://feeding.cloud.geek.nz/posts/encoding-wifi-access-point-passwords-qr-code/)

<!-- https://youtu.be/KMsvtqQqz5g -->
<!-- https://youtu.be/4CnPN_NtWsY -->

Each should point to a specific URL. It should also include a unique identifier so I can correspond requests to real world locations. guid? or incrementing id? long + lat in the query param.

<!-- What is the data stored in a QR code that is all white where it can be? how hard is it to read? is it even possible? how are the masks applied? -->

How much of the file was downloaded
How long did it take
Download speed (calculate from above two metrics)
Which QR code or location
Date and time of request
Device name and type?

Azure function?
OpenTelemetry?
Host file in azure storage blob?

## Manufacturing Stickers

I think making stickers is the best strategy. I also would get to learn how to make stickers, something I already want to do.

Printing them out would be boring and taping them to poles would take longer than slapping on a sticker.
Making stencils for a QR code also might prove difficult since the white part needs to be uninterrupted to avoid needing to add supports so parts don't completely fall through.

## Dispersing Codes

Strategic placement is everything. It should be easily scannable by someone walking by with their phone.
Sizing? 2cm x 2cm?

## Cost

I get a monthly $150 in Azure credits by being a Microsoft employee.
