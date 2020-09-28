
document.getElementById('btn1').addEventListener('click', loadTxt);
 document.getElementById('btn2').addEventListener('click', loadJSON);
document.getElementById('btn3').addEventListener('click', loadREST);


function loadTxt(){
    fetch('data.txt')
    .then(function(res){
    return res.text();
    })
    .then(function(data){
      document.getElementById('result').innerHTML = data;
    })
}

// ======= Response from JSON ========
function loadJSON(){
    fetch('public/employee.json')
    .then(function(res){
        return res.json();
    })

    .then(function(data){
        let html = '';
            html =`<h2>Profiles of the Ishaak's</h2>`
        data.forEach(function(emp){
            html += `
            <li>Name: ${emp.name}</li>
            <li>company:${emp.company}</li>
            <li>Job:${emp.job}</li>
            `
        })

        document.getElementById('result').innerHTML = html;

    })
}


// ========= Response from REST API ========

function loadREST(){
    fetch('https://picsum.photos/list')
    .then(function(res){
        return res.json();
    })
    .then(function(images){
        let html = '';
        
        // images.forEach(function(image){
        //     console.log(image.author)

        // })

        for(i = 0 ; i < 11; i++){
            // console.log(images[i].author)
            const image = images[i];

            console.log(image)
            html +=`
              <p>
              <h3>${image.author}</h3>
                <a target="_blank" href="${image.post_url}">
                View Image</a>

              </p>

            `;
        }

        document.getElementById('result').innerHTML = html;

    })
}