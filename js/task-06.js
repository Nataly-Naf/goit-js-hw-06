
const input = document.querySelector('#validation-input')
console.log(input.dataset.length)
const rightLength = Number(input.dataset.length);
console.log(rightLength)
input.addEventListener('blur', checkSymbolsQuantity)

function checkSymbolsQuantity(event){ 
    const length = event.currentTarget.value.length;
    console.dir(event.currentTarget.value.length);
     console.log (length===rightLength)
    if (length === rightLength)
    {
        input.classList.remove('invalid');
        return input.classList.add('valid');         
        
    }
    else
        input.classList.add('invalid'); 
    input.classList.remove('valid')
}