const submitBtn = document.querySelector(".submit");
const form = document.querySelector("#game-form");
const gameUnit = Array.from(document.querySelectorAll(".game-unit"));

//reset game back to nothing
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gameUnit.forEach((unit) => {
    unit.classList.add("hidden");
  });
});

document.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.matches(".game-unit")) return;
  e.target.classList.remove("hidden");
  console.log("hell");
});

function turnCard(card) {}
