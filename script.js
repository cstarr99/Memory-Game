const submitBtn = document.querySelector("#reset-game");
const shuffleBtn = document.querySelector("#shuffle-cards");
const form = document.querySelector("#game-form");
const gameUnit = Array.from(document.querySelectorAll(".game-unit"));
let showedUnits = [];
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
  showedUnits = [];
  if (!e.target.matches(".game-unit")) return;
  e.target.classList.remove("hidden");
  gameUnit.forEach((unit) => {
    if (
      !unit.classList.contains("hidden") &&
      !unit.classList.contains("correct") &&
      !unit.classList.contains("incorrect")
    ) {
      showedUnits.push(unit);
    }
  });
  if (showedUnits.length == 2) {
    checkIfCardCorrect(showedUnits);
  }
});

function checkIfCardCorrect(showedUnits) {
  const LastTwoShowedUnits = showedUnits.slice(-2);
  const isSameNumber = LastTwoShowedUnits.every((number) =>
    number.isEqualNode(LastTwoShowedUnits[0])
  );
  if (isSameNumber) {
    LastTwoShowedUnits.forEach((unit) => {
      unit.classList.add("correct");
    });
  } else {
    LastTwoShowedUnits.forEach((unit) => {
      unit.classList.add("incorrect");
    });
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
 *after game is over give number correct(%)
 *shuffle cards?
 */
