window.onload = init;
var headers = {};
var url = "http://localhost:3000";



function init(){
if(localStorage.getItem("token")){
    
    headers = {
        headers: {
        'Authorization': "bearer " + localStorage.getItem("token")
        }
    }
    loadEmpleado();

}
else{
    window.location.href = "index.html";
  }

}

function loadEmpleado() {
    axios.get(url + "/empleados", headers)
    .then(function(res) {
        console.log(res);
        displayEmpleado(res.data.message);

    }).catch(function(err) {
        console.log(err);
    
    })
}

function displayEmpleado(empleado) {
    var body = document.querySelector("body");
    for( var i = 0; i < empleado.length; i++) {
        if (i % 2 == 0){
        body.innerHTML += `<p class="f1"><span class="sname">${empleado[i].emp_name} ${empleado[i].emp_last_name}</span><span class="sid">${empleado[i].emp_id}</span><span class="sphone">${empleado[i].emp_phone}</span><span class="semail">${empleado[i].emp_email}</span><span class="sdirection">${empleado[i].emp_direction}</span></p>`;
        }else{
        body.innerHTML += `<p class="f1"><span class="spname">${empleado[i].emp_name} ${empleado[i].emp_last_name}</span><span class="spid">${empleado[i].emp_id}</span><span class="spphone">${empleado[i].emp_phone}</span><span class="spemail">${empleado[i].emp_email}</span><span class="spdirection">${empleado[i].emp_direction}</span></p>`;
        }
    }
    
}
