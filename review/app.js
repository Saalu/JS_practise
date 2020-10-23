
const result = document.querySelector('.result')
const saveBtn = document.getElementById('btn')
const input = document.getElementById('input')
const form = document.getElementById('form')


eventListeners()
function eventListeners(){
    form.addEventListener('submit', onSubmit);
    document.addEventListener('click', removeItem)
    document.addEventListener('DOMContentLoaded', onPageLoad)

}
// UI Template
function frontEnd(input){
    const p = document.createElement('p')
    const span = document.createElement('span')
    span.textContent = 'X'
    span.classList.add('remove')
    p.textContent = input

    p.appendChild(span)
    result.appendChild(p)
}

function onSubmit(e){
e.preventDefault()
    inputVal = input.value;

    // console.log(inputVal)

    frontEnd(inputVal)
    addToStorage(inputVal)

    this.reset()
}

function onPageLoad(){
    let storeItems = getFromStorage()

    console.log('onLoad:', storeItems)

    storeItems.forEach(item =>{
        frontEnd(item)
    })

}

function removeItem(e){
    
    if(e.target.classList.contains('remove')){
      e.target.parentElement.remove()
    }
   
    deleteFromStorage(e.target.parentElement.textContent)
}

/*==== Local Storage ====  */
function addToStorage(input){
    let storeItems = getFromStorage()
    
    storeItems.push(input)
    
    localStorage.setItem('items', JSON.stringify(storeItems))
}

function getFromStorage(){
    let items;
    const storeItems = localStorage.getItem('items')

    if(storeItems === null){
        items = [];

    }else{
        items = JSON.parse( storeItems)
    }
    return items
}


function deleteFromStorage(item){
    let storeItems = getFromStorage()
    const removeX = item.substring(0, item.length -1)
    
    storeItems.forEach((item, index) =>{
        if(removeX === item ){
            console.log('Yes')
            storeItems.splice(index, 1)
        }
    });

    localStorage.setItem('items', JSON.stringify(storeItems))
    console.log(storeItems)

}