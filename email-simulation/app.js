const form =document.getElementById('form')
const email =document.getElementById('email')
const subject =document.getElementById('sub')
const message =document.getElementById('msg')
const sendBtn =document.getElementById('send')


eventListeners()
function eventListeners(){
    document.addEventListener('DOMContentLoaded', appInit);

    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
}

// On page load
function appInit(){

   const disabledBtn =  sendBtn.disabled = true;
    
    if(disabledBtn == true){
        sendBtn.classList.add('disabled')

    }
}

// Validate form INPUT
function validateField(){
    let errors;

    validateField(this)
}


function validateLength(field){

    if(field.value.length > 0){
        field.style.borderColor = 'green';
        field.classList.remove('error')
    }else{
        field.style.borderColor= 'red';
        field.classList.add('error')
    }

}