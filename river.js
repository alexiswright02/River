// === STATE ===
const state = {
  start: ["sheep"], //1 sheep on the starting bank
  target: [], //target bank is empty
};

/** Moves a sheep from start to target */
function moveSheep() {
  // TODO-------------------------------------------------------------------------
  const sheep = state.start.pop(); //remove from starting bank
  state.target.push(sheep); //pushes to target bank
  render(); //updates 
}

// === Render ===
/** Renders sheep on the starting bank */
function renderStartSheep() {
  const startingSheep = state.start.map((sheep) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = "🐑";
    // Add event listener so the sheep moves when clicked
    // 1. TODO-----------------------------------------------------------------------
    button.addEventListener("click", () => moveSheep());
    li.append(button);
    return li;
  });

  const startingBank = document.querySelector("#startingBank ul");
  startingBank.replaceChildren(...startingSheep);
}

/** Renders sheep on the target bank */
function renderTargetSheep() {
  // TODO-------------------------------------------------------------------------
  const targetSheep = state.target.map((sheep) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    li.textContent = "🐑";
    return li;
  });
  const targetBank = document.querySelector("#targetBank ul");
  targetBank.replaceChildren(...targetSheep);
}

function render() {
  renderStartSheep();
  renderTargetSheep();
}

// === Script ===
// Add sheep to the starting bank when the form is submitted
// TODO---------------------------------------------------------------------------
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = document.querySelector("#numSheep");
  for (let i = 0; i < userInput.value; i++) {
    state.start.push("sheep");
  }
  render();
  form.reset();
});

// Initial render
render();
