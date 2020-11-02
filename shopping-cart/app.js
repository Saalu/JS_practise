

const cart = document.querySelector('.cart-icon')
const cartDrop = document.querySelector('.cart-drop')
const shoppingCart =document.querySelector('#cart-content tbody')

eventListeners()
function eventListeners(){
    document.addEventListener('click', dropCart)
    document.addEventListener('click', buyCourse)
    shoppingCart.addEventListener('click', removeCourse)
}

// ======== Functions =========

function buyCourse(e){
    e.preventDefault()
console.log('course Added')
    if(e.target.classList.contains('add-to-cart')){
        const course = e.target.parentElement.parentElement
        getCourse(course)
    }

}

function getCourse(course){

    const courseInfo = {
        image:course.querySelector('img').src ,
        title:course.querySelector('h4').textContent ,
        price: course.querySelector('.price span').textContent,
        id:course.querySelector('a').getAttribute('data-id') ,
    }

    console.log(courseInfo)

    addIntoCart(courseInfo)
}


function addIntoCart(course){

    const row = document.createElement('tr')

    console.log(course.image)
    console.log(course.price)
    row.innerHTML =`
        <tr>
            <td>
                <img src="${course.image}" width=100>
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
             <a href="#" class="remove" data-id="${course.id}>X</a> 
         </td>
        </tr>
    `;


    shoppingCart.appendChild(row)
}

function removeCourse(e){

}









function dropCart(e){

    if(e.target.classList.contains('cart-icon')){
        cartDrop.classList.toggle('active')
    }else{
        // cartDrop.classList.remove('active')

    }

}