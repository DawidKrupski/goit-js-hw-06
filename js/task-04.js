const btn = document.querySelector("div#counter");
const counterValue = document.querySelector("span.value");

let value = 0;

const decrementBtn = () => {
  value -= 1;
  console.log("decrement");
  console.log(value);
};
const incrementBtn = () => {
  value += 1;
  console.log("increment");
  console.log(value);
};

btn.firstElementChild.addEventListener("click", decrementBtn);
btn.lastElementChild.addEventListener("click", incrementBtn);
