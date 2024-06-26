let computerScore = 0;
let computerTotalScore = 0;




function computerMove() {
  const randomNumber = Math.random();

  if (totalScore >= 2000) {
    document.querySelector('.computer-turn').innerHTML = ''
    return
  }

  if (randomNumber >= 0 && randomNumber < 1 / 21) {
    computerScore += 50;
  }

  if (randomNumber >= 1 / 21 && randomNumber < 2 / 21) {
    computerScore += 50;
  }

  if (randomNumber >= 2 / 21 && randomNumber < 3 / 21) {
    computerScore += 100;
  }

  if (randomNumber >= 3 / 21 && randomNumber < 4 / 21) {
    computerScore += 100;
  }

  if (randomNumber >= 4 / 21 && randomNumber < 5 / 21) {
    computerScore += 150;
  }

  if (randomNumber >= 5 / 21 && randomNumber < 6 / 21) {
    computerScore += 150;
  }

  if (randomNumber >= 6 / 21 && randomNumber < 7 / 21) {
    computerScore += 250;
  }

  if (randomNumber >= 7 / 21 && randomNumber < 8 / 21) {
    computerScore += 300;
  }

  if (randomNumber >= 8 / 21 && randomNumber < 9 / 21) {
    computerScore += 300;
  }

  if (randomNumber >= 9 / 21 && randomNumber < 10 / 21) {
    computerScore += 300;
  }

  if (randomNumber >= 10 / 21 && randomNumber < 11 / 21) {
    computerScore += 350;
  }

  if (randomNumber >= 11 / 21 && randomNumber < 12 / 21) {
    computerScore += 350;
  }

  if (randomNumber >= 12 / 21 && randomNumber < 13 / 21) {
    computerScore += 400;
  }

  if (randomNumber >= 13 / 21 && randomNumber < 14 / 21) {
    computerScore += 400;
  }

  if (randomNumber >= 14 / 21 && randomNumber < 15 / 21) {
    computerScore += 450;
  }

  if (randomNumber >= 15 / 21 && randomNumber < 16 / 21) {
    computerScore += 450;
  }

  if (randomNumber >= 16 / 21 && randomNumber < 17 / 21) {
    computerScore += 500;
  }

  if (randomNumber >= 17 / 21 && randomNumber < 18 / 21) {
    computerScore += 700;
  }

  if (randomNumber >= 18 / 21 && randomNumber < 19 / 21) {
    computerScore += 1000;
  }

  if (randomNumber >= 19 / 21 && randomNumber < 20 / 21) {
    computerScore += 2000;
  }
  
  if (randomNumber >= 20 / 21 && randomNumber < 21 / 21) {
    computerScore += 0;
  }



  document.querySelector('.calculate').innerHTML = 'Calculating...'


  document.querySelector('.computer-turn').innerHTML = 'Computers turn!'

  setTimeout(compRoundScoreDisplay, 2000)

  setTimeout(compScoreDisplay, 3000);
}

function compRoundScoreDisplay() {
  document.querySelector('.computer-round-score-display').innerHTML = `Round Score: ${computerScore}pts`
}

function compScoreDisplay() {
  rolledDice = false;

  document.querySelector('.calculate').innerHTML = 'Calculated!'

  computerTotalScore = computerTotalScore += computerScore;

  document.querySelector('.computer-total-score-display').innerHTML = `Total Score: ${computerTotalScore}pts`;

  document.querySelector('.computer-round-score-display').innerHTML = `Round Score: 0pts`

  computerScore = 0;

  document.querySelector('.rolled').innerHTML = '';
  document.querySelector('.your-turn').innerHTML = 'Your turn, roll the dice!'
  document.querySelector('.computer-turn').innerHTML = ''

  if (totalScore >= 2000) {
      document.querySelector('.your-turn').innerHTML = '';
  }

  if (document.querySelector('.js-winDisplay').innerHTML != 'You Win!') {
    if (computerTotalScore >= 2000) {
      document.querySelector('.computer-js-winDisplay').innerHTML = 'Computer Wins!'
      document.querySelector('.your-turn').innerHTML = '';
      rolledDice = true;
    }
  }
}

