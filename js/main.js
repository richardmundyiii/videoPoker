// /*----- constants -----*/
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
  "null",
];

const secondDeck = {
  "2s": {
    img: "../css/card-library/images/spades/spades-r02.svg",
  },
  "3s": {
    img: "../css/card-library/images/spades/spades-r03.svg",
  },
  "4s": {
    img: "../css/card-library/images/spades/spades-r04.svg",
  },
  "5s": {
    img: "../css/card-library/images/spades/spades-r05.svg",
  },
  "6s": {
    img: "../css/card-library/images/spades/spades-r06.svg",
  },
  "7s": {
    img: "../css/card-library/images/spades/spades-r07.svg",
  },
  "8s": {
    img: "../css/card-library/images/spades/spades-r08.svg",
  },
  "9s": {
    img: "../css/card-library/images/spades/spades-r09.svg",
  },
  "10s": {
    img: "../css/card-library/images/spades/spades-r10.svg",
  },
  Js: {
    img: "../css/card-library/images/spades/spades-J.svg",
  },
  Qs: {
    img: "../css/card-library/images/spades/spades-Q.svg",
  },
  Ks: {
    img: "../css/card-library/images/spades/spades-K.svg",
  },
  As: {
    img: "../css/card-library/images/spades/spades-A.svg",
  },
  "2d": {
    img: "../css/card-library/images/diamonds/diamonds-r02.svg",
  },
  "3d": {
    img: "../css/card-library/images/diamonds/diamonds-r03.svg",
  },
  "4d": {
    img: "../css/card-library/images/diamonds/diamonds-r04.svg",
  },
  "5d": {
    img: "../css/card-library/images/diamonds/diamonds-r05.svg",
  },
  "6d": {
    img: "../css/card-library/images/diamonds/diamonds-r06.svg",
  },
  "7d": {
    img: "../css/card-library/images/diamonds/diamonds-r07.svg",
  },
  "8d": {
    img: "../css/card-library/images/diamonds/diamonds-r08.svg",
  },
  "9d": {
    img: "../css/card-library/images/diamonds/diamonds-r09.svg",
  },
  "10d": {
    img: "../css/card-library/images/diamonds/diamonds-r10.svg",
  },
  Jd: {
    img: "../css/card-library/images/diamonds/diamonds-J.svg",
  },
  Qd: {
    img: "../css/card-library/images/diamonds/diamonds-Q.svg",
  },
  Kd: {
    img: "../css/card-library/images/diamonds/diamonds-K.svg",
  },
  Ad: {
    img: "../css/card-library/images/diamonds/diamonds-A.svg",
  },
  "2c": {
    img: "../css/card-library/images/clubs/clubs-r02.svg",
  },
  "3c": {
    img: "../css/card-library/images/clubs/clubs-r03.svg",
  },
  "4c": {
    img: "../css/card-library/images/clubs/clubs-r04.svg",
  },
  "5c": {
    img: "../css/card-library/images/clubs/clubs-r05.svg",
  },
  "6c": {
    img: "../css/card-library/images/clubs/clubs-r06.svg",
  },
  "7c": {
    img: "../css/card-library/images/clubs/clubs-r07.svg",
  },
  "8c": {
    img: "../css/card-library/images/clubs/clubs-r08.svg",
  },
  "9c": {
    img: "../css/card-library/images/clubs/clubs-r09.svg",
  },
  "10c": {
    img: "../css/card-library/images/clubs/clubs-r10.svg",
  },
  Jc: {
    img: "../css/card-library/images/clubs/clubs-J.svg",
  },
  Qc: {
    img: "../css/card-library/images/clubs/clubs-Q.svg",
  },
  Kc: {
    img: "../css/card-library/images/clubs/clubs-K.svg",
  },
  Ac: {
    img: "../css/card-library/images/clubs/clubs-A.svg",
  },
  "2h": {
    img: "../css/card-library/images/hearts/hearts-r02.svg",
  },
  "3h": {
    img: "../css/card-library/images/hearts/hearts-r03.svg",
  },
  "4h": {
    img: "../css/card-library/images/hearts/hearts-r04.svg",
  },
  "5h": {
    img: "../css/card-library/images/hearts/hearts-r05.svg",
  },
  "6h": {
    img: "../css/card-library/images/hearts/hearts-r06.svg",
  },
  "7h": {
    img: "../css/card-library/images/hearts/hearts-r07.svg",
  },
  "8h": {
    img: "../css/card-library/images/hearts/hearts-r08.svg",
  },
  "9h": {
    img: "../css/card-library/images/hearts/hearts-r09.svg",
  },
  "10h": {
    img: "../css/card-library/images/hearts/hearts-r10.svg",
  },
  Jh: {
    img: "../css/card-library/images/hearts/hearts-J.svg",
  },
  Qh: {
    img: "../css/card-library/images/hearts/hearts-Q.svg",
  },
  Kh: {
    img: "../css/card-library/images/hearts/hearts-K.svg",
  },
  Ah: {
    img: "../css/card-library/images/hearts/hearts-A.svg",
  },
  null: {
    img: "../css/card-library/images/backs/red.svg",
  },
};

