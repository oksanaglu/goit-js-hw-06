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


// const ulElement = document.querySelector("ul");

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


const ulElement = document.querySelector("ul");

const elements = images.map(option => {
  const liElement = document.createElement("li");
  const imgElement = document.createElement("img");
  imgElement.classList.add("gallery__img");
  imgElement.src = option.url;
  imgElement.alt = option.alt;
 
  ulElement.append(liElement, imgElement);

  return imgElement;
  
});

console.log(elements);
// ulElement.append(...elements);



