// Adds the value of selected die into an array
let selectedDie = [0, 0, 0, 0, 0, 0];

// Select all die buttons
const dieButtons = document.querySelectorAll('.dice');



// Add event listener to each die button
dieButtons.forEach((dieButton, index) => {
  dieButton.addEventListener('click', () => {
    const isSelected = dieButton.classList.contains('selectedDie');
    const dieNum = parseInt(dieButton.textContent);

    if (!isSelected) {
      dieButton.classList.add('selectedDie');
      selectedDie[index] = dieNum;
    } else {
      dieButton.classList.remove('selectedDie');
      selectedDie[index] = 0;
    }

    console.log(selectedDie);
  });
});




// Removes the 'selectedDie' class from all buttons, and resets 'selectedDie' Array, when Roll Dice is clicked
diceRoller.addEventListener('click', () => {

  dieButtons.forEach((dieButton, index) => {
    dieButton.classList.remove('selectedDie');
  });

  selectedDie = [0, 0, 0, 0, 0, 0]
  console.log(selectedDie);
});