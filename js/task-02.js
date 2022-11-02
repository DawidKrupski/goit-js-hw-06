const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("ul#ingredients");

for (const elem of ingredients) {
  const elements = document.createElement("li");
  elements.textContent = elem;
  elements.className = "item";
  list.append(elements);
}
