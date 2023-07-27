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
const divArr = [];
function onCreateBtnClick() {
  const amount = inputEl.valueAsNumber;
  console.log(amount)
  for (let i = 1; i <= amount; i += 1) {
    if (amount >= 1 && amount <= 100) {
      const divEl = document.createElement('div')
      console.log(divEl)
          divEl.style.width = "30px";
      divEl.style.height = "30px";
      divEl.style.backgroundColor = getRandomHexColor();
      divArr.push(divEl);
      console.log(divArr)
          
    }
    
  }
  return boxes.append(...divArr)
  
}

createBtn.addEventListener('click', onCreateBtnClick)
destroyBtn.addEventListener('click', onDestroyBtnClick)
function onDestroyBtnClick() {
  return boxes.innerHTML=" "
}
