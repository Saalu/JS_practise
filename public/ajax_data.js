document.getElementById('btn1').addEventListener('click', loadData);


function loadData(){

    // create XMLRequest Object
    const xhr = new XMLHttpRequest();

    //Open the connection
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }

    }
    xhr.send()


}