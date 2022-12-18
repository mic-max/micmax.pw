---
layout: post
title: Play nine Card Game AI
---

While on vacation at my sisters we played the Play Nine card game.
Maybe I'll try to play code golf while writing the software too.

## Recreate Game

First I needed to recreate the game's logic. It is a pretty simple game which is why I thought it would be a fine candidate for learning how about AI or machine learning (I don't really know the difference right now).

Essentially every player gets 4 pairs of cards and the goal is to get the lower score. There can be multiple rounds but the game logic doesn't change at all other than deciding who shuffles and who starts. So each round everyone starts off by flipping over any two of their own cards. Then the starting player has the choice to pick the face up card or draw from the deck. The deck consists of 8 cards ranging from 0 to 12 with a 4 hole in one cards that are worth -5 points. When scoring if you have a pair of 7's for example it will be worth 0 points. Otherwise each value on the card is added to the score. There are some additional rules for 2, 3, and 4 pairs of the same number giving -10, -15, and -20 point bonuses respectively. Getting all 2 pairs of hole in ones ends up being -30 points for the lot. So you either swap the shown card for any of your own or you can check the top card from the deck then decide if you want to swap with that. If you don't want to take that card either you can discard and flip any unflipped cards of yours and end your turn. There is an exception that allows you not to flip your last card if you choose not to. After the first player has flipped over all cards, each remaining player gets one more turn to play before the round ends and scores are tallied.

I was able to write fit the game into around 80 lines of code.

## Add ML or AI

Choices

You have a limited number of choices in this game. Each turn you can

- Swap shown card for any of your cards. 8 Choices.
- Look at deck card and swap for any of your cards. 8 Choices.
- Look at deck card and flip an unflipped card. 1-6 Choices depending on how many cards you've already flipped.
- Look at deck card and not flip if already have 7 flipped. 1 Choice.


ML inputs

- player x2-6
  - points
  - cards x8 (might not be flipped)
- player turn order (useful since you don't want to discard a card that will help the next player)
- discard pile (seen cards not belonging to players)
- deck 
