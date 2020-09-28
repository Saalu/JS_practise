
const cities = ['Accra', 'Kumasi', 'Tamale', 'Yendi', 'Salaga'];

// Inline callback(it doesn't have a name)

// cities.forEach(function (city){

//     console.log(city)
// })

// function callback(city){
//     console.log(city)

// }
// cities.forEach(callback);

//Display the countries after 1sec
function displayCountries(){
    setTimeout(function(){
        let html = '';
        cities.forEach(function(city){
            html += `<li>${city}</li> `
        })
        document.body.innerHTML = html;
    }, 3000);
}

displayCountries()