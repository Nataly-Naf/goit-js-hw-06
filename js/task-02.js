const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newIngredients = ingredients.map(option => {
 const ingridientEl = document.createElement('li');
  ingridientEl.textContent = option;
   ingridientEl.classList.add('item');
 return ingridientEl
})
console.log(newIngredients)
const listOfIngridients = document.querySelector('#ingredients')
console.log(listOfIngridients)
listOfIngridients.append(...newIngredients)