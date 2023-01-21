/*----- constants -----*/
const ORIGINAL_DECK = [
  "2s",
  "3s",
  "4s",
  "5s",
  "6s",
  "7s",
  "8s",
  "9s",
  "10s",
  "Js",
  "Qs",
  "Ks",
  "As",
  "2d",
  "3d",
  "4d",
  "5d",
  "6d",
  "7d",
  "8d",
  "9d",
  "10d",
  "Jd",
  "Qd",
  "Kd",
  "Ad",
  "2c",
  "3c",
  "4c",
  "5c",
  "6c",
  "7c",
  "8c",
  "9c",
  "10c",
  "Jc",
  "Qc",
  "Kc",
  "Ac",
  "2h",
  "3h",
  "4h",
  "5h",
  "6h",
  "7h",
  "8h",
  "9h",
  "10h",
  "Jh",
  "Qh",
  "Kh",
  "Ah",
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
  deckShuffle();
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

// SHUFFLING DECK

function deckShuffle() {
  let tempDeck = [...ORIGINAL_DECK];
  for (let x = 0; x < 1000; x++) {
    for (let i = tempDeck.length; i--; ) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = tempDeck[i];
      tempDeck[i] = tempDeck[j];
      tempDeck[j] = temp;
    }
  }
  console.log(tempDeck);
  return tempDeck;
}

// function randomInt(min, max) {
//   return Math.floor(Math.random)
// }