/*----- state variables -----*/
let betSize;
let playerCredits;
let handOver;
let gameOver;
let deck;
let gameStage;
let playerHand;
let playerWin;

/*----- cached elements  -----*/
payoutEl = document.getElementById("pay-message");
betMessageEl = document.getElementById("bet-message");
playerCreditEl = document.getElementById("credit-message");
dealBtnEl = document.getElementById("dealBtn");
betOneBtnEl = document.getElementById("betBtn");
betMaxBtnEl = document.getElementById("betBtnMax");
playerCardEls = document.querySelectorAll(".cards-row > img");
holdEls = document.querySelector(".hold-row");

/*----- event listeners -----*/
betOneBtnEl.addEventListener("click", handleBetOneClick);
betMaxBtnEl.addEventListener("click", handleBetMaxClick);
dealBtnEl.addEventListener("click", handleDealClick);
dealBtnEl.addEventListener("click", handleReDeal);

/*----- functions -----*/

//GAME OPERATIONS FUNCTIONS
init();

function init() {
  hand = [null, null, null, null, null];
  betSize = 0;
  playerCredits = 400;
  handOver = true;
  gameOver = false;
  gameStage = "preFlop";
  playerWin = 0;

  render();
}

function newHand() {
  hand = [null, null, null, null, null];
  playerCredits;
  playerWin;
  betSize;
  handOver = true;
  gameOver = false;
  gameStage = "preFlop";

  render();
}

function postFlop() {
  gameStage = "postFlop";
  // player cards clickable => hold don't hold
  deckCardEls.addEventListener("click", handleCardClick);
  // Deal button now removes non-hold cards from array and replaces them
  //with the next 1 through 5 cards in the array without shuffloing the deck.
  renderPlayerHand();
  console.log(gameStage);
}

function finalStage() {
  gameStage = "finish";
  if (playerCredits === 0) return;
  //determine if hand wins
  //if winner, display amount won and increase player credit
  playerWin = 0;
  //deal button disabled
  //if bet button pressed, switch to new hand function
  console.log(gameStage);
}

//DECK SHUFFLE

function deckShuffle() {
  deck = [...ORIGINAL_DECK];
  for (let k = 0; k < 1000; k++) {
    for (let i = deck.length - 1; i--; ) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
  }
  return deck;
}

//HANDLE FUNCTIONS
function handleDealClick(evt) {
  // GUARD
  if (evt.target.tagName !== "BUTTON") return;
  //PREFLOP CLICK
  if (betSize >= 1 && betSize <= 5 && gameStage === "preFlop") {
    deckShuffle();

    playerHand = [deck[0], deck[1], deck[2], deck[3], deck[4]];
    renderPlayerHand();

    render();
  }
}

function handleReDeal() {}

function handleBetOneClick() {
  if (betSize < 5 && (gameStage === "preFlop" || gameStage === "finish")) {
    betSize++;
    playerCredits--;
    console.log(betSize);
    newHand();
  } else return;

  render();
}

function handleBetMaxClick() {
  if (betSize < 5 && handOver === true) {
    betSize = 5;
    playerCredits = playerCredits - 5;
    console.log(betSize);
    newHand();
    //increase bet size to 5
  } else return;
}

function handleCardClick() {
  console.log("clicked");
}

// RENDERR FUNCTIONS

function renderWinCredit() {
  payoutEl.innerText = `WIN ${playerWin}`;
}

function renderBetMessage() {
  betMessageEl.innerText = `Bet ${betSize}`;
}

function renderPlayerCredit() {
  playerCreditEl.innerText = `${playerCredits} CREDITS`;
}

function renderPreFlop() {}

function renderPostFlop() {
  //bet buttons disabled
  betOneBtnEl.setAttribute("disabled", "");
  betMaxBtnEl.setAttribute("disabled", "");
}

function renderPlayerHand() {
  playerCardEls.forEach((card, idx) => {
    card.src = secondDeck[playerHand[idx]].img;
  });
}

function renderFinalStage() {}

// function renderHoldSign() {
//   holdEls.forEach((el) => {
//     el.classList.contains("hold");
//   });
// }

function render() {
  renderPlayerCredit();
  renderWinCredit();
  renderBetMessage();
  // renderHoldSign();
}

render();

//  <! ------------------------------------------------------- !>

// /*----- cached elements  -----*/
// playerWinMessageEl = document.getElementById("payMessage");
// deckCardEls = document.querySelector(".cards-row");
