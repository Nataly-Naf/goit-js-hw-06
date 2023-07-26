function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('#boxes')
const inputEl = document.querySelector('input')
console.dir (inputEl)


const amount = inputEl.valueAsNumber;
console.log(amount)
function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    if (Number(inputEl.value) >= 1 && Number(inputEl.value) <= 100) {
     
          const divEl = document.createElement('div')
      divEl.style.width = "30px";
      divEl.style.height = "30px";
      divEl.style.backgroundColor = getRandomHexColor();
      boxes.append(divEl)
    }
  }
}
createBtn.addEventListener('submit', createBoxes(amount))
destroyBtn.addEventListener('submit', cleanBoxes())
function cleanBoxes() {
  boxes.innerHTML=" "
}
