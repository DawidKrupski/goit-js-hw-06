const body = document.querySelector("body");
const btn = document.querySelector("button.change-color");
const color = document.querySelector("span.color");

const changeColor = (event) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
};
console.log();

btn.addEventListener("click", changeColor);
