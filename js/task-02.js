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

ulElement.append(...elements);
