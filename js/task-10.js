const btn = document.querySelector("div>button");
const boxes = document.querySelector("div#boxes");
const number = document.querySelector("input");

const create = (event) => {
  for (let i = 0; i < number.value; i++) {
    if (i > number.max) {
      alert("max value = 100");
      return false;
    }
  }
  for (let i = 0; i < number.value; i++) {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    if (boxes.children.length < number.max) {
      const div = document.createElement("div");
      const size = boxes.children.length * 10 + 30 + "px";
      div.style.height = size;
      div.style.width = size;
      div.style.backgroundColor = getRandomHexColor();
      boxes.append(div);
    }
    if (boxes.children.length >= number.max) {
      alert("You have reached the maximum number of boxes = 100!");
      return false;
    }
  }
};

const destroy = (event) => {
  for (
    let i = boxes.children.length - 1;
    i > boxes.children.length - 1 - number.value;
    i--
  ) {
    if (0 < boxes.children.length) {
      const div = boxes.children[i];
      div.remove();
    } else {
      alert("You destroy all boxes!");
      return false;
    }
  }
};
btn.addEventListener("click", create);
btn.nextElementSibling.addEventListener("click", destroy);
