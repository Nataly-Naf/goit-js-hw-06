const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')
inputEl.addEventListener('input', onChangeFont)

function onChangeFont(event) {    
    const scrollFontSize = event.currentTarget.value; 
   textEl.style.fontSize = scrollFontSize + 'px';      
}