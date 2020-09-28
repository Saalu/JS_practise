document.getElementById('btn1').addEventListener('click', loadEmployee);

function loadEmployee(){

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'employee.json' , true);

    xhr.onload = function(){

  const emp = JSON.parse(this.responseText) ;

        const output=`
            <ul>
            <li>ID: ${emp.id}</li>
            <li>Name: ${emp.name}</li>
            <li>Company: ${emp.company}</li>
            <li>Job: ${emp.job}</li>
            </ul>
        `;
        document.getElementById('employee').innerHTML = output
    }

    xhr.send()
}