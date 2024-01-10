---
title: Radio Data System
---

<https://en.wikipedia.org/wiki/Radio_Data_System>
could be in a friends car and boot up my radio so it shows some funny text on their radio instead of the real one?

<https://en.wikipedia.org/wiki/File:United_States_Frequency_Allocations_Chart_2016_-_The_Radio_Spectrum.pdf>

<https://en.wikipedia.org/wiki/FM_broadcasting>

Create a device that can quickly list all the stations and current song being played.
LCD display, configurable for your country with dip switches? buttons to go to next and previous page of results. battery. usb port to charge battery or a door if it is powered by AA or AAA. a power switch, fall asleep after x minutes? to preserve battery life. Likely would only be used for a few minutes every so often. AA battery has 3.9 Watthours, so if it took 1 W to power the device, it could be on for nearly 4 hours on a single battery. How much battery is used when turned off, what is the idle lifetime? add a small speaker for alerting user of invalid inputs, emergency announcements, other uses?
How many stations are usually available in a given area? The amount of stations should fit on a reasonable number of LCD "pages"
How long does it take the device to get all the information needed from the Radio Data System when a station is present, how long to detect that there is no station at this frequency. Even if it could scan all 48 maximum theorhetical stations 100 times a second, that might not be ideal for power consumption. Finding a good balance of refresh rate and power usage. Maybe only scan the range of the last page to the next page (12 total if using a 4x20 display)

How to display information on the LCD (4x20)

