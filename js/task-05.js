
const nameInput = document.querySelector('#name-input')
const nameText = document.querySelector('#name-output')
nameText.textContent = `Anonymous`;
nameInput.addEventListener('input', inputNameHandler)
function inputNameHandler(event) {return nameText.innerHTML=event.currentTarget.value}