let totalScore = 0;

function addTotalScore() {

}

document.querySelector('.next-round').addEventListener('click', () => {
  totalScore += roundScore;
  document.querySelector('.total-score-display').innerHTML = `Total Score: ${totalScore}pts`
  roundScore = 0;
  document.querySelector('.round-score-display').innerHTML = `Round Score: ${roundScore}pts`;


  dieButtons.forEach((dieButton, index) => {
    dieButton.classList.remove('selectedDie');
  });

  selectedDie = [0, 0, 0, 0, 0, 0]
  console.log(selectedDie);

  roundScoreArray = [0, 0, 0, 0, 0, 0];
  console.log(roundScoreArray);

  document.querySelectorAll('.dice').forEach(element => {
    element.innerHTML = 0;
  });

  document.querySelector('.your-turn').innerHTML = '';


  if (document.querySelector('.computer-js-winDisplay').innerHTML != 'Computer Wins!') {
    computerMove();
    if (totalScore >= 2000) {
      document.querySelector('.js-winDisplay').innerHTML = 'You Win!'
      rolledDice = true;
    }
  }
});