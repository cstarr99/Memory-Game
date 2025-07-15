const submitBtn = document.querySelector("#reset-game");
const shuffleBtn = document.querySelector("#shuffle-cards");
const form = document.querySelector("#game-form");
const gameUnit = Array.from(document.querySelectorAll(".game-unit"));

//reset game back to nothing
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gameUnit.forEach((unit) => {
    unit.classList.add("hidden");
  });
});

shuffleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gameUnit.forEach((unit) => {
    unit.textContent = Math.floor(Math.random() * 9);
    if (unit.textContent) {
    }
  });
});

document.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.matches(".game-unit")) return;
  e.target.classList.remove("hidden");
});

function turnCard(card) {}

function randomizeCard(textContent) {}

function addCheck() {
  gameUnit.forEach((unit) => {
    unit.filter((insideUnit) => {
      console.log(insideUnit.textContent);
    });
  });
}

addCheck();
