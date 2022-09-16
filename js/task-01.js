
const categoriesUl = Array.from(document.querySelectorAll("ul#categories>li.item"));
  console.log(`Number of categories: ${categoriesUl.length}`);



const ulElement = Array.from(document.querySelector('#categories').children);
for (let element of ulElement) { 
    let category = element.firstElementChild.textContent;   
    let quantityElem = element.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElem}`);
};

