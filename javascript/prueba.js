console.log("Hola mundo")

//var, variable global
var saludo = 'Hola loco'


if (saludo) {
    saludo = "HOLA DENTRO IF"
    console.log(saludo)
}
console.log(saludo)

//let, variable limitada a alcance deñ bloque donde se defina
let nombre = "Hola loco let"
console.log(nombre)
if (nombre) {
    let nombre = 'HOLA LET DENTRO IF'
    console.log(nombre)
}

//const, variables inmutables

/*Tipos de variables*/
var nombreString = "Sergio"
var miNumero = 1552
const PI = 3.14
var verdadero = true
var falso = false
var nulo = null
var indefinido = undefined

console.log(typeof verdadero)

/*String*/
var nombreString = "Sergio"
var miNumero = 1552
console.log("Mi nombre es:  " + nombreString + miNumero)

console.log(`Mi nombre es: ${nombreString}${miNumero}`)

console.log(nombreString.toUpperCase()) //mayuscula
console.log(nombreString.toLowerCase()) //minuscula
console.log(nombreString.length) //nº caracteres 

/*Funciones*/
function miSuma(a, b) {
    return a + b
}

var miResta = function (a, b) {
    return a - b
}

console.log(miResta(1, 1))
console.log(miSuma(1, 1))

/*Funciones Arrow*/
var acceso = true

var accesoU = a => a

accesoU(acceso) == true
    ? console.log("Usuario permitido")
    : console.log("Usuario denegado")

//--------
var accesoUsu = (a, pers) => console.log(`Usuario ${pers}, Acceso ${a}`)
accesoUsu(acceso, "Sergio")

/*Objetos */
var miObjeto = {
    //clave : valor
    nombre: "Sergio",
    edad: 24,
    importante: true,
    texto: `Usuario ${nombreString}`,
    miFuncionIn: (a, b) => a + b,
    otroObjeto: {
        nombre: "Jose",
        sexo: "Hombre"
    },
    fecha: new Date()
}

console.log(miObjeto.nombre + miObjeto.edad)
console.log(miObjeto.fecha.getDay)

/*Arrays */
var permitido = "Permitido"
var miFuncion = acceso => acceso

var miArray = ["Sergio", 2020, 34.9, true, ["Otro array", 7900], miFuncion(permitido)]

console.log(miArray[4][0] + " " + miArray[5])

/*Combi completa: Objetos y Arrays */
var persona = {
    nombre: "Sergio",
    miAutomovil: [
        pintura = {
            marca: "Marca",
            precio: 2000
        },
        vendedor = {
            nombre: "Jose",
            ayudante: {
                nombre: "Alex"
            }
        }
    ]
}

console.log(persona.miAutomovil[1].ayudante.nombre)

/*Json*/
var miObjetoJson = {
    nombre: "Sergio"
}

console.log(JSON.stringify(miObjetoJson))

/*If y else*/
var variable = true

if (variable) {
    console.log("True")
} else {
    console.log("Falso")
}

var edad = 18
if (edad >= 18 && edad <= 30) {
    console.log("Joven adulto")
} else if (edad < 18) {
    console.log("Niño o adolescente")
} else {
    console.log("Indefinido")
}

/*Switch */

var opcion = 1

switch (opcion) {
    case 1:
        console.log("Menu de usuario")
        break;
    case 2:
        console.log("Menu de tontin")
        break;

    default:
        console.log("Break")
        break;
}

/*For / Foreach*/
for (i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log("Hola " + i + " vez")
    } else {
        console.log("Hola " + i + " veces")
    }
}

var miArrayFor = ["Hola", 2021, "Adios"]
for (let index = 0; index < miArrayFor.length; index++) {
    const element = miArrayFor[index]
    console.log(element)
}

miArrayFor.forEach((element, i) => { console.log(element), console.log(i) })

/*Map y reduce*/
pelicula1 = { titulo: "Holita", anio: 2020, valoracion: 5 }
pelicula2 = { titulo: "Adiosito", anio: 2020, valoracion: 3 }

peliculas = [pelicula1, pelicula2]

let sumarVal = ({ valoracion }) => valoracion >= 5 ? valoracion += 1 : valoracion += 0

let valorado = peliculas.map(sumarVal)
console.log(valorado)


//---------------

let reducirValoracion = (acum, {valoracion})=>acum+valoracion

let total=peliculas.reduce(reducirValoracion,0)

console.log(total)


