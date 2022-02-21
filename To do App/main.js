const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')
let itemsArray = localStorage.getItem('items')
? JSON.parse(localStorage.getItem('items'))
: []
/*let clearArray = locatStorage.removeItem('items')
? JSON.parse(localStorage.getItem('items'))
: []*/

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = (text) => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}

form.addEventListener('submit', function (e) {
  e.preventDefault()

  itemsArray.push(input.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  liMaker(input.value)
  input.value = ''
})

data.forEach((item) => {
  liMaker(item)
})

const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    ul.removeChild(ul.firstChild)
})

function editBtn(button){
  const liEdit = document.getElementById("list");
  if (liEdit.contentEditable == "true"){
    liEdit.contentEditable = "false";
    button.innerHTML = " Enable Edit";
  } else {
    liEdit.contentEditable = "true";
    button.innerHTML = "Disable EDit"
  }
}
