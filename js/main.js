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

const secondDeck = {
  "2s": {
    img: "css/card-library/images/spades/spades-r02.svg",
  },
  "3s": {
    img: "css/card-library/images/spades/spades-r03.svg",
  },
  "4s": {
    img: "css/card-library/images/spades/spades-r04",
  },
  "5s": {
    img: "css/card-library/images/spades/spades-r05",
  },
  "6s": {
    img: "css/card-library/images/spades/spades-r06",
  },
  "7s": {
    img: "css/card-library/images/spades/spades-r07",
  },
  "8s": {
    img: "css/card-library/images/spades/spades-r08",
  },
  "9s": {
    img: "css/card-library/images/spades/spades-r09",
  },
  "10s": {
    img: "css/card-library/images/spades/spades-r10",
  },
  Js: {
    img: "css/card-library/images/spades/spades-J",
  },
  Qs: {
    img: "css/card-library/images/spades/spades-Q",
  },
  Ks: {
    img: "css/card-library/images/spades/spades-K",
  },
  As: {
    img: "css/card-library/images/spades/spades-A",
  },
  "2d": {
    img: "css/card-library/images/diamonds/diamonds-r02",
  },
  "3d": {
    img: "css/card-library/images/diamonds/diamonds-r03",
  },
  "4d": {
    img: "css/card-library/images/diamonds/diamonds-r04",
  },
  "5d": {
    img: "css/card-library/images/diamonds/diamonds-r05",
  },
  "6d": {
    img: "css/card-library/images/diamonds/diamonds-r06",
  },
  "7d": {
    img: "css/card-library/images/diamonds/diamonds-r07",
  },
  "8d": {
    img: "css/card-library/images/diamonds/diamonds-r08",
  },
  "9d": {
    img: "css/card-library/images/diamonds/diamonds-r09",
  },
  "10d": {
    img: "css/card-library/images/diamonds/diamonds-r10",
  },
  Jd: {
    img: "css/card-library/images/diamonds/diamonds-J",
  },
  Qd: {
    img: "css/card-library/images/diamonds/diamonds-Q",
  },
  Kd: {
    img: "css/card-library/images/diamonds/diamonds-K",
  },
  Ad: {
    img: "css/card-library/images/diamonds/diamonds-A",
  },
  "2c": {
    img: "css/card-library/images/clubs/clubs-r02",
  },
  "3c": {
    img: "css/card-library/images/clubs/clubs-r03",
  },
  "4c": {
    img: "css/card-library/images/clubs/clubs-r04",
  },
  "5c": {
    img: "css/card-library/images/clubs/clubs-r05",
  },
  "6c": {
    img: "css/card-library/images/clubs/clubs-r06",
  },
  "7c": {
    img: "css/card-library/images/clubs/clubs-r07",
  },
  "8c": {
    img: "css/card-library/images/clubs/clubs-r08",
  },
  "9c": {
    img: "css/card-library/images/clubs/clubs-r09",
  },
  "10c": {
    img: "css/card-library/images/clubs/clubs-r10",
  },
  Jc: {
    img: "css/card-library/images/clubs/clubs-J",
  },
  Qc: {
    img: "css/card-library/images/clubs/clubs-Q",
  },
  Kc: {
    img: "css/card-library/images/clubs/clubs-K",
  },
  Ac: {
    img: "css/card-library/images/clubs/clubs-A",
  },
  "2h": {
    img: "css/card-library/images/hearts/hearts-",
  },
  "3h": {
    img: "css/card-library/images/hearts/hearts-",
  },
  "4h": {
    img: "css/card-library/images/hearts/hearts-",
  },
  "5h": {
    img: "css/card-library/images/hearts/hearts-",
  },
  "6h": {
    img: "css/card-library/images/hearts/hearts-",
  },
  "7h": {
    img: "css/card-library/images/hearts/hearts-",
  },
  "8h": {
    img: "css/card-library/images/hearts/hearts-",
  },
  "9h": {
    img: "css/card-library/images/hearts/hearts-",
  },
  "10h": {
    img: "css/card-library/images/hearts/hearts-",
  },
  Jh: {
    img: "css/card-library/images/hearts/hearts-",
  },
  Qh: {
    img: "css/card-library/images/hearts/hearts-",
  },
  Kh: {
    img: "css/card-library/images/hearts/hearts-",
  },
  Ah: {
    img: "css/card-library/images/hearts/hearts-A.svg",
  },
};

console.log(secondDeck.ah);
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
playerCardEls = document.querySelectorAll(".card-container > img");
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
  tempDeck;
  playerCardEls.forEach((el) => {
    el.src = secondDeck[tempDeck[el]];
    console.log(el);
  });
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
