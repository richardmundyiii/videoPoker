//Constants
//winnings hands

//cards
let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//State Variables
//winner
//turn (preflop w/ holds vs redeal no hold cards)
// "board" the back of 5 cards
let deck;

// Cahced Elements
//each card needs to be accesable
//hand win amount
//total balance
//bet size

//Event Listeners
// AEL for deal button pressed
//AEL for hold cards
//AEL bet size: 1 - 5 credits
//AEL "Max Bet"

//Functions
function init() {
  board = [null, null, null, null, null];
  winner = null;
  betSize();
}

function newDeal() {}
function shuffleDeck() {}
function betSize() {}

function getDeck() {
  let deck = new Array();
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      let card = { Value: values[j], Suit: suits[i] };
      deck.push(card);
      console.log(card);
    }
  }
  return deck;
}

function shuffle(deck) {
  for (let i = 0; i < 1000; i++) {
    let shuffle = Math.floor(Math.random() * deck.length);
    console.log(shuffle);
  }
}

init();
