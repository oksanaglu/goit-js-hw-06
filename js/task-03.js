const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



for ( let el of images ) 
document .querySelector
    ('.gallery').insertAdjacentHTML('beforeEnd', `<li><img src ="${el.url}" alt ="${el.alt}" width ="${600}"></li>`);
    
console.log(images);

const ulElement = document.querySelector("ul");
ulElement.style.textAlign = "center";
ulElement.style.listStyle = "none";









// const elements = images.map(option => {
  
//   const imgElement = document.createElement("img");
//   imgElement.classList.add("gallery__img");
//   imgElement.src = option.url;
//   imgElement.alt = option.alt;
 
//   ulElement.append(imgElement);

//   return imgElement;

// });

// console.log(elements);
// ulElement.append(...elements);






