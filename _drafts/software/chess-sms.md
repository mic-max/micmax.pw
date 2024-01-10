---
title: Chess SMS
---

<!-- TODO update blitz sms post with links "stay tuned" -->

Chess can be played in various forms of long-distance correspondence, I will put the power of Blitz SMS to good use!

This project will involve several moving parts including HTTP services, database, and an Android app. If any iOS developers want to port this to Android please reach out!

## Correspondence Chess

[Wikipedia Article](https://en.wikipedia.org/wiki/Correspondence_chess)

## Android App

Requirements

- Send SMS
- Receive SMS
- Use WiFi if it is present (there's no point in using the SMS proxy that is Blitz SMS if you have a solid WiFi connection. There might be valid reason to not use Mobile Data, such as, out of data and it is throttled to 1 KBph)
- Validate chess moves
- Display a chess board

Sending, receiving and using WiFi when available are all irrelevant to the actual application so they should be abstracted away from such. That way a second game would be easier to implement.

Question: Should I come up with a second application to use Blitz SMS, should that be part of the same Android app? Currently, I'm leaning to No.
