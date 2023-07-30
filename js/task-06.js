
const input = document.querySelector('#validation-input')
console.log(input)
const rightLength = input.dataset.length;
console.log(rightLength)
input.addEventListener('blur', checkSymbolsQuantity)

function checkSymbolsQuantity(event){ 
    const length = event.currentTarget.textLength
    console.log(length);
     
    if (length === Number(rightLength)) {
        input.classList.remove('invalid')
        input.classList.add('valid'); 
    }
            else
        input.classList.add('invalid'); 
}