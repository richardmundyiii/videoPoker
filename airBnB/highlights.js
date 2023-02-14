//Holding Cards In Hand Before ReDeal
function holdCards() {
  winningHandEl.style.display = "hidden";
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

//Winning Hand Logic If Straight
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

// After Redraw Complete, Check If Won Then Reset Game While Keeping State
function finalStage() {
  gameStage = "finish";
  if (playerCredits === 0) return;
  playerWin = getWinner();
  playerCredits += PAYOUT[playerWin][betSize];
  lastHand = PAYOUT[playerWin][betSize];
  handleHandHistory(playerHand);
  if (getWinner) {
    renderWinningHandMessage();
  }
  renderReset();
  newHand();
  render();
}
