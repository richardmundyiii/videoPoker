// /*----- constants -----*/

const secondDeck = [
  {
    card: "2s",
    rank: 2,
    suit: "spades",
    img: "./css/card-library/images/spades/spades-r02.svg",
    isHold: false,
  },
  {
    card: "3s",
    rank: 3,
    suit: "spades",
    img: "./css/card-library/images/spades/spades-r03.svg",
    isHold: false,
  },
  {
    card: "4s",
    rank: 4,
    suit: "spades",
    img: "./css/card-library/images/spades/spades-r04.svg",
    isHold: false,
  },
  {
    card: "5s",
    rank: 5,
    suit: "spades",
    img: "./css/card-library/images/spades/spades-r05.svg",
    isHold: false,
  },
  {
    card: "6s",
    rank: 6,
    suit: "spades",
    img: "./css/card-library/images/spades/spades-r06.svg",
    isHold: false,
  },
  {
    card: "7s",
    rank: 7,
    suit: "spades",
    img: "./css/card-library/images/spades/spades-r07.svg",
    isHold: false,
  },
  {
    card: "8s",
    rank: 8,
    suit: "spades",
    img: "./css/card-library/images/spades/spades-r08.svg",
    isHold: false,
  },
  {
    card: "9s",
    rank: 9,
    suit: "spades",
    img: "./css/card-library/images/spades/spades-r09.svg",
    isHold: false,
  },
  {
    card: "10s",
    rank: 10,
    suit: "spades",
    img: "./css/card-library/images/spades/spades-r10.svg",
    isHold: false,
  },
  {
    card: "Js",
    rank: 11,
    suit: "spades",
    img: "./css/card-library/images/spades/spades-J.svg",
    isHold: false,
  },
  {
    card: "Qs",
    rank: 12,
    suit: "spades",
    img: "./css/card-library/images/spades/spades-Q.svg",
    isHold: false,
  },
  {
    card: "Ks",
    rank: 13,
    suit: "spades",
    img: "./css/card-library/images/spades/spades-K.svg",
    isHold: false,
  },
  {
    card: "As",
    rank: 14,
    suit: "spades",
    img: "./css/card-library/images/spades/spades-A.svg",
    isHold: false,
  },
  {
    card: "2d",
    rank: 2,
    suit: "diamonds",
    img: "./css/card-library/images/diamonds/diamonds-r02.svg",
    isHold: false,
  },
  {
    card: "3d",
    rank: 3,
    suit: "diamonds",
    img: "./css/card-library/images/diamonds/diamonds-r03.svg",
    isHold: false,
  },
  {
    card: "4d",
    rank: 4,
    suit: "diamonds",
    img: "./css/card-library/images/diamonds/diamonds-r04.svg",
    isHold: false,
  },
  {
    card: "5d",
    rank: 5,
    suit: "diamonds",
    img: "./css/card-library/images/diamonds/diamonds-r05.svg",
    isHold: false,
  },
  {
    card: "6d",
    rank: 6,
    suit: "diamonds",
    img: "./css/card-library/images/diamonds/diamonds-r06.svg",
    isHold: false,
  },
  {
    card: "7d",
    rank: 7,
    suit: "diamonds",
    img: "./css/card-library/images/diamonds/diamonds-r07.svg",
    isHold: false,
  },
  {
    card: "8d",
    rank: 8,
    suit: "diamonds",
    img: "./css/card-library/images/diamonds/diamonds-r08.svg",
    isHold: false,
  },
  {
    card: "9d",
    rank: 9,
    suit: "diamonds",
    img: "./css/card-library/images/diamonds/diamonds-r09.svg",
    isHold: false,
  },
  {
    card: "10d",
    rank: 10,
    suit: "diamonds",
    img: "./css/card-library/images/diamonds/diamonds-r10.svg",
    isHold: false,
  },
  {
    card: "Jd",
    rank: 11,
    suit: "diamonds",
    img: "./css/card-library/images/diamonds/diamonds-J.svg",
    isHold: false,
  },
  {
    card: "Qd",
    rank: 12,
    suit: "diamonds",
    img: "./css/card-library/images/diamonds/diamonds-Q.svg",
    isHold: false,
  },
  {
    card: "Kd",
    rank: 13,
    suit: "diamonds",
    img: "./css/card-library/images/diamonds/diamonds-K.svg",
    isHold: false,
  },
  {
    card: "Ad",
    rank: 14,
    suit: "diamonds",
    img: "./css/card-library/images/diamonds/diamonds-A.svg",
    isHold: false,
  },
  {
    card: "2c",
    rank: 2,
    suit: "clubs",
    img: "./css/card-library/images/clubs/clubs-r02.svg",
    isHold: false,
  },
  {
    card: "3c",
    rank: 3,
    suit: "clubs",
    img: "./css/card-library/images/clubs/clubs-r03.svg",
    isHold: false,
  },
  {
    card: "4c",
    rank: 4,
    suit: "clubs",
    img: "./css/card-library/images/clubs/clubs-r04.svg",
    isHold: false,
  },
  {
    card: "5c",
    rank: 5,
    suit: "clubs",
    img: "./css/card-library/images/clubs/clubs-r05.svg",
    isHold: false,
  },
  {
    card: "6c",
    rank: 6,
    suit: "clubs",
    img: "./css/card-library/images/clubs/clubs-r06.svg",
    isHold: false,
  },
  {
    card: "7c",
    rank: 7,
    suit: "clubs",
    img: "./css/card-library/images/clubs/clubs-r07.svg",
    isHold: false,
  },
  {
    card: "8c",
    rank: 8,
    suit: "clubs",
    img: "./css/card-library/images/clubs/clubs-r08.svg",
    isHold: false,
  },
  {
    card: "9c",
    rank: 9,
    suit: "clubs",
    img: "./css/card-library/images/clubs/clubs-r09.svg",
    isHold: false,
  },
  {
    card: "10c",
    rank: 10,
    suit: "clubs",
    img: "./css/card-library/images/clubs/clubs-r10.svg",
    isHold: false,
  },
  {
    card: "Jc",
    rank: 11,
    suit: "clubs",
    img: "./css/card-library/images/clubs/clubs-J.svg",
    isHold: false,
  },
  {
    card: "Qc",
    rank: 12,
    suit: "clubs",
    img: "./css/card-library/images/clubs/clubs-Q.svg",
    isHold: false,
  },
  {
    card: "Kc",
    rank: 13,
    suit: "clubs",
    img: "./css/card-library/images/clubs/clubs-K.svg",
    isHold: false,
  },
  {
    card: "Ac",
    rank: 14,
    suit: "clubs",
    img: "./css/card-library/images/clubs/clubs-A.svg",
    isHold: false,
  },
  {
    card: "2h",
    rank: 2,
    suit: "hearts",
    img: "./css/card-library/images/hearts/hearts-r02.svg",
    isHold: false,
  },
  {
    card: "3h",
    rank: 3,
    suit: "hearts",
    img: "./css/card-library/images/hearts/hearts-r03.svg",
    isHold: false,
  },
  {
    card: "4h",
    rank: 4,
    suit: "hearts",
    img: "./css/card-library/images/hearts/hearts-r04.svg",
    isHold: false,
  },
  {
    card: "5h",
    rank: 5,
    suit: "hearts",
    img: "./css/card-library/images/hearts/hearts-r05.svg",
    isHold: false,
  },
  {
    card: "6h",
    rank: 6,
    suit: "hearts",
    img: "./css/card-library/images/hearts/hearts-r06.svg",
    isHold: false,
  },
  {
    card: "7h",
    rank: 7,
    suit: "hearts",
    img: "./css/card-library/images/hearts/hearts-r07.svg",
    isHold: false,
  },
  {
    card: "8h",
    rank: 8,
    suit: "hearts",
    img: "./css/card-library/images/hearts/hearts-r08.svg",
    isHold: false,
  },
  {
    card: "9h",
    rank: 9,
    suit: "hearts",
    img: "./css/card-library/images/hearts/hearts-r09.svg",
    isHold: false,
  },
  {
    card: "10h",
    rank: 10,
    suit: "hearts",
    img: "./css/card-library/images/hearts/hearts-r10.svg",
    isHold: false,
  },
  {
    card: "Jh",
    rank: 11,
    suit: "hearts",
    img: "./css/card-library/images/hearts/hearts-J.svg",
    isHold: false,
  },
  {
    card: "Qh",
    rank: 12,
    suit: "hearts",
    img: "./css/card-library/images/hearts/hearts-Q.svg",
    isHold: false,
  },
  {
    card: "Kh",
    rank: 13,
    suit: "hearts",
    img: "./css/card-library/images/hearts/hearts-K.svg",
    isHold: false,
  },
  {
    card: "Ah",
    rank: 14,
    suit: "hearts",
    img: "./css/card-library/images/hearts/hearts-A.svg",
    isHold: false,
  },
];

