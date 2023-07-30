// Напиши скрипт, який змінює кольори фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color 
// і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector('.change-color')
console.log(changeColorBtn)
const changedColorText = document.querySelector('.color')

changeColorBtn.addEventListener('click', changeColorHandler)

function changeColorHandler(event) {
  const randomColor = getRandomHexColor()
  document.body.style.backgroundColor = randomColor;
  return changedColorText.textContent = randomColor;
}