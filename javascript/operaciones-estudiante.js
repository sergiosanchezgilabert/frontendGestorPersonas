function loadValue(a, elemento) {
    document.getElementById(a).value = elemento
}

let arrayPersonas = []

function loadPersona() { //loadForm

    var elementos = '';
    fetch('http://localhost:8080/api/find/getTodos')
        .then(response => response.json())
        .then(personas => {
            arrayPersonas = personas
            const user = personas[0].user
            document.getElementById("id_persona").insertAdjacentHTML('beforeend', personas[0].id_persona)
            loadValue("user", personas[0].user)
            loadValue("password", personas[0].password)
            loadValue("surname", personas[0].surname)
            loadValue("company_email", personas[0].company_email)
            loadValue("personal_email", personas[0].personal_email)
            loadValue("city", personas[0].city)
            loadValue("active", personas[0].active)
            loadValue("create_date", personas[0].create_date)
            loadValue("imagen_url", personas[0].imagen_url)
        })
}

loadPersona()

/* MOSTRAR PERSONAS EN UN CONTENEDOR UNICO QUE VA CONCATENANDO LAS LINEAS
function mostrarPersonas(){
    var total=""
    for (let index = 0; index < arrayPersonas.length; index++) {
        //mostrarPersonas(personas[index])
        console.log(arrayPersonas[index])

        total+='<div class="persona">'
        total+='<p>Id :' + arrayPersonas[index].id_persona + '</p>'
        total+=' <p>User: ' + arrayPersonas[index].user + '</p>'
        total+=' <p>Password: ' + arrayPersonas[index].password + '</p>'
        total+=' <p>Surname: ' + arrayPersonas[index].surname + '</p>'
        total+=' <p>City: ' + arrayPersonas[index].city + '</p>'
        total+='</div>'
    }
    document.getElementById("personas").innerHTML = total;

    ///document.getElementById("personas").innerHTML = '<h4>Persona ' + elemento.id_persona + '</h4>';
}*/

function mostrarPersonas() {
    var total = ""
    //createelment******************************
    for (let index = 0; index < arrayPersonas.length; index++) {

        var cabecera = document.getElementById('personas');

        var html = document.createElement('div')
        html.classList.add('persona')
        var nuevoParrafo = document.createElement('p');
        var p1 = document.createElement('p')
        var p2 = document.createElement('p')
        var p3 = document.createElement('p')
        var p4 = document.createElement('p')
        var p5 = document.createElement('p')
        var textoParrafo = document.createTextNode("ID: " + arrayPersonas[index].id_persona);
        p1.appendChild(textoParrafo)

        textoParrafo = document.createTextNode("User: " + arrayPersonas[index].user)
        p2.appendChild(textoParrafo)

        textoParrafo = document.createTextNode("Password: " + arrayPersonas[index].password)
        p3.appendChild(textoParrafo)

        textoParrafo = document.createTextNode("Surname: " + arrayPersonas[index].surname)
        p4.appendChild(textoParrafo)

        textoParrafo = document.createTextNode("Ciudad: " + arrayPersonas[index].city)
        p5.appendChild(textoParrafo)

        //Creo el nodo del boton de eliminar una persona
        var nuevoBotonDanger = document.createElement('button')
        nuevoBotonDanger.classList.add('boton-danger')
        nuevoBotonDanger.setAttribute("id","borrarPersona")
       // var id = arrayPersonas[index].id_persona
        //nuevoBotonDanger.addEventListener("click",deletePersonaLista(id)) //le añado funcion para que el boton tenga funcionabilidad

        //Creo el nodo del texto del boton de eliminar una persona
        var textoBotonDanger = document.createTextNode("Eliminar")
        nuevoBotonDanger.appendChild(textoBotonDanger)

        html.appendChild(p1)
        html.appendChild(p2)
        html.appendChild(p3)
        html.appendChild(p4)
        html.appendChild(p5)

        html.appendChild(nuevoBotonDanger)

        cabecera.appendChild(html)
    }
    cabecera.parentNode.insertAfter(html, cabecera)
}

mostrarPersonas()

function deletePersonaLista(id) {
    var url = 'http://localhost:8080/api/eliminator/' + id

    fetch(url, {
        method: 'DELETE',
    })
        .then(res => res.text())
        .then(res => console.log(res))
}

function updatePer() {
    var url = 'http://localhost:8080/api/actualizarPersona/1';
    var unico = {
        user: document.getElementById("user").value,
        password: document.getElementById("password").value,
        surname: document.getElementById("surname").value,
        company_email: document.getElementById("company_email").value,
        personal_email: document.getElementById("personal_email").value,
        city: document.getElementById("city").value,
        active: document.getElementById("active").value,
        create_date: document.getElementById("create_date").value,
        imagen_url: document.getElementById("imagen_url").value
    }

    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(unico),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}

function deletePer() {
    var url = 'http://localhost:8080/api/eliminator/1'

    fetch(url, {
        method: 'DELETE',
    })
        .then(res => res.text())
        .then(res => console.log(res))
}

function getNombre() {
    console.log(document.getElementById("user").value + "  laksjd")
    document.getElementById("welcome").innerHTML = '<h1>Welcome ' + document.getElementById("user").value + '</h1>';
}

getNombre()