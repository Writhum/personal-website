let roundScore = 0;
let roundScoreArray = [0, 0, 0, 0, 0, 0];

function roundScoreCalculator() {
  let countOnes = 0;
  let countTwoes = 0;
  let countThrees = 0;
  let countFours = 0;
  let countFives = 0;
  let countSixes = 0;
  let countFlush = 0;
  let countFullFlush = 0;

  let comboPointsOnes = 0;
  let comboPointsTwoes = 0;
  let comboPointsThrees = 0;
  let comboPointsFours = 0;
  let comboPointsFives = 0;
  let comboPointsSixes = 0;
  let comboPointsFlush = 0;
  let comboPointsFullFlush = 0;

  for (let i = 0; i < roundScoreArray.length; i++) {

    if (selectedDie[i] === 1) {
      roundScoreArray[i] = 100;
    } else if (selectedDie[i] === 0) {
      roundScoreArray[i] = 0;
    }

    if (selectedDie[i] === 5) {
      roundScoreArray[i] = 50;
    } else if (selectedDie[i] === 0) {
      roundScoreArray[i] = 0;
    }
  }


// Combo Checker: Adds combo points
  for (let i = 0; i < selectedDie.length; i++) {

// Ones
    if (selectedDie[i] === 1) {
      countOnes++;
      if (countOnes === 3) {
        comboPointsOnes += 700;
      }
      if (countOnes === 4) {
        comboPointsOnes += 1600;
      }
      if (countOnes === 5) {
        comboPointsOnes += 3500;
      }
      if (countOnes === 6) {
        comboPointsOnes += 7400;
      }
    }

// Twoes
    if (selectedDie[i] === 2) {
      countTwoes++;
      if (countTwoes === 3) {
        comboPointsTwoes += 200;
      }
      if (countTwoes === 4) {
        comboPointsTwoes += 400;
      }
      if (countTwoes === 5) {
        comboPointsTwoes += 800;
      }
      if (countTwoes === 6) {
        comboPointsTwoes += 1600;
      }
    }

// Threes
    if (selectedDie[i] === 3) {
      countThrees++;
      if (countThrees === 3) {
        comboPointsThrees += 300;
      }
      if (countThrees === 4) {
        comboPointsThrees += 600;
      }
      if (countThrees === 5) {
        comboPointsThrees += 1200;
      }
      if (countThrees === 6) {
        comboPointsThrees += 2400;
      }
    }

// Fours
    if (selectedDie[i] === 4) {
      countFours++;
      if (countFours === 3) {
        comboPointsFours += 400;
      }
      if (countFours === 4) {
        comboPointsFours += 800;
      }
      if (countFours === 5) {
        comboPointsFours += 1600;
      }
      if (countFours === 6) {
        comboPointsFours += 3200;
      }
    }

// Fives
    if (selectedDie[i] === 5) {
      countFives++;
      if (countFives === 3) {
        comboPointsFives += 350;
      }
      if (countFives === 4) {
        comboPointsFives += 800;
      }
      if (countFives === 5) {
        comboPointsFives += 1750;
      }
      if (countFives === 6) {
        comboPointsFives += 3700;
      }
    }

// Sixes
    if (selectedDie[i] === 6) {
      countSixes++;
      if (countSixes === 3) {
        comboPointsSixes += 600;
      }
      if (countSixes === 4) {
        comboPointsSixes += 1200;
      }
      if (countSixes === 5) {
        comboPointsSixes += 2400;
      }
      if (countSixes === 6) {
        comboPointsSixes += 4800;
      }
    }

// Flush (1 and 2 and 3 and 4 and 5)
    if (countOnes >= 1 && countTwoes >= 1 && countThrees >= 1 && countFours >= 1 && countFives >= 1) {
      countFlush++;
      if (countFlush === 1) {
        comboPointsFlush += 1350;
      }
    }

    if (countOnes >= 1 && countTwoes >= 1 && countThrees >= 1 && countFours >= 1 && countFives >= 1 && countSixes >= 1) {
      countFullFlush++;
      if (countFullFlush === 1) {
        comboPointsFullFlush += 1850;
      }
    }
  }

// Combo Checker: Removes combo points
// Ones
  if (countOnes !== 3 && comboPointsOnes >= 700) {
    comboPointsOnes -= 700;
  }
  if (countOnes !== 4 && comboPointsFours >= 1600) {
    comboPointsOnes -= 1600;
  }
  if (countOnes !== 5 && comboPointsOnes >= 3500) {
    comboPointsOnes -= 3500;
  }
  if (countOnes !== 6 && comboPointsOnes >= 7400) {
    comboPointsOnes -= 7400;
  }

// Twoes
  if (countTwoes !== 3 && comboPointsTwoes >= 200) {
    comboPointsTwoes -= 200;
  }
  if (countTwoes !== 4 && comboPointsTwoes >= 400) {
    comboPointsTwoes -= 400;
  }
  if (countTwoes !== 5 && comboPointsTwoes >= 800) {
    comboPointsTwoes -= 800;
  }
  if (countTwoes !== 6 && comboPointsTwoes >= 1600) {
    comboPointsTwoes -= 1600
  }

// Threes
  if (countThrees !== 3 && comboPointsThrees >= 300) {
    comboPointsThrees -= 300;
  }
  if (countThrees !== 4 && comboPointsThrees >= 600) {
    comboPointsThrees -= 600;
  }
  if (countThrees !== 5 && comboPointsThrees >= 1200) {
    comboPointsThrees -= 1200;
  }
  if (countThrees !== 6 && comboPointsThrees >= 2400) {
    comboPointsThrees -= 2400;
  }

// Fours
  if (countFours !== 3 && comboPointsFours >= 400) {
    comboPointsFours -= 400;
  }
  if (countFours !== 4 && comboPointsFours >= 800) {
    comboPointsFours -= 800;
  }
  if (countFours !== 5 && comboPointsFours >= 1600) {
    comboPointsFours -= 1600;
  }
  if (countFours !== 6 && comboPointsFours >= 3200) {
    comboPointsFours -= 3200;
  }

// Fives
  if (countFives !== 3 && comboPointsFives >= 350) {
    comboPointsFives -= 350;
  }
  if (countFives !== 4 && comboPointsFives >= 800) {
    comboPointsFives -= 800;
  }
  if (countFives !== 5 && comboPointsFives >= 1750) {
    comboPointsFives -= 1750;
  }
  if (countFives !== 6 && comboPointsFives >= 3700) {
    comboPointsFives -= 3700;
  }

// Sixes
  if (countSixes !== 3 && comboPointsSixes >= 600) {
    comboPointsSixes -= 600;
  }
  if (countSixes !== 4 && comboPointsSixes >= 1200) {
    comboPointsSixes -= 1200;
  }
  if (countSixes !== 5 && comboPointsSixes >= 2400) {
    comboPointsSixes -= 2400;
  }
  if (countSixes !== 6 && comboPointsSixes >= 4800) {
    comboPointsSixes -= 4800;
  }

// Flush
  if (countFlush !== 1 && comboPointsFlush >= 1350) {
    comboPointsFlush -= 1350;
  }

// Full Flush
  if (countFullFlush !== 1 && comboPointsFullFlush >= 1850) {
    comboPointsFullFlush -= 1850;
  }
  

// Adds Round Score with Combo Points
  const rScore = roundScoreArray[0] + roundScoreArray[1] + roundScoreArray[2] + roundScoreArray[3] + roundScoreArray[4] + roundScoreArray[5] + comboPointsOnes + comboPointsTwoes + comboPointsThrees + comboPointsFours + comboPointsFives + comboPointsSixes + comboPointsFlush + comboPointsFullFlush;
  roundScore = rScore;

// Displays total Round Score
  roundScore - Math.max(0, roundScore);
  document.querySelector('.round-score-display').innerHTML = `Round Score: ${roundScore}pts`;

  console.log(roundScoreArray);
};

document.querySelector('.js-die1').addEventListener('click', () => {
  roundScoreCalculator();
})

document.querySelector('.js-die2').addEventListener('click', () => {
  roundScoreCalculator();
})

document.querySelector('.js-die3').addEventListener('click', () => {
  roundScoreCalculator();
})

document.querySelector('.js-die4').addEventListener('click', () => {
  roundScoreCalculator();
})

document.querySelector('.js-die5').addEventListener('click', () => {
  roundScoreCalculator();
})

document.querySelector('.js-die6').addEventListener('click', () => {
  roundScoreCalculator();
})