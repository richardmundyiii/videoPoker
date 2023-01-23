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
let tempDeck;

/*----- cached elements  -----*/
dealBtnEl = document.getElementById("dealBtn");
maxBetEl = document.getElementById("betBtnMax");
oneBetEl = document.getElementById("betBtn");
betMessageEl = document.getElementById("betMessage");
playerCardEls = document.getElementsByClassName("card-container > img");
console.log(Array.isArray(playerCardEls));
console.log(playerCardEls);
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
  console.log(tempDeck);
  board = [tempDeck[0], tempDeck[1], tempDeck[2], tempDeck[3], tempDeck[4]];
  console.log(board);
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

function renderPlayerHand() {
  playerCardEls.map((el) => {
    console.log(el);
  });
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
  tempDeck = [...ORIGINAL_DECK];
  for (let k = 0; k < 1000; k++) {
    for (let i = tempDeck.length; i--; ) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = tempDeck[i];
      tempDeck[i] = tempDeck[j];
      tempDeck[j] = temp;
    }
  }
  return tempDeck;
}

// function randomInt(min, max) {
//   return Math.floor(Math.random)
// }
