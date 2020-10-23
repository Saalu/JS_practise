

const cart = document.querySelector('.cart-icon')
const cartDrop = document.querySelector('.cart-drop')

eventListeners()
function eventListeners(){
    document.addEventListener('click', dropCart)
}


function dropCart(e){

    if(e.target.classList.contains('cart-icon')){
        cartDrop.classList.toggle('active')
    }else{
        // cartDrop.classList.remove('active')

    }

}