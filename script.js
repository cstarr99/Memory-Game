const submitBtn = document.querySelector("#reset-game");
const shuffleBtn = document.querySelector("#shuffle-cards");
const form = document.querySelector("#game-form");
const gameUnit = Array.from(document.querySelectorAll(".game-unit"));

//resets game by hiding cards.
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gameUnit.forEach((unit) => {
    unit.classList.add("hidden");
    unit.classList.remove("correct");
    unit.classList.remove("incorrect");
  });
});

//makes numbers appear on cards when clicked.
document.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.matches(".game-unit")) return;
  e.target.classList.remove("hidden");
  const showedUnits = gameUnit.filter((unit) => {
    return !unit.classList.contains("hidden");
  });
  checkIfCardCorrect(showedUnits, 2);
  if (showedUnits.length == 4) {
    const newShowedUnits = showedUnits.slice(-2);
    const isSameNumber = newShowedUnits.every((number) =>
      number.isEqualNode(newShowedUnits[0])
    );
    if (isSameNumber) {
      showedUnits.forEach((unit) => {
        unit.classList.add("correct");
      });
    } else {
      showedUnits.forEach((unit) => {
        unit.classList.add("incorrect");
      });
    }
  }
  if (showedUnits.length == 6) {
    const newShowedUnits = showedUnits.slice(-2);
    const isSameNumber = newShowedUnits.every((number) =>
      number.isEqualNode(newShowedUnits[0])
    );
    if (isSameNumber) {
      showedUnits.forEach((unit) => {
        unit.classList.add("correct");
      });
    } else {
      showedUnits.forEach((unit) => {
        unit.classList.add("incorrect");
      });
    }
  }
  if (showedUnits.length == 8) {
    const newShowedUnits = showedUnits.slice(-2);
    const isSameNumber = newShowedUnits.every((number) =>
      number.isEqualNode(newShowedUnits[0])
    );
    if (isSameNumber) {
      showedUnits.forEach((unit) => {
        unit.classList.add("correct");
      });
    } else {
      showedUnits.forEach((unit) => {
        unit.classList.add("incorrect");
      });
    }
  }
  if (showedUnits.length == 10) {
    const newShowedUnits = showedUnits.slice(-2);
    const isSameNumber = newShowedUnits.every((number) =>
      number.isEqualNode(newShowedUnits[0])
    );
    if (isSameNumber) {
      showedUnits.forEach((unit) => {
        unit.classList.add("correct");
      });
    } else {
      showedUnits.forEach((unit) => {
        unit.classList.add("incorrect");
      });
    }
  }
  if (showedUnits.length == 12) {
    const newShowedUnits = showedUnits.slice(-2);
    const isSameNumber = newShowedUnits.every((number) =>
      number.isEqualNode(newShowedUnits[0])
    );
    if (isSameNumber) {
      showedUnits.forEach((unit) => {
        unit.classList.add("correct");
      });
    } else {
      showedUnits.forEach((unit) => {
        unit.classList.add("incorrect");
      });
    }
  }
  if (showedUnits.length == 14) {
    const newShowedUnits = showedUnits.slice(-2);
    const isSameNumber = newShowedUnits.every((number) =>
      number.isEqualNode(newShowedUnits[0])
    );
    if (isSameNumber) {
      showedUnits.forEach((unit) => {
        unit.classList.add("correct");
      });
    } else {
      showedUnits.forEach((unit) => {
        unit.classList.add("incorrect");
      });
    }
  }
  if (showedUnits.length == 16) {
    const newShowedUnits = showedUnits.slice(-2);
    const isSameNumber = newShowedUnits.every((number) =>
      number.isEqualNode(newShowedUnits[0])
    );
    if (isSameNumber) {
      showedUnits.forEach((unit) => {
        unit.classList.add("correct");
      });
    } else {
      showedUnits.forEach((unit) => {
        unit.classList.add("incorrect");
      });
    }
  }
});

function checkIfCardCorrect(showedUnits, cardPairNumber) {
  if (showedUnits.length == cardPairNumber) {
    const newShowedUnits = showedUnits.slice(-2);
    const isSameNumber = newShowedUnits.every((number) =>
      number.isEqualNode(newShowedUnits[0])
    );
    if (isSameNumber) {
      showedUnits.forEach((unit) => {
        unit.classList.add("correct");
      });
    } else {
      showedUnits.forEach((unit) => {
        unit.classList.add("incorrect");
      });
    }
  }
}

//shuffles cards.
// shuffleBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const shuffleGameNumbers = [];
//   gameUnit.forEach((unit) => {
//     shuffleGameNumbers.push((unit.textContent = Math.floor(Math.random() * 9)));
//   });

//   console.log(shuffleGameNumbers);

//   shuffleGameNumbers.forEach((unit) => {
//     let i = 0;
//     const timesInArray = filterNumberOfTimes(shuffleGameNumbers, unit).length;
//     if (timesInArray === 2) {
//     } else {
//       console.log(shuffleGameNumbers[i]);
//       shuffleGameNumbers[i] = Math.floor(Math.random() * 9);
//     }
//   });
//   console.log(shuffleGameNumbers);
// });

//function that takes in an array and a number to check and filters to find how many times that number is in that array.
// function filterNumberOfTimes(arrayToFilter, numberToCheck) {
//   const numberOfTimes = arrayToFilter.filter(
//     (number) => number == numberToCheck
//   );
//   return numberOfTimes;
// }

/*
 *future things to add:
 *number turns green when get two correct
 *number turns red when get two incorrect
 *after game is over give number correct(%)
 *shuffle cards?
 */
