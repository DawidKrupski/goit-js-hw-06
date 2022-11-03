const input = document.querySelector("input");

const preview = (event) => {
  const span = document.querySelector("span#name-output");
  const name = event.target.value;
  span.textContent = name;
  if (name === "") {
    span.textContent = "Anonymous";
  }
};

input.addEventListener("input", preview);
