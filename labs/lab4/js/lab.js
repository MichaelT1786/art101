// Blackjack
// Pseudocode outline for blackjack
// Author: Michael Thomas
// Date: 10/17/2024

/*
Game State variable
  0: player count
  1: betting
  2: starting hands
  3: player turns
  4: Resolve Dealer
Take player count
  1-5, max usually 7
  Let player set how much they’re betting
    Array for player banks
      W3 Array: https://www.w3schools.com/js/js_arrays.asp
  Can use “text” to make life a lot easier
Draw 2 cards from a virtual deck for players and dealer
  Array for player hands
    Can condense into 1 array if you have a designated “break” value to separate hands in array
  Array tracking which cards have been drawn
    Generate number 0-52
  Check if corresponding spot on deck array is available
    If false, roll new number
  When true, add number to player hand array and update deck array
Assign point values to cards
  Modulo operator my beloved (x % y in js)
  (0 through 51) % 13 returns 0 thru 12, assign values to 0 thru 12
  Aces
  If hand without ace is <= 10, ace is 11, else 1
    Any duplicate aces 1
Print cards in current player’s hand
  Reveal dealer’s first card
  1-10, JQK, ♥♦♣♠
Have players inputs for 
  First turn
    Split
      check if player got 2 cards of the same value
      If true, give them choice to split
      If choose, player has 2nd hands made of their starters and draws 1 more card into each
      Re-split is optional rule, so not gonna do that so I don’t go insane
      Hand acts like extra player
    Surrender
      Remove from the turn order
      Forfeit half of bet
  Stand
    Remove from the turn order
  Hit
    Run draw
    If new hand value > 21, bust
  Double down
    Draw & double bet
    If new hand value > 21, bust
Check if the round is over
  If not, Wait for confirmation the game has been handed off to the next player
    Player input
    Move to next player’s turn
  Players all either bust, surrender or stand
    Resolve dealer’s hand (dealer continues drawing until 17+ hand value)
    If dealer highest value, all players lose
    If dealer busts, all players win
  Player has blackjack
    They win, other players lose
  Dealer has blackjack
    All players lose
  End game
    Reset deck tracker
    Clear hands
    Update banks
    Loop back to betting
*/


// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
