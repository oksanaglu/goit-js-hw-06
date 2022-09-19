const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulElement = document.querySelector("ul");

const elements = ingredients.map(option => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = option;
  
  return liElement;

});

console.log(elements);

ulElement.append(...elements);







// const ulElement = document.querySelector("ul");
// for (let i of ingredients) {
//   const liElement = document.createElement("li");
//   liElement.classList.add("item");
//   liElement.innerHTML = i;
//   ulElement.append(liElement);
// }

// console.log(ulElement);
