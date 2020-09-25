// document.getElementById('btn').addEventListener('click', loadPosts);
document.addEventListener('DOMContentLoaded', function(){
    const xhr = new XMLHttpRequest();

    let =url =' https://covid.mathdro.id/api/'

    xhr.open('GET', url+'countries', true);

    xhr.onload = function(){
        if(this.status === 200){
        const res = JSON.parse(this.responseText);

        console.log(res)
      
        const countries = res.countries

        let output = '';

        countries.forEach(post =>{

            console.log('Country:', post)
            output +=`
           <option value=${post.name}>${post.name}</option>
            `;
        });

        document.getElementById('select').innerHTML = output


      }

    }
    xhr.send()
})



document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault()

    const countryVal = document.getElementById('select').value,
    casesVal = document.getElementById('cases').value


    console.log(countryVal, casesVal)
})



// function loadPosts(){

//     const xhr = new XMLHttpRequest();

//     const API ='';
//     const key ='ea131d061d228469df6ac93db8071ab5';
//     let =url =' https://covid.mathdro.id/api/'

//     xhr.open('GET', url+'countries', true);

//     xhr.onload = function(){
//         if(this.status === 200){
//         const res = JSON.parse(this.responseText);

//         console.log(res)
      
//         const countries = res.countries

//         let output = '';

//         countries.forEach(post =>{

//             console.log('Country:', post)
//             output +=`
//            <option value="">${post.name}</option>
//             `;
//         });

//         document.getElementById('select').innerHTML = output


//       }

//     }
//     xhr.send()

// }