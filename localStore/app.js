const form = document.getElementById('form')
const input = document.getElementById('input')
const submitBtn = document.getElementById('btn')
const result = document.querySelector('.result')


eventListeners()
function eventListeners(){

   form.addEventListener('submit', onSubmit )
   document.addEventListener('click', removeItem)
   document.addEventListener('DOMContentLoaded', onPageLoad)

}

function elementTemplate(input){
    const p = document.createElement('p');
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-item'
    p.classList = 'item'
    p.textContent = input
    removeBtn.textContent = 'X';
    p.appendChild(removeBtn)
    result.appendChild(p)
}

function onSubmit(e){
    e.preventDefault();

    inputValue = input.value;

    elementTemplate(inputValue)

    addToStorage(inputValue)
    this.reset()
}

function removeItem(e){
    target = e.target

    if(target.classList.contains('remove-item')){
        target.parentElement.remove()
    }

    deletFromStorage(target.parentElement.textContent)
}

/*=========== Local Storage  ============*/

function onPageLoad(){
    let storeItems = getFromStorage()

    console.log('OnLoad',storeItems)

    storeItems.forEach(item =>{
        elementTemplate(item)
    })
}


function addToStorage(input){
    let storeItems = getFromStorage()

    storeItems.push(input)
    console.log('Added', storeItems)

    localStorage.setItem('items', JSON.stringify(storeItems))

}

function getFromStorage(){
    let items;
    const storeItems = localStorage.getItem('items')

    if(storeItems === null){
        items = []
    }else{
        items = JSON.parse(storeItems)
    }

    return items
}


function deletFromStorage(item){
    let storeItems = getFromStorage()

    console.log('BeforeX:', item)
    const delItem = item.substring(0, item.length -1)

    storeItems.forEach((item, index) =>{
        if(delItem === item){
            storeItems.splice(index, 1)
        }
    })
    

    localStorage.setItem('items', JSON.stringify(storeItems))
}
