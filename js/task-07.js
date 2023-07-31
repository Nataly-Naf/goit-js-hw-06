const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')
inputEl.addEventListener('input', onChangeFont)
textEl.style.fontSize = inputEl.value + 'px';
console.log(inputEl.value)
console.log (textEl.textContent)
function onChangeFont(event) {    
    const scrollFontSize = event.currentTarget.value; 
   textEl.style.fontSize = scrollFontSize + 'px';      
}