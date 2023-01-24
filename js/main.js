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
    img: "css/card-library/images/spades/spades-r04.svg",
  },
  "5s": {
    img: "css/card-library/images/spades/spades-r05.svg",
  },
  "6s": {
    img: "css/card-library/images/spades/spades-r06.svg",
  },
  "7s": {
    img: "css/card-library/images/spades/spades-r07.svg",
  },
  "8s": {
    img: "css/card-library/images/spades/spades-r08.svg",
  },
  "9s": {
    img: "css/card-library/images/spades/spades-r09.svg",
  },
  "10s": {
    img: "css/card-library/images/spades/spades-r10.svg",
  },
  Js: {
    img: "css/card-library/images/spades/spades-J.svg",
  },
  Qs: {
    img: "css/card-library/images/spades/spades-Q.svg",
  },
  Ks: {
    img: "css/card-library/images/spades/spades-K.svg",
  },
  As: {
    img: "css/card-library/images/spades/spades-A.svg",
  },
  "2d": {
    img: "css/card-library/images/diamonds/diamonds-r02.svg",
  },
  "3d": {
    img: "css/card-library/images/diamonds/diamonds-r03.svg",
  },
  "4d": {
    img: "css/card-library/images/diamonds/diamonds-r04.svg",
  },
  "5d": {
    img: "css/card-library/images/diamonds/diamonds-r05.svg",
  },
  "6d": {
    img: "css/card-library/images/diamonds/diamonds-r06.svg",
  },
  "7d": {
    img: "css/card-library/images/diamonds/diamonds-r07.svg",
  },
  "8d": {
    img: "css/card-library/images/diamonds/diamonds-r08.svg",
  },
  "9d": {
    img: "css/card-library/images/diamonds/diamonds-r09.svg",
  },
  "10d": {
    img: "css/card-library/images/diamonds/diamonds-r10.svg",
  },
  Jd: {
    img: "css/card-library/images/diamonds/diamonds-J.svg",
  },
  Qd: {
    img: "css/card-library/images/diamonds/diamonds-Q.svg",
  },
  Kd: {
    img: "css/card-library/images/diamonds/diamonds-K.svg",
  },
  Ad: {
    img: "css/card-library/images/diamonds/diamonds-A.svg",
  },
  "2c": {
    img: "css/card-library/images/clubs/clubs-r02.svg",
  },
  "3c": {
    img: "css/card-library/images/clubs/clubs-r03.svg",
  },
  "4c": {
    img: "css/card-library/images/clubs/clubs-r04.svg",
  },
  "5c": {
    img: "css/card-library/images/clubs/clubs-r05.svg",
  },
  "6c": {
    img: "css/card-library/images/clubs/clubs-r06.svg",
  },
  "7c": {
    img: "css/card-library/images/clubs/clubs-r07.svg",
  },
  "8c": {
    img: "css/card-library/images/clubs/clubs-r08.svg",
  },
  "9c": {
    img: "css/card-library/images/clubs/clubs-r09.svg",
  },
  "10c": {
    img: "css/card-library/images/clubs/clubs-r10.svg",
  },
  Jc: {
    img: "css/card-library/images/clubs/clubs-J.svg",
  },
  Qc: {
    img: "css/card-library/images/clubs/clubs-Q.svg",
  },
  Kc: {
    img: "css/card-library/images/clubs/clubs-K.svg",
  },
  Ac: {
    img: "css/card-library/images/clubs/clubs-A.svg",
  },
  "2h": {
    img: "css/card-library/images/hearts/hearts-r02.svg",
  },
  "3h": {
    img: "css/card-library/images/hearts/hearts-r03.svg",
  },
  "4h": {
    img: "css/card-library/images/hearts/hearts-r04.svg",
  },
  "5h": {
    img: "css/card-library/images/hearts/hearts-r05.svg",
  },
  "6h": {
    img: "css/card-library/images/hearts/hearts-r06.svg",
  },
  "7h": {
    img: "css/card-library/images/hearts/hearts-r07.svg",
  },
  "8h": {
    img: "css/card-library/images/hearts/hearts-r08.svg",
  },
  "9h": {
    img: "css/card-library/images/hearts/hearts-r09.svg",
  },
  "10h": {
    img: "css/card-library/images/hearts/hearts-r10.svg",
  },
  Jh: {
    img: "css/card-library/images/hearts/hearts-J.svg",
  },
  Qh: {
    img: "css/card-library/images/hearts/hearts-Q.svg",
  },
  Kh: {
    img: "css/card-library/images/hearts/hearts-K.svg",
  },
  Ah: {
    img: "css/card-library/images/hearts/hearts-A.svg",
  },
};

/*----- state variables -----*/
let playerCredit;
let speed;
let betSize;
let playerHand;
let shuffle;
let deck;
let tempDeck;
let winEl;
let round;

/*----- cached elements  -----*/
dealBtnEl = document.getElementById("dealBtn");
maxBetEl = document.getElementById("betBtnMax");
oneBetEl = document.getElementById("betBtn");
betMessageEl = document.getElementById("betMessage");
playerCardEls = [...document.querySelectorAll(".cards-row > img")];
playerWinMessageEl = document.getElementById("payMessage");
holdEls = document.querySelectorAll("#hold-row > p");
creditMessageEl = document.getElementById("creditMessage");

/*----- event listeners -----*/
dealBtnEl.addEventListener("click", handleDeal);
maxBetEl.addEventListener("click", handleMaxBet);
oneBetEl.addEventListener("click", handleOneBet);

/*----- functions -----*/
init();

function init() {
  playerHand = [null, null, null, null, null];
  betSize = 0;
  playerCredit = 400;
  winEl = 0;
  dealBtnEl.setAttribute("disabled", "");
  renderCreditMessage();

  render();
}

function handleDeal(evt) {
  if (evt.target.tagName !== "BUTTON") return;
  deckShuffle();
  playerHand = [
    tempDeck[0],
    tempDeck[1],
    tempDeck[2],
    tempDeck[3],
    tempDeck[4],
  ];

  render();
}

function handleOneBet(evt) {
  if (evt.target.tagName !== "BUTTON") return;
  if (betSize < 5) {
    betSize++;
  } else return;
  if (betSize !== 0) {
    dealBtnEl.removeAttribute("disabled");
  }

  render();
}

function handleMaxBet(evt) {
  if (evt.target.tagName !== "BUTTON") return;
  if (betSize < 5) {
    betSize = 5;
    playerCredit = playerCredit - 5;
    dealBtnEl.removeAttribute("disabled", "");
    renderCreditMessage();
    handleDeal();
  }

  render();
}

function renderBetColumn() {}

function renderPlayerHand() {
  playerCardEls.forEach((card, idx) => {
    card.src = secondDeck[playerHand[idx]].img;
  });
}

function renderBetSize() {
  betMessageEl.innerText = `Bet ${betSize}`;
}

function render() {
  renderBetSize();
  renderPayMessage();
  renderPlayerHand();
  renderCreditMessage();
}

function renderPayMessage() {
  playerWinMessageEl.innerText = `Win ${winEl}`;
}

function renderCreditMessage() {
  creditMessageEl.innerText = `${playerCredit} CREDITS`;
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
