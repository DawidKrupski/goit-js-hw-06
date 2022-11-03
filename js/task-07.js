const input = document.querySelector("input");
const span = document.querySelector("span#text");

const changeSize = (event) => {
  span.style.fontSize = input.value + "px";
};

input.addEventListener("input", changeSize);
