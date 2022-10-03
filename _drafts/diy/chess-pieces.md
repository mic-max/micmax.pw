---
layout: post
title: Chess Pieces
---

Recently, I've been playing a ton of chess. It's history, difficulty, and universality are all aspects which have drawn me in. I mostly play online but figured having a physical set would be cool and come in handy :crown:

## Chess

Why did I decide to start playing chess and try to improve?
I used to play with my Mom and also I come to find out my Dad was in the chess club in high school.

First off, because it's fun. I enjoy playing games and learning new openings and strategies, it gives me something to study now that I'm no longer in school.
The game been played for centuries in its current form.

Picturing myself (combating senality) in an old folks home playing chess and dominating the squares brings me a weird amount of comfort. Maybe its that in this hypothetical I've trained a skill for decades or maybe it's simply that I made it to my old age and got to experience all stages of life. Anyways, chess isn't going anywhere any time soon and also with the big spike in popularity over the past years likely attributed to The Queen's Gambit series on Netflix means there's more players than ever to [Fried Liver](https://www.chess.com/article/view/fried-liver-attack-chess-opening) online :devil:

Additionally, no technology is needed to play, it is accessible, competitive head-to-head game, high skill ceiling, ability to play with someone who doesn't speak your language, and worldwide prevelance are some other reasons I think chess is cool :nerd:

## 3D Printing Pieces

