// Runs "if-statement" 6 times, displaying a random number displayed in each of the 6 buttons
const diceRoller = document.querySelector('.dice-roller');
let rolledDice = false;

diceRoller.addEventListener('click', () => {
  rollDice();
  roundScore = 0;
  document.querySelector('.round-score-display').innerHTML = `Round Score: ${roundScore}pts`;
  roundScoreArray = [0, 0, 0, 0, 0, 0];
  console.log(roundScoreArray);
});

function rollDice(result) {
  result = [];
  console.log(rolledDice);


  if (totalScore >= 2000 && rolledDice === true) {
    document.querySelector('.rolled').innerHTML = 'You already won!'
    return
  } 

  if (computerTotalScore >= 2000 && rolledDice === true) {
    document.querySelector('.rolled').innerHTML = 'You lost, quit playing!'
    return
  }

  if (document.querySelector('.calculate').innerHTML === 'Calculating...' && rolledDice === true) {
    document.querySelector('.rolled').innerHTML = 'Wait for computer'
    return
  }

  if (rolledDice === false) {
    rolledDice = true;
    for (let i = 0; i <= 5; i++) {
      const randomNumber = Math.random();
    
      if (randomNumber >= 0 && randomNumber < 1 / 6) {
        result.push(1);
        document.querySelector(`.js-die${i + 1}`).innerHTML = result[i];
      };
    
      if (randomNumber >= 1 / 6 && randomNumber < 2 / 6) {
        result.push(2);
        document.querySelector(`.js-die${i + 1}`).innerHTML = result[i];
      };
    
      if (randomNumber >= 2 / 6 && randomNumber < 3 / 6) {
        result.push(3);
        document.querySelector(`.js-die${i + 1}`).innerHTML = result[i];
      };
    
      if (randomNumber >= 3/ 6 && randomNumber < 4 / 6) {
        result.push(4);
        document.querySelector(`.js-die${i + 1}`).innerHTML = result[i];
      };
    
      if (randomNumber >= 4 / 6 && randomNumber < 5 / 6) {
        result.push(5);
        document.querySelector(`.js-die${i + 1}`).innerHTML = result[i];
      };
    
      if (randomNumber >= 5 / 6 && randomNumber < 1) {
        result.push(6);
        document.querySelector(`.js-die${i + 1}`).innerHTML = result[i];
      };
    };

    return result;
  } else {
    document.querySelector('.rolled').innerHTML = 'You already rolled! Select your dice!'
  }


};