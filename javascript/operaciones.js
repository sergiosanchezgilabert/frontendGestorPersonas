function validarDatos(persona) {
    if (persona.user == null || persona.user == "") return false;
    if (persona.password == null || persona.password == "") return false;
    if (persona.surname == null || persona.surname == "") return false;
    if (persona.active == null || persona.active == "") return false;
    if (persona.city == null || persona.city == "") return false;
    if (persona.personal_email == null || persona.personal_email == "") return false;
    if (persona.company_email == null || persona.company_email == "") return false;
    return true

}

/********************************************************************* CARGAR PERSONAS Y MOSTRARLAS EN EL FORMULARIO ******************************************************************************************/

function loadValue(a, elemento) {
    document.getElementById(a).value = elemento
    if (a == "active") document.getElementById(a).checked = elemento
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
            loadValue("termination_date", personas[0].termination_date)
        })
}

loadPersona()

/* FINAL */

/********************************************************************************************** CARGAR LISTA DE PERSONAS **************************************************************************************************/

function mostrarPersonas() {

    var cabecera = document.getElementById('personas');

    var divi

    var hayPersonas = false

    for (let index = 0; index < arrayPersonas.length; index++) {

        hayPersonas = true

        divi = document.createElement('div')
        divi.classList.add('persona')
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
        nuevoBotonDanger.setAttribute("id", "borrarPersona")

        //Creo el nodo del texto del boton de eliminar una persona
        var textoBotonDanger = document.createTextNode("Eliminar")
        nuevoBotonDanger.appendChild(textoBotonDanger)

        divi.appendChild(p1)
        divi.appendChild(p2)
        divi.appendChild(p3)
        divi.appendChild(p4)
        divi.appendChild(p5)

        divi.appendChild(nuevoBotonDanger)

        cabecera.appendChild(divi)
    }

    //Carga la imagen de abajo
    mostrarImagen(hayPersonas)
    cabecera.insertAfter(html, cabecera)


}


function mostrarImagen(hayPersonas) {
    var cabeceraa = document.getElementById('imagen_yes')

    var total = ""
    if (hayPersonas) {
        cabeceraa.innerHTML = total + '<img src="https://media.giphy.com/media/3ornkdtVzQfIRpwfug/giphy.gif" >'
    } else {
       
        total+='<h2>No hay personas cargadas</h2>'
        cabeceraa.innerHTML = total + '<img src="https://media.giphy.com/media/7SF5scGB2AFrgsXP63/giphy.gif" >'
    }
}

/* FINAL */

/* ******************************************************************************************LIMPIAR DATOS FORMULARIO **************************************************************************************************/

function limpiar() {
    document.getElementById("id_persona").insertAdjacentHTML('beforeend', "")
    loadValue("user", "")
    loadValue("password", "")
    loadValue("surname", "")
    loadValue("company_email", "")
    loadValue("personal_email", "")
    loadValue("city", "")
    loadValue("active", "")
    loadValue("create_date", "")
    loadValue("imagen_url", "")
    loadValue("termination_date", "")
}

/* FINAL */

/* ******************************************************************************************* INSERTAR PERSONAS *********************************************************************************************************/

function insertarPersona() {
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
    if (validarDatos(unico)) {
        var url = 'http://localhost:8080/api/aniadirPersona/';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(unico),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

    setTimeout(() => {
        location.reload();
    }, 1500);
}

/* FINAL */


/************************************************************************************************** ACTUALIZAR PERSONAS **********************************************************************************/

function updatePer() {
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
    if (validarDatos(unico)) {
        var url = 'http://localhost:8080/api/actualizarPersona/1';

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
    setTimeout(() => {
        location.reload();
    }, 1500);
}

/* FINAL */


/********************************************************************************************* DELETE PERSONAS *************************************************************************/

function deletePer() {
    var url = 'http://localhost:8080/api/eliminator/1'

    fetch(url, {
        method: 'DELETE',
    })
        .then(res => res.text())
        .then(res => console.log(res))

    setTimeout(() => {
        location.reload();
    }, 1500);
}

/* FINAL */




//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// EXTRA
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