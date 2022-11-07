const input = document.querySelector("input");
const span = document.querySelector("span#text");

const initialSize = (span.style.fontSize = input.value + "px");

const changeSize = (event) => {
  span.style.fontSize = input.value + "px";
};

input.addEventListener("input", changeSize);
