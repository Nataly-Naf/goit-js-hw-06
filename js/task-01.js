const listItem = document.querySelectorAll('li.item');
const numberOfCateg = listItem.length;
console.log(`Number of categories: ${numberOfCateg}`)

const itemTitleList = document.querySelectorAll('h2')
itemTitleList.forEach(function (item) {
    console.log(`Category: ${item.innerText}`)
  console.log (`Elements: ${item.nextElementSibling.childElementCount}`)
})


