const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')
inputEl.addEventListener('input', onChangeFont)
textEl.style.fontSize = inputEl.value;
console.log (inputEl.value)
function onChangeFont(event) {    
    const scrollFontSize = event.currentTarget.value; 
   textEl.style.fontSize = scrollFontSize + 'px';      
}