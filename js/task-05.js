
const nameInput = document.querySelector('#name-input')
const nameText = document.querySelector('#name-output')
;
nameInput.addEventListener('input', inputNameHandler)
function inputNameHandler(event) {
    if (!nameInput.value) {
      return nameText.textContent = `Anonymous`  
    }
    const newText = nameInput.value;
    nameText.textContent = newText;
}