const input = document.querySelector("input");

const check = (event) => {
  if (input.value.length === 6) {
    input.className = "valid";
  } else {
    input.className = "invalid";
  }
};

input.addEventListener("blur", check);
