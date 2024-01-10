---
title: Chess Scoresheet Scanner
---

Take a photo of a scoresheet and return a PGN

- OCR (limited character set for the moves KQBNR abcdefgh 12345678 + # 1-0 x o-o o-o-o)
    - Must be a legal move. Find all legal moves and see which one it is closest to?
- Correctly align a sheet
- Detect the circled option for the winner
- Support multiple pages (start with just 1 USCF sheet, 60 moves)
