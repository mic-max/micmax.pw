---
title: Remote Control Analysis - HackRF One
---

What is [`dBm`](https://en.wikipedia.org/wiki/DBm)? It stands for decibel milliwatts. It is a measure of absolute power on a logarithmic scale. I couldn't tell you much more than that honestly. The greater the number, the better the signal for radios. We will be operating with a TX power between `-10dBm` and `15dBm`

<!-- https://www.electronicdesign.com/technologies/communications/article/21796484/understanding-wireless-range-calculations -->

1. Install the [HackRF One Windows Software](https://downloads.myriadrf.org/builds/PothosSDR/)
1. Plug HackRF One into PC with a Micro USB cable

Lookup radio specifications using [fccid.io](https://fccid.io/SYW-TAPRGBWREMSC). I learned that it operates at the frequency `2.402 GHz`, so it is likely over Bluetooth. Output watts: `0.00043 W`.