const PAYOUT = {
  royalFlush: {
    1: 250,
    2: 500,
    3: 750,
    4: 1000,
    5: 4000,
    name: "ROYAL FLUSH",
  },
  straightFlush: {
    1: 50,
    2: 100,
    3: 150,
    4: 200,
    5: 250,
    name: "STRAIGHT FLUSH",
  },
  fourAces: {
    1: 400,
    2: 00,
    3: 1200,
    4: 1600,
    5: 2000,
    name: "FOUR OF A KIND - ACES",
  },
  fourLow: {
    1: 160,
    2: 320,
    3: 480,
    4: 640,
    5: 800,
    name: "FOUR OF A KIND - 2s, 3, 4s",
  },
  fourOthers: {
    1: 50,
    2: 100,
    3: 150,
    4: 200,
    5: 250,
    name: "FOUR OF A KIND - 5 THRU KINGS",
  },
  fullHouse: {
    1: 9,
    2: 18,
    3: 27,
    4: 36,
    5: 45,
    name: "FULL HOUSE",
  },
  flush: {
    1: 6,
    2: 12,
    3: 18,
    4: 24,
    5: 30,
    name: "FLUSH",
  },
  straight: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    name: "STRAIGHT",
  },
  threeOfAKind: {
    1: 3,
    2: 6,
    3: 9,
    4: 12,
    5: 15,
    name: "THREE OF A KIND",
  },
  twoPair: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    name: "TWO PAIR",
  },
  jacks: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    name: "JACKS OR BETTER",
  },
  zero: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    name: "none",
  },
};

