const resetBtn = document.querySelector("#reset-game");
const shuffleBtn = document.querySelector("#shuffle-cards");
const form = document.querySelector("#game-form");
const gameUnit = Array.from(document.querySelectorAll(".game-unit"));
const modal = document.querySelector(".modal");
const scoreText = document.querySelector(".score-text");
const closeModalBtn = document.querySelector(".close-modal-button");
const gameContainer = document.querySelector(".game-container");
let showedUnits = [];

//resets game by hiding cards.
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gameUnit.forEach((unit) => {
    unit.classList.add("hidden");
    unit.classList.remove("correct");
    unit.classList.remove("incorrect");
  });
});

//makes numbers appear on cards when clicked.
document.addEventListener("click", (e) => {
  if (!e.target.matches(".game-unit")) return;
  e.preventDefault();
  showedUnits = [];
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

//resets and shuffles cards
shuffleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gameUnit.forEach((unit) => {
    unit.classList.add("hidden");
    unit.classList.remove("correct");
    unit.classList.remove("incorrect");
  });
  const shuffledCards = shuffleCards();
  for (let i = 0; i < gameUnit.length; i++) {
    gameUnit[i].innerText = shuffledCards[i];
  }
});

//closes score modal when clicked
closeModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
});

//checks to see if the two cards in showedUnits array are the same and makes them red/green if they are correct/incorrect
function checkIfCardCorrect(showedUnits) {
  const isSameNumber = showedUnits.every((number) =>
    number.isEqualNode(showedUnits[0])
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
  const isGameDone = gameUnit.some((unit) => {
    return unit.classList.contains("hidden");
  });
  if (!isGameDone) {
    showScore();
  }
}

//show the amount correct
function showScore() {
  const numberCorrectArr = gameUnit.filter((unit) =>
    unit.classList.contains("correct")
  );
  const numberCorrect = numberCorrectArr.length / 2;
  const total = 8;
  const score = `${numberCorrect} out of ${total}`;
  scoreText.innerText = score;
  modal.style.display = "block";
}
//shuffles cards
function shuffleCards() {
  let gameUnitText = gameUnit.map((unit) => unit.textContent);
  for (let i = 0; i < gameUnitText.length; i++) {
    let temp = gameUnitText[i];
    let r = Math.floor(Math.random() * gameUnitText.length);
    gameUnitText[i] = gameUnitText[r];
    gameUnitText[r] = temp;
  }
  return gameUnitText;
}
