const categories = document.querySelector("ul#categories");
const categoryName = document.querySelectorAll("li.item>h2");
const itemList = document.querySelectorAll("li.item>ul");

console.log("Number of categories:", categories.children.length);

for (let i = 0; i < 3; i++) {
  console.log("Category:", categoryName[i].textContent);
  console.log("Elements:", itemList[i].children.length);
}
