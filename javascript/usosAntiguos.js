/*Metodo para cargar datos con una tabla
function loadTable() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8080/api/find/getTodos");
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       // console.log(this.responseText);
        var trHTML = ''; 
        const objects = JSON.parse(this.responseText);
        for (let object of objects) {
          trHTML += '<tr>'; 
          trHTML += '<td>'+object['id_persona']+'</td>';
          trHTML += '<td>'+object['user']+'</td>';
          trHTML += '<td>'+object['password']+'</td>';
          trHTML += '<td>'+object['surname']+'</td>';
          trHTML += '<td>'+object['company_email']+'</td>';
          trHTML += '<td>'+object['personal_email']+'</td>';
          trHTML += '<td>'+object['city']+'</td>';
          trHTML += '<td>'+object['active']+'</td>';
          trHTML += '<td>'+object['create_date']+'</td>';
          trHTML += '<td>'+object['termination_date']+'</td>';
          trHTML += '<td>'+object['imagen_url']+'</td>';

          trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox('+object['id_persona']+')">Edit</button>';
          trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete('+object['id_persona']+')">Del</button></td>';
          trHTML += "</tr>";
        }
        document.getElementById("mytable").innerHTML = trHTML;
      }
    };
  }
  
  loadTable();*/

/* IMPRIMIR EN FORMULARIO Y DEBAJO
 function loadPersona(){


    var elementos = ''; 
    fetch('http://localhost:8080/api/find/getTodos')
    .then(response=>response.json())
    .then(personas =>{
        elementos += '<p>'+personas[0].id_persona+'</p>';
        document.getElementById("id_persona").insertAdjacentHTML('beforeend', personas[0].id_persona)
        elementos += '<p>'+personas[0].user+'</p>';
        loadValue("user",personas[0].user)
        elementos += '<p>'+personas[0].password+'</p>';
        loadValue("password",personas[0].password)
        elementos += '<p>'+personas[0].surname+'</p>';
        loadValue("surname",personas[0].surname)
        elementos += '<p>'+personas[0].company_email+'</p>';
        loadValue("company_email",personas[0].company_email)
        elementos += '<p>'+personas[0].personal_email+'</p>';
        loadValue("personal_email",personas[0].personal_email)
        elementos += '<p>'+personas[0].city+'</p>';
        loadValue("city",personas[0].city)
        elementos += '<p>'+personas[0].active+'</p>';
        loadValue("active",personas[0].active)
        elementos += '<p>'+personas[0].create_date+'</p>';
        loadValue("create_date",personas[0].create_date)
        elementos += '<p>'+personas[0].imagen_url+'</p>';
        loadValue("imagen_url",personas[0].imagen_url)
        document.getElementById("mypersona").innerHTML = elementos;
    })
    
    console.log(elementos+"---------")
 }

 loadPersona()

*/