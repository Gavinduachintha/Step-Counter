const value = document.getElementById("counter-display");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");
let count = 0;

//Update the value on the screen
function updateCounter() {
  if (count < 0) {
    value.style.color = "#FF5733";
  } else if (count > 0) {
    value.style.color = "#45b39d";
  } else {
    value.style.color = "#484545";
  }
  value.textContent = count;
}

//Number increment
incrementBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

//Number decrement
decrementBtn.addEventListener("click", () => {
  count--;

  updateCounter();
});

//Number reset
resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});
