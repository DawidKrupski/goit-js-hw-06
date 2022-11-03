const form = document.querySelector("form");
const input = document.querySelectorAll("input");
const submit = document.querySelector("button");

const check = (event) => {
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      alert("Complete the form");
      return false;
    }
  }
  for (let i = 0; i < input.length; i++) {
    console.log(input[i].name + ":", input[i].value);
  }
  form.reset();
};

submit.addEventListener("click", check);
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
