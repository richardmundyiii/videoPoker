/*----- constants -----*/
const SUITS = ["s", "c", "d", "h"];
const RANKS = [
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

/*----- state variables -----*/
let board;
let playerCredit;
let speed;
let betSize;
let playerHand;
let shuffle;
let deck;

/*----- cached elements  -----*/
dealBtnEl = document.getElementById("dealBtn");
maxBetEl = document.getElementById("betBtnMax");
oneBetEl = document.getElementById("betBtn");
betMessageEl = document.getElementById("betMessage");
// holdEls = document.getElementsByClassName("hold-row");
// Array.from(holdEls).forEach((el) => {
//   console.log(el);
// });
/*----- event listeners -----*/
dealBtnEl.addEventListener("click", handleDeal);
maxBetEl.addEventListener("click", handleMaxBet);
oneBetEl.addEventListener("click", handleOneBet);

/*----- functions -----*/
init();

function init() {
  board = [null, null, null, null, null];
  betSize = 0;
  render();
}

function handleDeal(evt) {
  if (evt.target.tagName !== "BUTTON") return;
  console.log("Clicked Deal");
}

function handleOneBet(evt) {
  if (evt.target.tagName !== "BUTTON") return;
  if (betSize < 5) {
    betSize++;
  } else return;
  render();
  console.log(betSize);
}

function handleMaxBet(evt) {
  if (evt.target.tagName !== "BUTTON") return;
  betSize = 5;
  console.log("Clicked Max Bet");

  render();
}

function renderBetSize() {
  betMessageEl.innerText = `Bet ${betSize}`;
}

function renderBoard() {}

function render() {
  renderBetSize();
}

// Building Poker Deck
const originalDeck = buildOriginalDeck();

function buildOriginalDeck() {
  const deck = [];
  SUITS.forEach(function (SUIT) {
    RANKS.forEach(function (RANK) {
      deck.push({
        face: `${SUIT}${RANK}`,
      });
    });
  });
  return deck;
}

function shuffleDeck() {
  let tempDeck = [...originalDeck];
}
