const btn = document.querySelector("div#counter");
const counterValue = document.querySelector("span");

const decrementBtn = () => {
  counterValue.textContent = parseInt(counterValue.textContent) - 1;
};
const incrementBtn = () => {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
};