I found [this](https://www.thingiverse.com/thing:40605) full size traditional Staunton chess set and spent lots of time printing both sides pieces.
I had issues using the full bed of my printer since the wires and filament tube would get caught when reaching into the far corner.
To aleviate this I only printed a few pieces at a time near the centre. This was fine since I was home all day working and could start a
I also printed an extra queen for each colour.
The `Thing` also includes files to print the board, but I think it would be better to make one from wood. Stay tuned.

## Weighted Pieces

After playing a couple games with the set, I decided they would feel a lot better if they were heavier.
Luckily the design has a hollowed bottom, which makes sense to save printing material.
This will also make the pieces bottom heavy which will make them harder to knock over due to a low centre of mass.

## Comparing Weighting Methods

I cooked up two devious plans to fatten up my pieces.

1. Hide money in them - [The George Bluth Sr. Classic](https://youtu.be/04SLXwjJvqg)
2. [Smash, smash, smash](https://youtu.be/wDQTvuP1Dgs) some lead into them

I wanted to maximize the weight added, while still not blowing the bank, and also (as a massochist) learn new things!
Here are the results of some quick calculations provided my handy [TI-36X Pro](https://education.ti.com/en/products/calculators/scientific-calculators/ti-36x-pro).
For the coin strategy I simply tried to cram as many as I could into the bottom and maximize the mass. This would probably be a good candidate for some dynamic programming technique or calculus, but that's a tale for another day.

Either way I will be securing the weight with hot glue, which I already have, and putting a [felt bottom](https://www.amazon.com/gp/product/B096K5CFYK).

| Denomination | Value | Weight (g) | Diameter (mm) | Thickness (mm) | Composition        |
|--------------|-------|------------|---------------|----------------|--------------------|
| Penny        | $0.01 | 2.5        | 19.05         | 1.52           | Copper Plated Zinc |
| Nickel       | $0.05 | 5          | 21.21         | 1.95           | Cupro-Nickel       |
| Dime         | $0.10 | 2.268      | 17.91         | 1.35           | Cupro-Nickel       |
| Quarter      | $0.25 | 5.67       | 24.26         | 1.75           | Cupro-Nickel       |

Source: [US Coins - Mass and Dimensions](https://avocadoughtoast.com/weights-sizes-us-coins/)

### 1a) Maximize Mass Strategy

| Piece   | Dimes | Pennies | Nickels | Quarters | Cost ($) | Mass (g) |
|---------|-------|---------|---------|----------|----------|----------|
| King    | 1     | 2       | 2       | 2        | 0.72     | 28.67    |
| Q,B,N,R | 1     | 1       | 1       | 2        | 0.66     | 21.11    |
| Pawn    | 0     | 3       | 0       | 0        | 0.03     | 7.5      |

Coins Required: 66 pennies, 16 dimes, 18 nickels, 32 quarters
Total Value: $11.26
Total Mass: TODOg

### 1b) All Penny Strategy

| Piece   | Pennies | Cost ($) | Mass (g) |
|---------|---------|----------|----------|
| King    | 7       | 0.05     | 17.5     |
| Q,B,N,R | 5       | 0.05     | 12.5     |
| Pawn    | 3       | 0.03     | 7.5      |

Coins Required: 132 pennies
Total Value: $1.32
Total Mass: TODOg

### 2) Lead Strategy

First I needed to get the actual dimensions of the hollow rather than just jam coins in until I couldn't no more.
I'm a CAD beginner so I just used calipers even though using the STL file I could probably easily get the dimensions...
The hollow starts cylindrical and then becomes a cone. The depth is the total depth and the sill measurement is the depth which it goes from cylinder to cone.
Making the following kind of shape

```text
|    | Sill
\    / Cone
 \  /
  \/
```

Upon further inspection, the cylinder part actually slightly narrows from the base upwards. Since it is such a small I will just take the radius at the narrowest point.

Here's some formulas I used to measure the hollow's volume in a language I understand

```python
import math

def volume_cylinder(radius, height):
    return math.pi * math.pow(radius, 2) * height
    
def volume_cone(radius, height):
    return (1/3) * volume_cylinder(radius, height)
```

Hollow Dimensions:

k 24.8 25.18 23.3 24.84 25.18 24.8
3.56 3.81 3.51 3.44 3.7
27.01 26.7 26.9 27.44 26.9 26.5

lets use 12.3 mm radius
3.5 mm sill
23mm height

for q r b k since theyre all similar lets use the same mould
12 mm radius
3.5mm sill
11.5mm height

q 25.19 25.3 25.3
r 24.6 24.14 24.8 24.5 24.5
b 25.26 25.26 25.3
k 25.19 25.11 25.24

p 18.84 18.81 18.82
4.02

lets use 9.2mm radius
3.5mm sill
8.2 mm height

| Piece   | Radius (mm) | Depth (mm) | Sill (mm) | Area (cm^3) | Mass (g) | Cost ($) |
|---------|-------------|------------|-----------|-------------|----------|----------|
| King    | 12.675      | 27.6       | 3.93      | 5.965       | 67.65    | 0.66     |
| Q,B,N,R | 12.87       | 15.35      | 3.86      | 4.002       | 45.38    | 0.44     |
| Pawn    | 9.60        | 12.4       | 3.91      | 1.951       | 22.13    | 0.22     |

Lead Required: 1124.7 grams
Total Cost: $11?

There are also other ways to get lead. Wheel weights are used for balancing tires and usually made of lead. People post online about getting massive buckets from local mechanic shops at a great price.

## Making the Mould

I found and read this article titled [How to Weight Chess Pieces at Home](https://www.instructables.com/How-to-Weight-Chess-Pieces-at-Home/).

I had planned to make the mould out of wood, by drilling various depths and sized bits into a block of wood. This would be pretty hard
"No plan survives first contact with the enemy". my enemy was my own first bright idea. or planning itself. I also forgot that I could get access to a CNC mill.

Now my plan is to CNC mill a mould for the molten lead out of aluminum. It will be more precise, more reusable, and be easier to reproduce. All I need to do is get a chunk of aluminum, learn some basic CAD, and get access to the mill by doing some training.

The size of the aluminum block must be at the absolute minimum: 70.29mm x 25.74mm x 27.6mm. So would likely want to round this up to at least 1.5" x 1.5" x 4" so there can be at least some space between the different sized moulds in the same block.
Would I be able to use two smaller aluminum blocks welded together?

- need to make the mould slightly larger than the desired yeilded metal object?
  - "make sure you account for any anticipated [shrinkage](https://youtu.be/GG2dF5PS0bI) when the metal cools" <https://www.thecrucible.org/guides/metalworking/metal-casting/>

<https://www.grainger.com/product/GRAINGER-APPROVED-Aluminum-782RD3> 6 inch `$15.91` ($14.43 subtotal. Shipping takes almost 3 weeks. So does a local pickup!)
<https://www.amazon.com/Square-Aluminum-General-Purpose-Plate/dp/B09MH8Q6BT> 1 foot `$29.76`
<https://www.metalsdepot.com/aluminum-products/aluminum-square-bar> 1 foot, `$37.21` ($19.38 subtotal)

My new plan to expedite this project is to forego using the CNC mill at my work since I need to do a decent amount of training yet to access it and use a milling service.
Now I just need to send a model and some moneys to a company and wait for them to do the work.
I also don't have to source my own aluminum blocks and have the potential of screwing up several of them :laugh:

I just had the epiphany that I should first make a cylinder and then a cone, combine them, then do the subtraction on a rectangular prism.
Another edit! I can actually just use the extrude tool on the bottom face of the cone and it will works the same!
Prior to this revelation I was thinking of doing the subtractions individually.
Another thought that just popped in my head: maybe I could make a nesting type mould. Similar to Russian nesting dolls, I will make the largest mould, then have inserts that slide in an reduce the size. I assume this makes the milling and design process harder since I will have to make these conical shell shapes (kind of like a party hat) and if imperfect might not be good to pour liquid metal into if it gets lodged in a crack. It would save on space though. It would also likely cost more since each conical shell would presumably need to be made out of a solid block rather than being able to reuse the previously extracted cone, since it gets shredded my the mill at 17,000 RPM. Actually it would use less aluminum since each smaller shell can be made from a smaller piece of aluminum. Now my concern is having it work for smelting and secondly, if the added design complexity is still easy to produce from a CNC mill. For instance it might only be possible to mill on 5-axis mills, reducing the accessibility of the design, even though I will likely only ever make one of these it's an interesting perspective to keep in mind.

Maybe I will get a piece that goes in the top of the mould too so when I'm not using it it looks like a solid cube. I could also get the outer block engraved with something :thinking:

![Nesting Mould Concept](/assets/img/chess/nesting-mould.png)

## Smelting

The melting point of [lead (Pb)](https://en.wikipedia.org/wiki/Lead) is `328 °C` which is relatively low for a metal.

I bought a [Lee Production Pot IV Electric Melter](https://www.tacklewarehouse.com/Do-it_Lead_Melting_Lee_Production_Pot_IV_/descpage-DILMPPIV.html) for $88 after taxes (which I _do_ pay) and shipping.
The alternative would have been to use a cast iron pot, blowtorch, and carefully laddel the molten metal.

- dont get any water in molten lead - it will explode
- use a mask, dont breathe in lead fumes
- use protective glasses

<https://youtu.be/I7qhRWf2lfk>

## Aseenbly

gluing and felting

## Final Results

| Piece   | Count | Height (mm) | Mass (g) | Base Diameter (mm) |
|---------|-------|-------------|----------|--------------------|
| King    | 2     |
| Queen   | 4     |
| Bishop  | 4     |
| Knight  | 4     |
| Rook    | 4     |
| Pawn    | 16    |

Total Mass: TODOg
Equiptment Cost: smelter + mask + glasses + glue gun + mould
Material Cost: lead + PLA + felt + glue
Total Cost: $TODO

now i can play during a category 2 tornado without fear of my pieces knocking over.
cost and time needed to make another set, hmu if you want one at near BOM cost.

## Post Script

- Calculations for totals use two Queens per colour, TODO redo the math