const SOUNDS = {
  betOne: "./sfx/betOne.wav",
  dealFx: "./sfx/dealFx.wav",
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
let lastHand;

/*----- cached elements  -----*/

const player = new Audio();
payoutEl = document.getElementById("pay-message");
betMessageEl = document.getElementById("bet-message");
playerCreditEl = document.getElementById("credit-message");
dealBtnEl = document.getElementById("dealBtn");
betOneBtnEl = document.getElementById("betBtn");
betMaxBtnEl = document.getElementById("betBtnMax");
playerCardEls = document.querySelectorAll(".cards-row > img");
holdCardEls = document.querySelector(".cards-row");
holdEls = document.querySelector(".hold-row");
helpElBtn = document.getElementById("helpBtn");
helpModalEl = document.getElementById("help-modal");
closeBtnEl = document.getElementById("close");
winningHandEl = document.getElementById("winning-hand-message");

/*----- event listeners -----*/

betOneBtnEl.addEventListener("click", handleBetOneClick);
betMaxBtnEl.addEventListener("click", handleBetMaxClick);
dealBtnEl.addEventListener("click", function () {
  if (gameStage === "preFlop") {
    handleDealClick();
  } else if (gameStage === "postFlop") {
    handleReDeal();
  }
});
holdCardEls.addEventListener("click", handleCardClick);
helpElBtn.addEventListener("click", handleHelpModal);
closeBtnEl.addEventListener("click", handleCloseModal);

/*----- functions -----*/

//GAME OPERATIONAL FUNCTIONS

init();

function init() {
  playerHand = [];
  betSize = 0;
  playerCredits = 400;
  gameStage = "preFlop";
  playerWin = "zero";
  render();
}

function newHand() {
  hand = [null, null, null, null, null];
  playerCredits;
  playerWin = "zero";
  betSize = 0;
  gameStage = "preFlop";
  render();
}

function finalStage() {
  gameStage = "finish";
  if (playerCredits === 0) return;
  playerWin = getWinner();
  playerCredits += PAYOUT[playerWin][betSize];
  lastHand = PAYOUT[playerWin][betSize];
  if (getWinner) {
    renderWinningHandMessage();
  }
  renderReset();
  newHand();
  render();
}

//DECK SHUFFLE

function deckShuffle() {
  deck = [...secondDeck];
  for (let k = 0; k < 1000; k++) {
    for (let i = deck.length; i--; ) {
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
  if (betSize >= 1 && betSize <= 5 && gameStage === "preFlop") {
    playerCredits = playerCredits - betSize;
    playSound(SOUNDS.dealFx);
    deckShuffle();

    playerHand = deck.splice(0, 5);
    gameStage = "postFlop";

    render();
  }
}

// HANDLE BET SIZE CLICKS

function handleBetOneClick() {
  if (betSize < 5 && gameStage === "preFlop") {
    betSize++;
    playSound(SOUNDS.betOne);
  }
  render();
}

function handleBetMaxClick() {
  if (gameStage === "preFlop" && betSize < 5) betSize = 5;
  render();
}

// HANDLE CARD CLICKS FOR HOLD

function handleCardClick(evt) {
  let cardIdx = evt.target.alt - 1;
  if (evt.target.tagName !== "IMG");
  if (gameStage === "postFlop") {
    playerHand[cardIdx].isHold = true;
  } else return;

  holdCards();
  render();
}

function holdCards() {
  playerHand.forEach((element, idx) => {
    let holdElement = document.getElementById(`card-${idx + 1}`);
    if (element.isHold === true) {
      holdElement.style.visibility = "visible";
    } else if (element.isHold === false) {
      holdElement.style.visibility = "hidden";
    }

    render();
  });
}

//HANDLE RE-DEAL

function handleReDeal() {
  if (gameStage === "postFlop") {
    for (let i = 0; i < playerHand.length; i++) {
      if (!playerHand[i].isHold) {
        playerHand.splice(i, 1, deck.pop());
      }
    }
  }
  gameStage = "finish";
  finalStage();
  render();
}

// HANDLE HELP MODAL

function handleHelpModal(evt) {
  helpModalEl.style.display = "block";
}

function handleCloseModal(evt) {
  helpModalEl.style.display = "none";
}

// RENDER FUNCTIONS

function renderMessages() {
  if (lastHand === undefined) {
    payoutEl.innerText = "";
  } else {
    payoutEl.innerText = `WIN ${lastHand}`;
  }
  betMessageEl.innerText = `Bet ${betSize}`;
  playerCreditEl.innerText = `${playerCredits} CREDITS`;
}

function renderPlayerHand() {
  if (!playerHand.length) return;

  playerCardEls.forEach((card, idx) => {
    card.src = playerHand[idx].img;
  });
}

function renderReset() {
  playerHand.forEach((element) => {
    element.isHold = false;
    render();
  });
}

function render() {
  renderMessages();
  renderPlayerHand();
}

function renderWinningHandMessage() {
  winningHandEl.style.display = "flex";
  winningHandEl.innerText = `${PAYOUT[playerWin].name}`;
}

//SOUND FUNCTIONS
function playSound(name) {
  player.src = name;
  player.play();
}

//GET WINNER FUNCTIONS

function getWinner() {
  if (isRoyalFlush()) return "royalFlush";
  if (isStraightFlush()) return "straightFlush";
  if (isFourAces()) return "fourAces";
  if (isFourLow()) return "fourLow";
  if (isFourOther()) return "fourOthers";
  if (isFullHouse()) return "fullHouse";
  if (isFlush()) return "flush";
  if (isStraight()) return "straight";
  if (isThreeOfAKind()) return "threeOfAKind";
  if (isTwoPair()) return "twoPair";
  if (isJacksOrBetter()) return "jacks";
  return "zero";
}

function isRoyalFlush() {
  const tempHand = [...playerHand];
  tempHand.sort((a, b) => a.rank - b.rank);
  return isFlush() && isStraight() && tempHand[0].rank === 10;
}

function isStraightFlush() {
  if (isFlush() && isStraight()) {
    return true;
  }
}

function isFourAces() {
  const reduceHand = reduceHandRank();
  for (const [key, value] of Object.entries(reduceHand)) {
    if (key === 14) {
      if (value === 4) {
        return true;
      }
    }
  }
}

function isFourLow() {
  const reduceHand = reduceHandRank();
  for (const [key, value] of Object.entries(reduceHand)) {
    if (key > 0 && key < 5) {
      if (value === 4) {
        return true;
      }
    }
  }
}

function isFourOther() {
  const reduceHand = reduceHandRank();
  for (const [key, value] of Object.entries(reduceHand)) {
    if (key > 4) {
      if (value === 4) {
        return true;
      }
    }
  }
}

function isFullHouse() {
  if (isPair() && isThreeOfAKind()) {
    return true;
  }
}

function isFlush() {
  const reduceHand = reduceHandSuit();
  for (const [key, value] of Object.entries(reduceHand)) {
    if (value === 5) {
      return true;
    }
  }
}

function isStraight() {
  const tempHand = [...playerHand];
  tempHand.sort((a, b) => a.rank - b.rank);
  let prevRank = tempHand[0].rank === 14 ? 1 : tempHand[0].rank;
  for (let i = 1; i < 5; i++) {
    if (tempHand[i].rank - 1 !== prevRank) return false;
    prevRank = tempHand[i].rank;
  }
  return true;
}

function isThreeOfAKind() {
  const reduceHand = reduceHandRank();
  for (const [key, value] of Object.entries(reduceHand)) {
    if (value === 3) {
      return true;
    }
  }
}

function isTwoPair() {
  const reduceHand = reduceHandRank();
  let pair = 0;
  for (const [key, value] of Object.entries(reduceHand)) {
    if (value === 2) {
      pair++;
    }
  }
  if (pair === 2) {
    return true;
  }
}

function isJacksOrBetter() {
  const reduceHand = reduceHandRank();
  for (const [key, value] of Object.entries(reduceHand)) {
    if (key > 10) {
      if (value === 2) {
        return true;
      }
    }
  }
}

// // // FIND ANY PAIR FOR FULLHOUSE
function isPair() {
  const reduceHand = reduceHandRank();
  for (const [key, value] of Object.entries(reduceHand)) {
    if (value === 2) {
      return true;
    }
  }
}

// REDUCE HAND BY RANK OR SUIT FUNCTIONS
function reduceHandRank() {
  const tempHand = [...playerHand];
  let reduceHand = tempHand.reduce((acc, curVal) => {
    if (curVal.rank in acc) {
      acc[curVal.rank]++;
    } else {
      acc[curVal.rank] = 1;
    }
    return acc;
  }, {});
  return reduceHand;
}

function reduceHandSuit() {
  const tempHand = [...playerHand];
  let reduceHand = tempHand.reduce((acc, curVal) => {
    if (curVal.suit in acc) {
      acc[curVal.suit]++;
    } else {
      acc[curVal.suit] = 1;
    }
    return acc;
  }, {});
  return reduceHand;
}
