// Event-driven counter: state changes only in response to button click events.
const countEl = document.getElementById("count");
const increaseBtn = document.getElementById("increase-btn");
const resetBtn = document.getElementById("reset-btn");

let count = 0;

function render() {
  countEl.textContent = count;
  // Small visual "bump" animation on each update
  countEl.classList.add("bump");
  setTimeout(() => countEl.classList.remove("bump"), 150);
}

increaseBtn.addEventListener("click", () => {
  count += 1;
  render();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  render();
});