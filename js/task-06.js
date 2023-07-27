
const input = document.querySelector('#validation-input')
console.log(input)
console.log(input.dataset.length)
input.addEventListener('blur', checkSymbolsQuantity)

function checkSymbolsQuantity(event){ 
    const length = event.currentTarget.textLength
    console.log(length);
     
    if (length === Number(input.dataset.length)) {
        input.classList.remove('invalid')
        return input.classList.add('valid'); 
    }
            else
        return input.classList.add('invalid'); 
}