- Fixed radio station freq on left or right
- Scroll the artist name | song name
- Flash between artist name and song name (if either is too long just truncate it? (15 chars (20 - 4 for the station frequency and a spacing character, or 2 LCDs?!!! 4x5 for station freqs) should be enough for either)
  - This seems the best option. If artist name and song fit then obviously no need to flash, just join with a pipe character or something, even space character? who knows!!!

FM radio broadcasting frequency band is from `87.5 MHz` to `108.0 MHz` (usually?).

The bandwidth of a FM transmission is given by the Carson bandwidth rule which is the sum of twice the maximum deviation and twice the maximum modulating frequency. For a transmission that includes RDS this would be 2x75kHz + 2x60kHz = `270 kHz`. This is also known as the Necessary Bandwidth

Combining the odd decimals in the US and `270 kHz` bands the typical `400 kHz` gaps between stations [seen here](https://radio-locator.com/cgi-bin/locate?select=city&city=Seattle&state=WA) makes sense. Meaning there could be a maximum number of 48 stations legally allowed in a certain geographic location.

Random noise has a triangular spectral distribution in an FM system, with the effect that noise occurs predominantly at the higher audio frequencies within the baseband

The frequency of an FM broadcast station (more strictly its assigned nominal center frequency) is usually a multiple of 100 kHz
In most of South Korea, the Americas, the Philippines and the Caribbean, only odd multiples are used

Digital services are now also available. A `57 kHz` subcarrier (phase locked to the third harmonic of the stereo pilot tone) is used to carry a low-bandwidth digital Radio Data System signal, providing extra features such as station name, Alternative Frequency (AF), traffic data for commercial GPS receivers26 and Radio text (RT). This narrowband signal runs at only `1,187.5 bits per second`, thus is only suitable for text.

In the United States and Canada, digital radio services are being deployed within the FM band rather than using Eureka 147 or the Japanese standard ISDB.

"TA flag turning on for a particular station of the network in a particular moment due to a traffic programme being broadcast"
- show this instead of song name if present?

### RBDS Data Encoding Format

At the data link layer, 26 consecutive bits form a "block", consisting of 16 data bits followed by 10 error correction bits. Four blocks make a 104-bit "group". The error correction bits also encode the "offset", or block number within a 4-block group.

Block:

|----DATA------||--ECC---|
0123456789ABCDEF0123456789

Group (4 consecutive blocks): Either 

|           Block A      ||             Block B    ||         Block C or C'  ||          Block D       |
|----DATA------||--ECC---||----DATA------||--ECC---||----DATA------||--ECC---||----DATA------||--ECC---|
0000000000000000FFFFFFFFFF1111111111111111EEEEEEEEEE2222222222222222DDDDDDDDDD3333333333333333CCCCCCCCCC

ECC encodes the offset either group 1, 2, 3, or 4.

Block 1: Program Identification Code
Block 2 Bits
    GTYPE: Group Type
    B0: If B0=0 then Message Group Type A else Type B
    TP: Traffic Program. Indicates this channel includes periodic traffic reports.
    PTY: Program Type (See § Program types.)
    ????: Rest of the bits are group type dependent
Block 3: 

[EBU Charset](https://tech.ebu.ch/docs/tech/tech3232a.pdf)

IEC standard 62106
EN 50067:1998

Error Correction: 10-bit cyclic redundancy check with polynomial x10+x8+x7+x5+x4+x3+1.
There are slightly over 11.4 groups transmitted per second.
MSB first.
Blocks A and C′ always include the PI code; offset C is used when the third block contains something else.
GTYPE: 2 Radio Text
The station name and decoder identification code is sent progressively over 4 groups, where the offset is defined by bit C1 and C0. Which would take `0.35s`.
Each of the 64 or 32 character RTs are 8 bit characters?

PI (programme identification)
This is the unique 4 character hexadecimal code that identifies the station. Every station in a country should use a unique 3 character code with the correct country prefix character. In the US, PI is determined by applying a formula to the station's call sign, or randomly assigned by the NRSC to FM translators (which have a longer call sign, making them incompatible with the formula).

PS (programme service name)
This is simply an eight-character static display that represents the call letters or station identity name.

PTY (programme type)
This coding of up to 31 pre-defined programme types (e.g., in Europe: PTY1 News, PTY6 Drama, PTY11 Rock music) allows users to find similar programming by genre.
> Add sticker with the list of these to the back of the device. Maybe have a switch that goes between two views: song and artist to programme type and station name?

Companies such as ST Microelectronics, Silicon Labs in Austin, Texas and NXP Semiconductors (formerly Philips) offer single-chip solutions that are found in these devices.

| PTY Code | RDS Program Type      | RBDS Program Type     |
| 0        | No programme type or undefined                |
| 1        | News                                          |
| 2        | Current affairs       | Information           |
| 3        | Information           | Sports                |
| 4        | Sport                 | Talk                  |
| 5        | Education             | Rock                  |
| 6        | Drama                 | Classic rock          |
| 7        | Culture               | Adult hits            |
| 8        | Science               | Soft rock             |
| 9        | Varied                | Top 40                |
| 10       | Pop music             | Country               |
| 11       | Rock music            | Oldies                |
| 12       | Easy listening        | Soft music            |
| 13       | Light classical       | Nostalgia             |
| 14       | Serious classical     | Jazz                  |
| 15       | Other music           | Classical             |
| 16       | Weather               | Rhythm and blues      |
| 17       | Finance               | Soft rhythm and blues |
| 18       | Children's programmes | Language              |
| 19       | Social affairs        | Religious music       |
| 20       | Religion              | Religious talk        |
| 21       | Phone-in              | Personality           |
| 22       | Travel                | Public                |
| 23       | Leisure               | College               |
| 24       | Jazz music            | Spanish Talk          |
| 25       | Country music         | Spanish Music         |
| 26       | National music        | Hip hop               |
| 27       | Oldies music          | Unassigned            |
| 28       | Folk music            | Unassigned            |
| 29       | Documentary           | Weather               |
| 30       | Alarm test            | Emergency test        |
| 31       | Alarm                 | Emergency             |

Be able to filter the results to 1 (or more?) PTY codes. A 5 pin dip switch
Or something crazier like [this hex char selector](https://www.digikey.com/short/w7hzqbmt) two of these would be 1 5 pin dip switch, not practical but this is a weird device anyways, it might make it more fun :P All positions of the two would be valid thouogh, so it would require another toggle button to act as the filter enable.

Or with some other mode I could use the existing prev/next page buttons to increase the number and show on the screen... Enter this filter mode by holding them both down for `x` seconds or something.

RT (radio text)
This function allows a radio station to transmit a 64 (or less commonly 32) character free-form text message that can be either static (such as station slogans) or in sync with the programming (such as the title and artist of the currently playing song).

RT+ (radio text plus)
An enhancement of the original RT which allows Artist, Title and some other metadata to be sent to receivers.

TA, TP (traffic announcement, traffic programme)
The receiver can often be set to pay special attention to this flag (taking advantage of the EON linkage if it's available) and, for example, pause a CD or retune to receive a traffic bulletin. The TP flag is used to allow the user to find only those stations that regularly broadcast traffic bulletins whereas the TA flag is used to signal an actual traffic bulletin in progress, with radio units perhaps performing other actions such as pausing a CD/MP3 (so the radio can be heard) or raising the volume during the traffic bulletin.

Listen for the needed parts from RBDS and after getting it switch to the next station. This will reduce time wasted.

## Best Seattle Stations

KEXP 90.3 Alternative
KISM 92.9 Classic Rock
KISW 99.9 Rock
KZOK 102.5 Classic Rock
KNDD 107.7 Alternative
