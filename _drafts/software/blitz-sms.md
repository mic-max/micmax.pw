---
layout: post
title: Blitz SMS
---

Have you ever found yourself without mobile data, but still could send texts, but also don't want to text your friends? Maybe you're a cheapskate, maybe the c
Boy do I have good news for you! All the Internet stuff you like on your phone using only text messages! It is also a lot worse by the way.

## 2G Sunset

2G networks around the world are set to be taken down and the frequencies will be repurposed for 5G.
[2G Shutdown Dates](#TODO)
Unfortunately for me when I bought the [SIM 800L GSM Module](https://www.amazon.com/gp/product/B01A8DQ53E) for $10 on `July 24, 2020`. I didn't know about this and was using my own sim card, which I thought might just not be compatible with the module.

Originally I followed [this guide](https://lastminuteengineers.com/sim800l-gsm-module-arduino-tutorial/), it has some information that is still applicable to 4G with the SIM7000.

## SMS Services

There exist several online services that allow you to rent a phone number and send/receive texts, make calls, etc. This is all done through their online portal where you can configure a server endpoint that will be used to reply to incoming text messages. Some also have more graphical interfaces for programming the responses easily without programming knowledge. I will only be focusing on the SMS, however using the phone call capabilities is intriguing for transferring larger amounts of data in a [dial-up-esque fashion](https://youtu.be/gsNaR6FRuO0).

They provide SDKs for several languages.

I don't want to use them because the cost of the service at scale can become quite expensive. It also prevents me from being able to send thousands of texts without incurring debt not dissimilar to that which the college students of America must recompense.

[Two-way Interactive Text Messaging Applications](https://www.developershome.com/sms/sms_tutorial.asp?page=egApps) Excellent description of what I want to enable with this project. The entire SMS Tutorial on this website is fantastic.

### Commercialising

Let's say I made a bunch of these boards and purchased more Tello SIM cards for them all. How could I provide a similar service to Twilio or Plivo at a much smaller scale and only considering SMS functionality.

It doesn't make sense to have a management device on the network if there is only one SIM7000. In that case, enable management functionality on the single board.

Customer needs to be able to:

- Purchase an available number (website)
- Set the endpoint that received SMS will use for a number they own (website)
- Send an SMS from a number they own (not website, backend server)

How will the website communicate with the management server? The management server could use SMS as its main request form and the website could use a twilio number.

Or the management server could be hosted from a static IP address on the same network as the ESP8266 servers. The twilio method still achieves the goal of using minimal SMS messages for the application, only management will be done over this number. It also adds implicit security as the ESP8266's servers can be setup to only listen to requests from this number (or list of numbers if there's a need to have multiple).

If the backend service sends requests to the SIM7000 over SMS then the SMS receive handler needs to on every text it receives check if the `From` phone number is one of the management servers. This adds additional complexity, but isn't too bad.

I will need a program to communicate with all my ESP8266 boards. That program could send an HTTP request to the ESP8266's server that modifies the endpoint it proxies with.

The program will need to find all ESP8266's on the network, maybe perform some basic HTTP request that the ESP8266 will respond with OK or some status like `phoneNumber`, `endpoint`, etc. With the list of server IP addresses to phone number mapping this program can route requests properly.

To purchase an available number there must exist a Tello number that has been activated and is not used by anyone else. If there are no available activated numbers then check if there are any available boards with not-yet-activated SIMs. If there are, assign one of those and send an activation request to tello (on the back of the package there is an activation code that when setting up the board will be hardcoded into the program using #define ACTIVATION_CODE or similar. Then `tello.com/activate`, it should be fast to register and boom we're in business. Will also need some account information so that the activated number is associated with my account? #define )

#### Activate Tello SIM Programmatically

From the `tello.com/activate` webpage there is a text field for the activate code and a button. Very simple. Upon pressing the button, there can be a Google reCAPTCHA. Could leverage [anti-captcha](https://anti-captcha.com/) to jump that hurdle. Afterwards it sends an XHR POST request to `https://tello.com/process_activate` containing the following form data.

I assume it knows which account to associate the Tello number with based on the account used to purchase it since when activating it you don't need to be logged in. (TODO I think...)

content-type: application/x-www-form-urlencoded; charset=UTF-8

##### Invalid Activation Code

_token: 0d162133becf7260be76c7f894c80b66:6f2f2f5f88ad8bb14962f8a347a5350f:1659654492
_nothing_9d45549f9692d363:
_snowman: ☃
action: validate_activation_code
activation_code: 123456789
g-recaptcha-response: maybe-base64-string-varying-in-length-around-600-characters

The response received was the following, note that the activation code provided is just a random 9 digit code.

```json
{
    "status": false,
    "mobile_sim": null,
    "message": "The activation code is not correct. You can find the 8-9 digit Activation Code printed on the plastic card containing your SIM."
}
```

The `message` is shown on the webpage as an error after making the bad request.

##### SIM Already Activated

_token: 0d162133becf7260be76c7f894c80b66:6f2f2f5f88ad8bb14962f8a347a5350f:1659654492
_nothing_9d45549f9692d363:
_snowman: ☃
action: validate_activation_code
activation_code: 123456789
g-recaptcha-response: long-ass-maybe-base64-string-612-characters

```json
{
    "status": false,
    "mobile_sim": null,
    "message": "It seems that your SIM is already registered with <strong>Tello</strong>."
}
```

Notes:

- Uses the same `_token`, `_nothing_xxx`, `_snowman` in both requests
  - They were made at similar times from the same private browser session though

Using curl to try to emulate an activation request

```console
curl -X POST https://tello.com/process_activate \
    -F '_token=0d162133becf7260be76c7f894c80b66:6f2f2f5f88ad8bb14962f8a347a5350f:1659654492' \
    -F '_nothing_9d45549f9692d363=' \
    -F '_snowman=☃' \
    -F 'action=validate_activation_code' \
    -F 'activation_code=123456789' \
    -F 'g-recaptcha-response=6'
```

##### SIM Activated Successfully

TODO

#### Send SMS from owned number

Current Plivo and Twilio libraries do this as such. They create a client using some sort of authentication like a username and password.

```javascript
const plivoClient = new plivo.Client('<auth_id>', '<auth_token>')
plivoClient.messages.create({ src, dst, text })
```

<!-- dst can be an array of destination numbers -->

Their application is sending a HTTP POST request to the service's backend API.

[Alternative direction](https://stackoverflow.com/questions/8284067/send-at-commands-to-android-phone), send AT commands to a phone plugged into the PC.

### SIM7000A Send SMS

Set baud, set text mode, power on, make text, check if text was valid.

### SIM7000A Receive SMS

listen to sms

### SIM7000A Receive Call

listen to call. i don't want anything to do with calls at the minute, so I will simply hangup.
maybe I can just not listen to calls though and it will work just as well?

#### Port Forwarding on xFinity

First of all, Comcast (the company behind xFinity) is trash and have beautifully paired their trash with a shitty router management system. I can't just change my router settings from a local HTTP server it hosts. No. I have to download their app and do it over the Internet.

1. View network details
1. Advanced settings
1. Port forwarding
1. Add port forward
1. Select device and set the port you want to open to the Internet, my ESP8266 comes up as `Generic Brand IoT device`

It is possible that xFinity changes my public IP address. To combat this if I run a program on my local network that constantly checks my public IP using something like [this](https://www.npmjs.com/package/public-ip) we can update the services that communicate to the local network over the Internet (currently I think that is just the backend API)

## SMS to HTTP Proxy

The plan is to make an SMS to HTTP proxy. We will send an SMS to the proxy, it will make an HTTP request created with content from the SMS to the server and receive the response. Then the response will be sent back to the phone number that made the original SMS request and any other SMS messages can be sent.

It also needs to have an HTTP endpoint that sends an SMS according to the input phone number and message contents. This is needed

The above is a simplified, but mostly correct explanation of how the proxy will work. Sometimes it will not reply to the original sender with anything.

### 4G Hardware

- Unlimited Text Plan from [Tello](https://tello.com/buy/custom_plans) at $5 a month (SIM Card for $2) (Actually is $7.34 due to taxes and surcharges)
- [ESP8266 NodeMCU Dev Board](https://www.amazon.com/gp/product/B010O1G1ES) for $8
- [SIM7000A GSM Module](https://www.amazon.com/gp/product/B0825MFP8P) for $46
- [LTE Antenna u.FL](https://www.amazon.com/Wide-Band-Internal-LoRa-Antenna/dp/B08WJQ7ZS3) for $7 - optional upgrade.
  - I was using the one that was included with my SIM800 but it was not good enough
- `5v` power adapter

Something like [this](https://store.gl-inet.com/products/collie-gl-x300b-4g-lte-industrial-wireless-gateway) would be a cool product to create. Except I allow for it to support 4 different SIM cards, I think this one just does a single one with 4 antennas. Instead make a 4-in-1 device! It would be nice for the antenna connectors and SIM card slots accessible from the outside. Have a single power connector.

### Software

<!-- [](https://pastebin.com/gLeGtJrD) -->
[Protocol Buffer ESP8266 Guide](https://medium.com/grpc/efficient-iot-with-the-esp8266-protocol-buffers-grafana-go-and-kubernetes-a2ae214dbd29)

```shell
curl "http://10.0.0.221:9876/?To=14256237592&Text=kill-the-president"
```

Expected response is `OK` with a code of 200. Good little brainwashed killer :angel:

<!-- markdownlint-disable MD038 -->
Note: To use special characters including these ` !#$%&'()*+,/:;=?@[]` in the cURL command you must use their [percent encoding](https://en.wikipedia.org/wiki/Percent-encoding) value. For example space maps to `%20` which you may have seen in the address bar visiting websites with rogue admins that don't care about the unwritten rule of not using spaces in filenames.
<!-- markdownlint-disable MD038 -->

I was finally able to get the SIM7000 to respond to my AT commands. I'm not sure which one it did but while not connected to the network, it printed `+CMS ERROR: 500` to my PuTTY session.

![CMS Error in PuTTY](/assets/img/blitz/cms-error.png)

This sparked a joy in me, sure it's an error but before this I was seeing nothing, now I have legible errors, which I work to fix! If you've even thought about visiting [`r/ProgrammerHumor`](https://www.reddit.com/r/ProgrammerHumor) then you know this classic meme template.

When I got this error my module was not connected to a tower. I know this because the LED was blinking nearly every second which according to the manual means its looking for a network. I suspect the little antenna isn't enough to exfiltrate the walls of my so called "dungeon" basement apartment. Even my phone's antenna is pretty weak down here in the bleak, dark, and dingy crypt. I downloaded some `Network Cell Info Lite`, haha cell, and it showed `~-115 dBm`. When I was walking around outside I was getting around `~-70 dBm` and the closer to zero the better. I was gonna say the smaller the better but that might be misinterpreted as the most negative value and then we'd all be more confused that we already are, you're welcome for choosing my words carefully so you didn't have to waste any of your valuable time thinking about which one is actually better. I mean I guess common sense would mean you'd think the uninhibited radio with a direct path from my cellular smart phone, I love how everything gets the word "smart" slapped on everything, like come one, well back to the point, would have a better connection than the presumably poor reception in my basement apartment due to all the walls and flesh and other things it has to go around or bound around or whatever these little radio squiggles do. And you'd be right!

<!-- TODO include a screenshot from the cell phone signal app and add timestamps of my location. in basement, running upstairs, on sidewalk, on other sidewalk, etc. -->

I sent myself my first text!

The output from the program was this shown from PuTTY
![First SMS Sent PuTTY Output](/assets/img/blitz/text-works.png)

- the expected `OK` response to `AT`.
- `+CSQ: 12,99` showing signal strength is [OK: ~-89 dBm](https://m2msupport.net/m2msupport/atcsq-signal-quality/)
- `+CREG: 0,1` showing the network is [registered home network on GSM](https://m2msupport.net/m2msupport/atcreg-network-registration/) the values appear to be in opposite order. It wouldn't make sense that I'm not registered and GSM compact because it was able to send the text message later.. unless it registered to the network between this AT command and the send text one...
- the expected `OK` response to `AT+CMGF=1` setting phone to text mode
- the send text command is followed by a newline, message, then `Ctrl + Z` to finialize it. It the replies the expected `+CMGS: [number]`. The number is the message reference number allocated to the SMS text message. TODO what purpose does having a message reference number help?

and this on my cell phone (the first text was one I sent from my phone number to the Tello SIM to make sure it worked)
![First SMS Received](/assets/img/blitz/)

I currently have the code setup and working with the following configuration.

- `SoftwareSerial mySerial(4, 5);` rxPin and txPin respectively
- ESP8266 D2 <=== SIM7000 TXD
- ESP8266 D1 ===> SIM7000 RXD

This [ESP8266 to Arduino IDE pinout](https://esp8266-shop.com/esp8266-guide/esp8266-nodemcu-pinout/) was very helpful!. It translated my ESP8266 pins to values I could use in my code: `D2 --> 4` and `D1 --> 5`.

[`pinMode` - When to use and why](https://www.baldengineer.com/when-to-use-arduinos-pinmode-and-why.html)

The documentation of SIM7000 actually lies, you can't just end with the cariage return alone `\r`. TODO include source?

It took around 30 seconds from powered off for the SIM7000 to connect to the mobile network at signal quality `~12`. Now took 8 seconds.

Sometimes the SIM7000 gets in an unresponsive state. Powering off fixes this issue, but there must be a better way.
Sometimes it gets stuck on the sending of the text, while all the previous AT commands we instant. It does eventually send the message, but would it be fully unresponsive to handling either HTTP or SMS requests in the meantime or would they get buffered? Resetting the ESP8266 with the button resulted in the same long pause before sending the SMS (like 100 seconds).

Aside: There is also a third optional argument `inverse_logic`.

#### Install Arduino CLI

[Install Guide](https://arduino.github.io/arduino-cli/0.25/installation/)
Add the directory you put the arduino-cli.exe to your PATH variable.

<!-- https://arduino.github.io/arduino-cli/0.25/getting-started/ -->
`arduino-cli sketch new MyFirstSketch`
`arduino-cli core update-index`
`arduino-cli board list`
`arduino-cli board listall esp8266:esp8266:generic`
`arduino-cli core install esp8266:esp8266`
`arduino-cli core list` see that the install worked
`arduino-cli config init --additional-urls https://arduino.esp8266.com/stable/package_esp8266com_index.json`
> Config file written to: C:\Users\PROLE\AppData\Local\Arduino15\arduino-cli.yaml
`arduino-cli core update-index` download newly added packages?

Commands that will be used often, before this is mainly just for a one-time-setup.
`arduino-cli compile -b esp8266:esp8266:generic smog` compile program (23 seconds --clean, 8 seconds)
`arduino-cli upload -p COM4 -b esp8266:esp8266:generic smog` upload to board (26 seconds) - note: make sure you don't have arduino ide open or putty, or it will say 'access is denied' to the port.

`arduino-cli compile -b esp8266:esp8266:generic smog -ue -p COM4` Can be used to upload the binary after the compilation. [arduino-cli compile documentation](https://arduino.github.io/arduino-cli/0.26/commands/arduino-cli_compile/)

`-e` will output binary files to the sketch folder. We can then upload these using the command TODO

Modify `Include path` in VS Code (TODO: How to get to this setting)

- Add `C:\Users\PROLE\AppData\Local\Arduino15\packages\**`
- `arduino-cli lib search NTPClient`
- `arduino-cli lib install NTPClient`

<!-- TODO: fix this https://github.com/microsoft/vscode-arduino/issues/678 -->

We can use [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) as an alternative to using `Serial Monitor` included in `Arduino IDE` since I don't want to use that program at all. The `TTY` is capitalised because it stands for teletypewriter and UNIX guys are generous with explaining their jokes. Note: When I open PuTTY it reruns the program? or it buffers and replays the serial communication that already occurred.

Anyways, just set the following options from the main page `Session`.

- `Connection type`: `Serial` (Alt + R)
- `Serial line`: `COM4` or whatever shows up when you ran the `board list` command earlier and saw in the `Port` column (Alt + N)
- `Speed`: `9600` or whatever value you used in `Serial.begin()` (Alt + P)

I uncheck the setting in `Window > Behaviour` named `Warn before closing window`.
Do this too: <https://stackoverflow.com/questions/4999280/how-to-send-characters-in-putty-serial-communication-only-when-pressing-enter>
You probably want to save this to avoid re-typing it in each time you reopen PuTTY.

Easily startup the saved session with: `putty -load esp8266`

Is the date and time in the SMS receive handling provided by the sender or the receiver?

<!-- Set static IP on network to a device https://forums.xfinity.com/conversations/your-home-network/how-do-i-assign-a-static-ip-address-to-a-device-on-my-network/61db98bae41a4a46af430460 no good info... -->

<!-- upload code over WiFi <https://lastminuteengineers.com/esp8266-ota-updates-arduino-ide/> -->

## Analyze Radio Emissions

I would like to analyze exactly what is being transmitted and received by contraption. I'll use my [HackRF One](https://greatscottgadgets.com/hackrf/one/) to do so.

## Simple Blitz SMS Application

For now to test the functionality I will point the Blitz SMS program to a simple echo server written in Node.js. It simply responds to HTTP GET requests with the same message it receives with some basic input validation.

<!-- also add a 2nd endpoint/service that responds with the reversed text -->

This can be used as a base application to create more complex ones. Stay tuned I plan on writing a chess application over SMS.

## Resources

- ESP8266 Specifications
- SIM7000A Specifications
- AT Commands
- [Arduino - Software Serial](https://docs.arduino.cc/learn/built-in-libraries/software-serial)
- [ESP8266 WiFi](https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/readme.html)
- [ESP8266 Web Server](https://links2004.github.io/Arduino/d3/d58/class_e_s_p8266_web_server.html)
  - Alternative server library: [ESP HTTPD](https://github.com/Spritetm/esphttpd)
  - Better docs: <https://github.com/esp8266/Arduino/tree/master/libraries/ESP8266WebServer>
- [Express Server API Documentation](https://expressjs.com/en/5x/api.html)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [ESP8266 Guide](https://tttapa.github.io/ESP8266/Chap14%20-%20WebSocket.html)
- [ESP8266 Socket Server Guide](https://techtutorialsx.com/2018/06/02/esp8266-arduino-socket-server/)
- [Efficient IoT with ESP8266, Protobuf, Grafana, Kubernetes](https://medium.com/grpc/efficient-iot-with-the-esp8266-protocol-buffers-grafana-go-and-kubernetes-a2ae214dbd29)
- [Encoding 7bit Data for PDU in SMS Applications](https://www.codeproject.com/Tips/470755/Encoding-Decoding-7-bit-User-Data-for-SMS-PDU-PDU)
- [Max Concurrent NodeMCU Socket Clients](https://www.esp8266.com/viewtopic.php?f=8&t=10033)
- [Socket Server ESP32 Guide](https://www.dfrobot.com/blog-1003.html)