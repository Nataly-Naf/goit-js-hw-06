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
const listOfImages = document.querySelector('ul.gallery')
console.log(listOfImages)
const makeImageMarkup = image => {
  console.log(image)
  return `<li> <img class=list-element-image src="${image.url}" alt="${image.alt}"> </li>`;
} 

const imageCollection = images
  .map(makeImageMarkup).join (' ')
  
console.log (imageCollection)
listOfImages.insertAdjacentHTML("beforeend", imageCollection) 




 

  
