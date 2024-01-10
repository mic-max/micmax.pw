---
title: File Quality Enhancing
---

Enhance quality of a file without having to redownload the entire new version.
For example, I have downloaded a song at 128kbps. I later decide that I want the 320kbps version.
A server can be asked for a download saying I already have version X and I want version Y.
The server can compute or if it already has the conversion produced send that to the user.
The client then receives this new file that it can merge with an algorithm locally. Hopefully it is fairly simple...
Also optimize for doing to multiple files. Since doing file operations is slow, keeping as much of the original data in its starting location is best.
 Example: We have 6 files all songs that are 128kbps and we want to upgrade to 328kbps. That is a tripling of the size.
 reduce fragmentation?
 128kbps songs: | 1 | 2 | 3 | 4 | 5 | 6 | 
 320kbps songs: |xxx  1     |     2     |     3     |     4     |     5     |     6     |
  the xxx indication the data taken from the existing local 128kbps song 1 already on the device.
  we just needed to append the other 2/3 of the 320kbps file that we downloaded.
 well... my idea was that all the data in song 1 at 128kbps would remain at its current location.
  that might be possible depending on the file format... but I believe .wav is sequentially stored.


Real World Application.
Spotify saved files for offline play. Changing the setting for Audio Quality > Download will redownload all your songs?
For many people the

- Work for downgrading a file too!

download a wave file at 128kbps
then later decide you want the full 320 kbps version

how can that be downloaded without using much more bandwidth in total than the 320kbps file.
will need to download only the missing 60% of the file. this is more difficult for non doubling quality increases which could simply include the middle frequencies, then have the client merge the two. the server could create these files on demand probably more effective to save data needed for the matrix of quality upgrades.

how does jpeg do this with the progressive loading. maybe similar can work?
