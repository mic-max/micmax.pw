---
layout: post
title: Blitz SMS
---

Have you ever found yourself without mobile data, but still could send texts, but also don't want to text your friends? Maybe you're a cheapskate, maybe the c
Boy do I have good news for you! All the Internet stuff you like on your phone using only text messages! It is also a lot worse by the way.

## 2G Sunset

2G networks around the world are set to be taken down and the frequencies will be repurposed for 5G.
[2G Shutdown Dates](#TODO)
Unfortunately for me when I bought the [SIM 800L GSM Module](https://www.amazon.com/gp/product/B01A8DQ53E) for $10 on `July 24, 2020`. I didn't know about this and was using 

## SMS Services

There exist several online services that allow you to rent a phone number and send/receive texts, make calls, etc. This is all done through their online portal where you can configure a server endpoint that will be used to reply to incoming text messages. Some also have more graphical interfaces for programming the responses easily without programming knowledge. I will only be focusing on the SMS, however using the phone call capabilities is intriguing for transferring larger amounts of data in a [dial-up-esque fashion](https://youtu.be/gsNaR6FRuO0).

They provide SDKs for several languages.

I don't want to use them because the cost of the service at scale can become quite expensive. It also prevents me from being able to send thousands of texts without incurring debt not dissimilar to that which the college students of America must recompense.

## SMS to HTTP Proxy

The plan is to make an SMS to HTTP proxy. We will send an SMS to the proxy, it will make an HTTP request created with content from the SMS to the server and receive the response. Then the response will be sent back to the phone number that made the original SMS request and any other SMS messages can be sent.

It also needs to have an HTTP endpoint that sends an SMS according to the input phone number and message contents. This is needed

The above is a simplified, but mostly correct explanation of how the proxy will work. Sometimes it will not reply to the original sender with anything.

### 4G Hardware

- Unlimited Text Plan from [Tello](https://tello.com/buy/custom_plans) at $5 a month (SIM Card for $2)
- [ESP8266 NodeMCU Dev Board](https://www.amazon.com/gp/product/B010O1G1ES) for $8
- [SIM7000A GSM Module](https://www.amazon.com/gp/product/B0825MFP8P) for $46

### Software

[Arduino - Software Serial](https://docs.arduino.cc/learn/built-in-libraries/software-serial)
[ESP8266 WiFi](https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/readme.html)
