const value = document.querySelector('.value')
const btnDecrement = document.querySelector('.btn-decr')
const btnIncrement = document.querySelector('.btn-incr')

let counterValue = 0;
console.log(value.innerHTML)

function updateCounterFoo(counterValue) { return value.innerHTML = counterValue}

btnDecrement.addEventListener('click', decrBtnClickHandler);
btnIncrement.addEventListener('click', incrBtnClickHandler);

function decrBtnClickHandler(event) { counterValue -= 1; console.log(counterValue); return updateCounterFoo(counterValue)}
function incrBtnClickHandler(event) {counterValue += 1; console.log(counterValue);  return updateCounterFoo(counterValue)}