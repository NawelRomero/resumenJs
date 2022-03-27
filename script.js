//comenraio una linea

/*
comentario multi-linea

*/
var nombre = "Francisco"
var edad = 40

console.log(nombre)

nombre = 20

console.log(nombre)

nombre = 10

console.log(nombre)

edad = "francisco"

console.log(edad)




const IVA = 1.21
const IMPUESTOS_PAIS = 1.30
const RETENCION_GANANCIAS = 1.35
let dolar = 109

let dolarSolidario = dolar * IMPUESTOS_PAIS * RETENCION_GANANCIAS
console.log(dolarSolidario)

let numero1 = Number(prompt("Ingrese un numero"))
let numero2 = Number(prompt("Ingrese otro numero"))
console.log(numero1 * numero2)
console.log("fran" + "pugh")

let numero1 = parseFloat(prompt("ingrese un numero"))
let numero1 = parseInt(prompt("ingrese un numero"))

alert(numero1)
alert(numero2)



/*CLASE 2*/





let numero = 2
// si - condicion
if (numero == 2) {
    //codigo a ejecutar
    console.log("numero es igual a 2")
} else {
    console.log("Numero no es igual a 2")
}

/*Pero si let numero = 3 la condicion es falsa por ende el if no se ejecuta */

if (NaN) {
    console.log("NaN") /*es falso*/
}


let numero = 2;
let numero = parseInt(prompt("Ingrese un numero para saber si es par o impar"))

if (numeron % 2 == 0) { // 5 / 2 = 2.5  5 % 2 = 1
    console.log("El numero es par")
} else {
    console.log("El numero es impar")

}

// un if medio loco

if (numero % 2) {
    console.log("El numero es par")
} else {
    console.log("El numero es impar")
}


// condiciones anidadas if... else if

let presupuesto = parseInt(prompt("Ingrese un presupuesto"))
//> < >= <=
if (presupuesto >= 0) {
    console.log("Presupuesto mayor a cero")
} else if (presupuesto >= -1000) {
    console.log("Presupuesto aceptable")
} else {
    console.log("Te fuiste del presupuesto")
}


let presupuesto = parseInt(prompt("Ingrese un presupuesto"))

let noHayDeudas = (deudas >= 0)
let hayDeudasMenores = (deudas >= -1000)

if (noHayDeudas) {
    console.log("no tengo deudas")
} else if (hayDeudasMenores) {
    console.log("deudas aceptables")
} else {
    console.log("Te fuiste de deudas")
} //es mas limpio el codigo pero no es lo mas normal, mejor poner las variables en el if.



let numero1 = 5
let numero2 = "5"

// == Analizo valores != (distinto valor)
// === (estrictamente igual) Analizo valores y tipos !== (estrictamente distintos valor y tipo)
if (numero1 == numero2) {
    console.log("V")
} else {
    console.log("F")
} // == Es verdadero pero pq Js toma como que tienen el mismo valor, solo se diferencian en el tipo, string y nuero.
// === daria falso pq son distintos tipos.


//

let numero1 = 10
let numero2 = 20

if (numero1 == 10 && numero2 == 20) {
    console.log("V")
} else {
    console.log("F")
}

/*
   numero1    &&     numero2
      V        V        V
      v        F        F
      F        F        V
      F        F        F
*/


//

if (numero1 == 10 || numero2 == 20) {
    console.log("V")
} else {
    console.log("F")
}


/*
   numero1     ||   numero2  (operador O)
      V        V        V
      v        V        F
      F        V        V
      F        F        F
*/


//


/* 
  !  expresion
  F     V
  V     F

*/

let numero = parseFloat(prompt("Ingrese un numero"))
//isNan(numeroX) retorna verdadero si numeroX es NaN, retorna falso si no lo es. 

if (!(isNaN(numeroX))) {
    console.log("Numero es valido")
} else {
    console.log("Numeor no valido") //usar la negacion para hacer el resultado mas logico para mi. 
}


//


let nota = parseInt(prompt("Ingrese una nota"))

if (nota >= 1 && nota <= 5) {
    console.log("Estas desaprobado")
} else if (nota === 6 || nota === 7) {
    console.log("Estas aprobado con nota de bien")
} else if (nota === 8 || nota === 9) {
    console.log("Estas aprobado con nota de muy bien")
} else if (nota === 10) {
    console.log("Edtas aprobado con nota Excelente")
} else {
    console.log("Nota no valida")
}

//


//CLASE 3



for (let i = 1; 1 <= 10; i++) { //i = i + 1
    console.log(i)
}
// 


for (let i = 1; 1 <= 10; i++) { //i = i + 1
    if (i == 5) {
        console.log("i es igual a 5")
        break

    }
    console.log(i)
}

//

for (let i = 1; 1 <= 10; i++) { //i = i + 1

    if (i % 2 == 0) {
        continue
    }
    console.log(i)
}


//while   crear ciclo con un condicional. si la sentencia sea verdadera, el ciclo es infinito\

let repetir = true
let acumulador = 0
let contador = 0
while (repetir) { //repetir == true
    let nota = parseInt(prompt("ingrese una nota"))
    acumulador += nota //acumulador = acumulador + nota
    contador++
    let confirma = prompt("Desea ingresar otra nota mas").toLowerCase()
    if (confirma == "no") {
        repetir = false //parecido a break
    }
}

console.log(`El promedio de las notas es ${acumulador / contador}`)


//

//DO..WHILE, a diferencia de while, ejecuto cierto codigo y luego consulto si se vuelve a repetir.
let acumulador = 0
let contador = 0
let confirma

do {
    let nota = parseInt(prompt("ingrese una nota"))
    acumulador += nota
    contador++
    confirma = prompt("Desea ingresar otra nota mas").toLowerCase()
} while (confirma != "no")

console.log(`El promedio de las notas es ${acumulador / contador}`)

/////
///CALCULADORA
let numero1
let numero2
let operador

do {
    numero1 = parseFloat(prompt("ingrese un numero"))
    numero2 = parseFloat(prompt("ingrese otro numero"))
    operador = prompt("ingrese una operacion (+,-,/,*)")
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingrese un numero valido")
    }
} while (isNaN(numero1) || isNaN(numero2))

console.log(numero1 + numero2)

///
///SWITCH

let numero1
let numero2
let operador

do {
    numero1 = parseFloat(prompt("ingrese un numero"))
    numero2 = parseFloat(prompt("ingrese otro numero"))
    operador = prompt("ingrese una operacion (+,-,/,*)")
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingrese un numero valido")
    }
} while (isNaN(numero1) || isNaN(numero2))

switch (operador) {
    case "+":
        alert(numero1 + numero2)
        break
    case "-":
        alert(numero1 - numero2)
        break
    case "/":
        alert(numero1 / numero2)
        break
    case "*":
        alert(numero1 * numero2)
        break
    default:
        alert("Operacion no valida")
        break
}


////

///CLASE 4

// FUNCIONES   DRY(codigo unico y reutilizable), KISS (mantenerlo simple y funcional) y YAGNI(no hagas lo que no te piden)

function saludar() {
    console.log("Hola coders")
}

saludar() ///ejecuta la linea dentro de la funcion. en este caso linea 333 llama a la funcion pero se ejecuta la linea 330.
saludar()
saludar()
saludar()

//numeros como parametros, estos no se pueden definir en la funcion, el de los parametros importa.
let numero1 = parseFloat(prompt("Ingrese un numero")) //50
let numero2 = parseFloat(prompt("Ingrese otro numero")) //60

function suma(numero1, numero2) {
    console.log(numero1 + numero2) //o return numero1 + numero2
}

let sumaNumeros = suma(5, 10)
sumaNumeros = suma(10, 20)
console.log(sumaNumeros)


suma(5, 10)
suma(4, 10)
suma(50, 10)
///

const IVA = 1.21

function calcularIVA(producto) {
    //const IVA = 130 se va a calcular el const local dentro de la funcion
    return producto * IVA
}
console.log(calcularIVA(100))

//

/*function suma(num1, num2){
    return num1 + num2
}

function resta(num1, num2){
    return num1 - num2
}

function multiplicacion(num1, num2){
    return num1 * num2
}

function division(num1, num2){
    return num1 / num2
} */ // esto pasada a funcion anonima quedaria asi(funcion anonima por si sola no tiene sentido implementarla)

const suma = function (num1, num2) {
    return num1 + num2
}
const resta = function (num1, num2) {
    return num1 - num2
}
const multiplicacion = function (num1, num2) {
    return num1 * num2
}
const division = function (num1, num2) {
    return num1 / num2
}

console.log(suma(5, 10)) // lo mismo para las demas con su respectiva funcion

//funcion flecha, siempre con const para que no modifiquen el cod.

const suma = (num1, num2) => num1 + num2
const resta = (num1, num2) => num1 - num2
const multiplicacion = (num1, num2) => num1 * num2
const division = (num1, num2) => num1 / num2

console.log(suma(5, 10)) // lo mismo para las demas con su respectiva funcion, la funcion flecha simplifica el anonima.
// s es de mas de una linea, quedaria const suma = (num1,num2) =>{
//                  return num1 + num2
// }    lo cual no tendria sentido implementar funcion flecha.

////calculadora


function calculadora(numero1, numero2, operacion) {
    /* switch(operacion){
         case "+":
             console.log(suma(numero1, numero2))
             break;
         case "-":
             console.log(resta(numero1, numero2))
             break;
         case "*":
             console.log(multiplicacion(numero1,numero2))
             break;
         case "/":
             console.log(division(numero1, numero2))
             break;
         case "default":
             console.log("Operacion no valida")
             break;
     }*/ //la complejidad, y lo que cuesta para el procesador bajo. if cuesta menos en ejecuta que un switch.

    if (operacion == "+") {
        console.log(suma(numero1, numero2))
    } else if (operacion == "-") {
        console.log(resta(numero1, numero2))
    } else if (operacion == "*") {
        console.log(multiplicacion(numero1, numero2))
    } else if (operacion == "/") {
        console.log(division(numero1, numero2))
    } else {
        console.log("operacion no valida")
    }
}

let numero1 = parseFloat(prompt("Ingrese un numero"))
let numero2 = parseFloat(prompt("Ingrese otro numero"))
let operacion = prompt("ingrese una operacion")

calculadora(numero1, numero2, operacion)


////

/////     CLASE 5----OBJETOS

/* los objetos son estructuras que podemos definir para agrupar valores bajo un mismo criterio.
Se componen de un listado de pares de clave-valr, es decir, contienen propiedades y valores agrupados.*/

let persona1 = {
    nombre: "Nahuel",
    apellido: "Romero",
    edad: 45,
    esProfe: true
}

let persona2 = {
    nombre: "milton",
    apellido: "Salazar",
    edad: 22,
    cuentaBancaria: 1000,
    esProfe: false
}

persona1.cuentaBancaria = 4000 ///modifica el valor, los valores de un objeto los puedo cambiar, lo que no puedo modificar la estructura de un obj, no puedo sacar ni agregar.
/// con let yo puedo modificar la estructura de un objeto, con const puedo modificar solo los valores, por ende

persona1 = persona2 ///con let seria posible clonar, con const no

console.log(persona1)
console.log(persona1.cuentaBancaria)
console.log(persona2["cuentaBancaria"])

///constructores, una forma de crear objetos, declaro una vez como va a estar definido mi objeto y creo objetos a travez de esa funcion

function Persona(nombre, apellido, edad, dni) { //una funcion tiene parametros
    this.nombre = nombre; // estos son los atributos, this(mi) nombre, mi atributo nombre, va a ser igual al nombre que me ingresen como parametro
    this.apellido = apellido; // de esta forma puedo crear objetos infinitos llamando a la funcion, y asi ahorrar codigo
    this.edad = edad;
    this.dni = dni;
    this.saludar = () => console.log(`Hola, mi nombre es ${this.nombre}, estoy saludando`); ///el parentesis es "funcion"
    this.mostrar = () => console.log(this)
}

const persona1 = new Persona("nahuel", "romero", 21, 42626338)
const persona2 = new Persona("juan", "romero", 23, 42422422)
console.log(persona1)
persona1.saludar() //primero llamo al objeto, luego a la funcion, se le conoce como metodo. Los metodos son funciones especiales
//por ejemplo consola es un objeto, console.log es un metodo de consola
//parseFloat() es una funcion, no tuve que llamar a nadie para ejecutarlo.
persona2.saludar()

//// CLASES, son una equivalencia al empleo de funcion constructora y permite definir distintos tipo de metodos.
//crear objteos mediante clases

class Persona { //mas limpio en la consola, y mas limpio el codigo, mas recomendado crear objetos constructores mediante clases.
    constructor(nombre, apellido, edad, dni, cuentaBancaria) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.cuentaBancaria = cuentaBancaria
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}, estoy saludando`)
    }

    mostrar() {
        console.log(this)
    }

    deposito(cantDeposito) {
        this.cuentaBancaria += cantDeposito ////cantidad que tengo en cuentaBancaria, y suma num que agregue en cantDeposito
    }

    retiro(cantRetirar) {
        if (this.cuentaBancaria - cantRetirar >= 0) {
            this.cuentaBancaria -= cantRetirar
        } else {
            console.log("No puede retirar mas dinero del que dispone")
        }
    }
}

const persona1 = new Persona("nahuel", "romero", 21, 42626338, 300)
const persona2 = new Persona("juan", "romero", 23, 42422422, 500)
persona1.deposito(parseFloat(prompt("Ingrese un numero"))) ///no se puede agregar valores en los parametros, y lo mejor es consultar el prompt por fuera dle metodo.
persona1.deposito(300)
console.log(persona1.cuentaBancaria)
/////////////
const presona1 = new Persona( ///pidiendo los datos al usuario mediante prompts, en vez de llenarlo yo

    prompt("Ingrese un nombre"),
    prompt("Ingrese un apellido"),
    parseInt(prompt("ingrese una edad")),
    parseInt(prompt("Ingrese un DNI")),
    parseFloat(prompt("Ingrese un saldo en cuenta bancaria"))
)

///en resumen,
/*Los objetos tienen propiedades y metodos,
el metodo constructor de un objeto sirve para crear el mismo y asignarle sus propiedades,
permite crear varios objetos usando el mismo costructor,
Las funciones de JS son generalmente de acceso global y los metodos son unicamente utilizados para ser invocados
por los objetos que lo contienen,
las clases son otra forma de crear objetos personalizados en JS */




///// CLASE 6   ARRAYS



//objeto en especifico ARRAYs
// es un tipo de dato que sirve para almacenar valores en forma de lista. Basicamente es un objeto que me permite guardar determinar valores de manera ordenada.
//tienen un indice que va desde el 0(elemento 1) indice 1(elemento 2) (el primer elemento del array)

const array1 = [] ////con const para que no cambie su esctructura, que no mute(cuando hay arrays dinamicos se hacen con let, pq necesito cambiar su valor constantemente)

let array2 = [true, 1, "hola, 4"]
array2[1] = 999 /// va a cambiar el valor sea const o let, pero no puedo cambiar la estructura si hay const

console.log(array2)
/// para llamar elemento especifico del array
console.log(array2[2])
//
for (let i = 0; i < 4; i++) {
    console.log(array[i]) //array[0]  array2[1]
}

//es mejor usar array.length para no tener que cambiar el indice siempre que se modifiquen los objetos en el array
//metodo LENGTH se utiliza para definir el limite de una iteracion sobre un array, me permite saber explicitamente la longitud del mismo
for (let i = 0; i < array2.length; i++) {
    console.log(array[i])
}

///para agregar un elemento a un array
array2.push(10) ///metodo de objeto array

//// pone el elemento al principio de mi array, por ende no es tan conveniente como push, pq modifica mi indice.
array2.unshift(10)

/// para sacar mi ultimo elemento
array2.pop()

///para eliminar el primero
array2.shift()

/// el metodo splice permite eliminar uno o varios elementos de un array en cualquier posicion. funciona con dos parametros, el primero es el indice donde se ubica el metodo para trabjar, el segundo es la cantidad de elementos a eliminar desde esa posicion.
let nombres = ["francisco", "lucia", "luis", "carlos", "tutankamon"]

let nombres1 = nombres.splice(1, 3) /// (1,3) elimina desde indice 1, el 3 es al cantidad que elimina desde esa posicion
console.log(nombres1) ///esto me retornaria los elementos eliminados
console.log(nombres) ////esto me retorna en mi array original sin los nombres eliminados.

/// metodo JOIN paso todos los elementos a texto y agrego entre parentesis un separador entre cada elemntos
console.log(nombres.join("*"))

///metodo CONCAT concatene dos arrays, no string.
let nombres2 = ["emily", "nadia"]
let nombres3 = nombres1.concat(nombres2)
console.log(nombres3)

//// metodo SLICE devuelve una copia de una parte del array dentro de un nuevo array.
let nombres3 = nombres1.slice(0, 2) ////este si pide indice, y el fin no esta incluido


////metodo INDEXOF, buscame cada uno de mis elementos, uno a uno, y devolveme el indice del elemento si lo encontras.
//si no existe el elemento, me retorna -1

let nombreAEliminar = prompt("ingrese un nombre")

let indice = nombres1.findIndex(nombre => nombre === nombreAEliminar)

if (indice !== -1) {
    nombres1.splice(indice, 1)
    console.log(nombres1)
} else {
    alert("nombre invalido")
}


////metodo INCLUDES, similar a indexOF, me permite saber si un elemento existe dentro de un array o no
console.log(nombres1.includes("nahuel"))

///metodo REVERSE como su nombre lo indica, invierte el orden de los elementos dentro de un array
console.log(nombres1.reverse)

///// ARRAY DE OBJETOS

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const persona1 = new Persona("Francisco", "Pugh", 40)
const persona2 = new Persona("Juan", "gomez", 14)
const persona3 = new Persona("solomon", "nunes", 55)

let personas = [persona1, persona2, persona3]

console.log(personas)

////recorrer arrays de objetos

for (let personaEnArray of personas) { ////recomendable usar un nombre significativo, pero funciona con cualquier nombre
    console.log(personaEnArray)
}


///// CLASE 7   FUNCIONES DE ORDEN SUPERIORES
//son unun tipo de funciones que no se como se implementan, pero las uso. ingresa info me devuelve info, pero no se como.

/// ABSTRACCION, ocultar el como funciona , mostrar el resultado


/// recibir funciones por parametro

const persona1 = new Persona(prompt())


/////metodos de busqueda y transformacion

///metodo FOR each
class Persona {
    constructor(nombre, apellido, edad, sueldo) {
        this.nombre = nombre;
        this.apellido = apellido
        this.edad = edadthis.sueldo = sueldo
    }
}

const persona1 = new Persona("emiliano", "grande", 23, 1000)
const persona2 = new Persona("emilno", "grde", 24, 21000)
const persona3 = new Persona("emilian", "grand", 22, 11000)

let personas = [persona1, persona2, persona3]
for (let persona of personas) {
    console.log(persona)
}
////en reemplazo al for of esta el for each

personas.forEach((persona) => {
    console.log(persona)
})

/////METODO FIND, es para buscar el primer objeto dentro del array, si lo encuentra lo devuelve, si no devuelve undefined.
console.log(personas.find((persona) => persona.sueldo >= 8000 && persona.sueldo <= 3000))

/// METODO FILTER, lo mismo que find, pero me devuelve todos los objetos que cumplan con la condicion
console.log(personas.filter((persona) => persona.edad < 18))

///METODO SOME, me devuelve true o false si existe o no el elemento. podria implementarse para verificacion, usuario ya creado, contrase;a, etc.
console.log(personas.some((persona) => persona.nombre === "pancho"))

/// METODO MAP, cambio el array segun los datos que consulte. 
console.log(personas.map((persona) => persona.sueldo))
console.log(personas.map((persona) => persona.sueldo > 2000)) ////devuelve true o false dependiendo de si cumplen o no con lo que busco
console.log(personas.map((persona) => `El sueldo es ${persona.sueldo}`))
//(persona) => `${persona.nombre} - ${persona.sueldo}`)) para buscar mas de uno en especifico

///REDUCE, a ver despues.

/// METODO SORT, ordena nueystro codigo segun un criterio que definamos. se maneja con 1, -1, 0
///
console.log(personas.sort((p1, p2) => p1.sueldo - p2.sueldo)) // 

///OBJETO MATH, es un objeto global que me provee las cuentas matematicas mas complejas.
console.log(match.cbrt(8)) // la raiz cuadrada de 8

console.log(parseInt(math.random() * 100)) ////lo puedo usar para sorteo y demas, el que mas voy a usar. 

//DATE, genera una fecha
//constructor de la clase date
const fecha = new Date("07, 03, 2022")
console.log(fecha)
///////




//////CLASE 8  DOM

///DOM ES una estructura de objetos generada por el navegador.
///en el DOM, cada etiqueta html es un objeto, al que se llama NODOS

let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
let parrafos = document.getElementsByClassName('parrafos') ///es mas quilombero, pq primero accedo al padre, y dsps al hijo
let etiquetasP = document.getElementsByTagName('p') ////me devuelve todas las etiquetas p
console.log(div.innerHTML);
console.log(parrafo.innerHTML);
console.log(parrafo[0].children[0]) ///me devuelve mis elementos html hijos
console.log(etiquetasP[0])


////MODIFICAR NODOS//

parrafo.innerText = 'Hola corders!' //innerText inserte un texto igual a Hola corders, borra el codigo anterior, o lo concateno conu un +=

////INNER HTML
////una forma de definir el codigo html dentro de js, como si fuera una etiqueta html. genero nuevos nodos con contenido dentro de dichos nodos

parrafos[0].innerHTML += '<p>Hola gente!!!<p>' /// con backsticks ``  puedo ponerle class o id. El css me toma la clase o el id incluso habiendolo hecho en js

///AGREGAR O QUITAR NODOS. 
///CREACION DE ELEMENTOS. para crear elementos html

let divGeneral = document.createElement('div')
divGeneral.innerHTML = `<p> bUEEEEENAS </p>`
document.body.appendChild(divGeneral) ///con esto cree un div dentro del codigo. Lo puedo usar para crear los distintos elementos dentro de un sitio web


///BORRAR ELEMENTOS.
document.body.removeChild(divGeneral)
///cuando yo le doy click AGREGAR AL CARRITO, el objeto lo estoy agregando al carrito, un appendChild, y para removerlo, un removeChild.


////PLANTILLAS LITERALES

class Persona {
    constructor(id, nombre, apellido, edad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

c
const persona1 = new Persona(1, 'milton', 'lolo', 23)
const persona2 = new Persona(2, 'nahuel', 'juan', 21)
const persona3 = new Persona(3, 'julio', 'dou', 23)

let arrayPersonas = [persona1, persona2, persona3]

let divPersonas = document.getElementById('divPersonas')

arrayPersonas.forEach(personaEnArray => {
    divPersonas.innerHTML += `
    <div id="persona${personaEnArray.id}">
        <h1>${personaEnArray.nombre} ${personaEnArray.apellido} </h1>
        <p>Edad: ${personaEnArray.edad} </p>
    </div>
    `
})

//esto me va a devolver: persona0 persona1 persona2 persona3. UN QUILOMBO DE MOMENTO QUIERO SER chango






////CLASE 9 EVENTOS

///evento es definir tal comportamiento ante tal accion que el usuario realiza
///ante una accion que realiza el usuario defino un comportamiento ante dicha accion
///con eventos me olvido de prompt y alert
///el evento como todo, es un bojeto, tiene propiedades y metodos.

////opcion 1 para adherir evento

let boton1 = document.getElementById('boton1')

//lo botones tienen dos eventos, click y doble click

boton1.addEventListener('click', () => { ///usar referencias de eventos, mozilla events.
    console.log('Diste click con addEvenListener')
})

//consulto un elemento del dom, a dicho elemento le ejecuto addEvenListener.
////evento click, dblclick, change, input, submit, son los mas implementados en cualquier sitio web.



////opcion 2, atravez de una propiedad
boton1.onclick = () => console.log("diste click con onclick") ///usar el prefijo on antes del evento

///addEvenListener es mas concreto al momento de ejecutarlo.

////opcion 3, sintaxis. manejar el evento en el atributo de una etiquetaHTML.
//usar este metodo no es mal reconmedable, es menos seguro, y muestra mi js al inspeccionar. 

/////EVENTO INPUT
///input es para agregar informacion, en html

let input1 = document.getElementById('input1')
input1.addEventListener('input', () => {
    console.log(input1.value) ///en vez de contar las veces q agrego o quito algo, me muestra el valor de lo que pongo
})
///esto lo usa por ejmp el buscador de google. cada vez que agregue o quite informacion voy a estar ejecutando el evento input, en google por ejmp para resumir la busqueda del usuario
///esto hace que no tenga que usar mas el prompt
///<input type='color' id="inputColor">

let inputColor = document.getElementById('inputColor')
inputColor.addEventListener('input', () => {
    console.log(inputColor.value)
}) ///lo que hago con esto, el usuario me ingresa valores atraves de una paleta de colores.


////cambiar el fondo por ejmplo dependiendo del valor que ingrese el usuario
inputColor.addEventListener('input', () => {
    document.body.style.backgroundColor = inputColor.value
})

/////EVENTO CHANGE
//se dispara cuando se detecta un cambio en el elemento. cuando de enter o salga del elemento, cuandop haya un cambio dentro del elemento

input1.addEventListener('change', () => {
    console.log(input1.value)
})

////EVENTO SUBMIT, es el vento que se activa cuando un formulario es enviado. 
/*un <form id="form">
        <input type="text" placeholder="nombre" id="idNombre">
        <input type="text" placeholder="apellido" id="idApellido">
        <input type="number" placeholder="edad" id="idEdad">
        <button type="submit" >Crear Persona</button>
    </form>
en el html */

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}
let arrayPersonas = []

let formPersona = document.getElementById('form')
let botonPersonas = document.getElementById('botonPersonas')
let divPersonas = Document.getElementById('divPersonas')

formPersona.addEventListener('submit', (e) => {
    e.preventDefault() /////como no tengo servidor uso preventDefault para resetear el comportamiento del evento por default.
    let nombre = document.getElementById('idNombre').value
    let apellido = document.getElementById('idApellido').value
    let edad = document.getElementById('idEdad').value

    const persona = new Persona(nombre, apellido, edad)
    arrayPersonas.push(persona)
    console.log(arrayPersonas)
    formPersona.reset()
})

botonPersonas.addEventListener('dbclick', () => {
    arrayPersonas.forEach((personaEnArray, indice) => {
        divPersonas.innerHTML += `
    <div class="card" id="persona${indice}" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Persona N°: ${indice + 1}</h5> ///se le pone al indice +1 pq asi se muestra en el html posicion 1 y no 0.
                    <p class="card-text">Nombre: ${personaEnArray.nombre}</p>ca
                    <p class="card-text">Apellido: ${personaEnArray.apellido}</p>
                    <p class="card-text">Edad : ${personaEnArray.edad}</p>
                    <button class="btn btn-dark">Eliminar Persona</button>
                </div>
            </div>
        `
    })
})
///cree una persona mediante un input form, sin prompt consultando al usuario
///cree un objeto con los datos que me ingreso el usuario, y esos datos los guarde en un array.
//la idea seria mostrar esos datos que ingresa el usuario, en el html, no consola. puedo usar bootstrap para el form, como ejmp



////CLASE 10 JSON Y STORAGE

//

////objeto Storage(api de almacenamiento web) permite almacenar datos de manera local en el navegador
//localStrage se almacenan en el navegador de forma indefinida(me permite guardar informacion que se guardan en el navegador de manera local)

///SessionStorage, voy a almacenar informacion mientras el usuario este en mi pagina.

localStorage.setItem("SALUDO", "HOLA") ////inps elemento, aplicacion, localstorage,   clave-valor
console.log(localStorage, getItem("saludo")) ///en cambio de poner un valor que no existe, devuelve null.

sessionStorage.setItem("saludo", "hola")
console.log(sessionStorage.getItem("saludo")) ///se elimina cada vez que el usuario cierre la pesta;a pagina navegador etc.

///no se puede recorrer con un for of pq no son objetos iterables, ni con for in pq obetenemos otras propiedades del objeto que no son valores almacenados.
//solo se puede recorrer mediante un for

localStorage.setItem("despedida", "adios")
localStorage.setItem("uno", 1)

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i) ///consulto por cada una de las claves almacenadas
    console.log(localStorage.getItem(clave)) ///
}

///para eliminar datos del storage
localStorage.removeItem("uno")

localStorage.clear() ////esto elimina todo los datos del localStorage




//formato JSON (jsObjectNotation)
///formato basado en texto, el cual me permite almacenar objetos, me permite convertir objetos a un formato de texto. es muy utilizado apra enviar y recibir informacion en la web.
////me permite almacenar informacion en una base de datos.

/////STRINGIFY, pasar un objeto a formato string.

const objPersona = {
    nombre: "Francisco",
    apellido: "Pugh"
}
let personas = [objPersona]
const personasArray = JSON.stringify(personas)
localStorage.setItem("persona", personasArray) // o tambien puedo hacer localStorage.setItem("persona", JSON.stringify(personas)) ///me ahorro la linea

//los datos de los dos Storage no se puedne modificar de forma directa, si no que piso los valores

class Persona {
    constructor(persona, apellido, edad) {
        this.persona = persona;
        this.apellido = apellido;
        this.edad = edad
    }
}
let personas

if (localStorage.getItem("personas")) { ///aca digo, si existe mi localstore una clave con la palabra personas, la consulto.
    personas = JSON.parse(localStorage.getItem("personas")) ////como estan en formato jason hago el parseo, y tengo un array con datos de localStorage
} else {
    let personas = [] ////si en cambio no edxiste esa key localStorage, creo un array vacio y guardo
    localStorage.setItem("Personas", JSON.stringify(personas)) ////ese array vacio en el localStorage
}

///hago formulario en html con inputs.

let formulario = document.getElementById("formUser") ///cree un formulario, lo consulte por el ID
let boton = document.getElementById("botonUsers")
let div = document.getElementById(divUsers)

formulario.addEventListener("submit", (e) => { ////a ese formulario le agregue un evento de tipo submit
    e.preventDefault()
    let nombre = document.getElementById("name").value /////para consultar el valor de tres inputs
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value

    const persona = new Persona(nombre, apellido, edad) ////con ese valor, esos tres inputs cree un nuevo objeto persona
    personas.push(persona) ///con ese nuevo objeto persona lo guarde en el array

    localStorage.setItem("personas", JSON.stringify(personas)) ////y ese array lo guardo en el localStorage

})

////creo boton en html, para consultar los datos de localStorage

boton, addEventListener("click", () => {
    let arrayStorage = JSON.parse(localStorage.getItem("Personas"))
    div.innerHTML = "" ////Esto para que el codigo no se repitiera varias veces. 

    arrayStorage.forEach((personaEnArray, indice) => {
        div.innerHTML += `aca va el card de bootstrap`
    })
    console.log(arrayStorage) ////esto para ver mis datos en la card de bootstrap en el DOM.
})

/*
explicacion: 
Creo una variable personas, no le asigno ningun valor
consulto en esta linea si existe una key con el valor personas, lo guardo en el array, las personas que habia guardadas en el localStorage las guardo en el array
si en cambio no existe ese item personas, o es la primera que ingresa el usuario, o formateo, creo un array vacio y ese array vacio lo guardo en el localStorage, hago un peque;o condicional para consultar si los valores existen o no dentor del local storage.

basicamente consulto el localStorage asi no se van reseteando los valores. 
*/
//consulto los valores que existian dentro de local storage, si existia ese key la guardo en un array cada uno de los valores, si no exisitia creo esa key ocn el array vacio.
///creo el array vacio (personas = []) pq no estaba creado el array, no tengo ningun dato. 




/////


//CLASE 12
//OPERADORES AVANZADOS-Sugar syntax
//simplifican una tarea mas compleja

let numeroo = 20

if (numeroo == 20) {
    console.log("Numero 20")
} else {
    console.log("numero no es 20")
}

(numeroo == 20) ? console.log("Numero 20"): console.log("Numero no es 20") ////el primer parentesis no es necesario, solo si se me complica ver el condicional

//
console.log(0 ? ? "Nullish") ///el operador 0 en booleano retorna false, pero con nullish retorna 0.

//

function obtenerDatosStorage() {
    const listado = JSON.parse(localStorage.getItem('Listado'))
    return listado ? ? [] ///retorname listado, y si listado es null, devoolveme un array vacio
}

let array = obtenerDatosStorage()

////Acceso condicional a un objeto
// si intento acceder a un objeto que no existe naturalmente obtengo un error, pero si uso el operador ? sobre la referencia de un objeto para condicionar su acceso puedo tener un mejor control de errores en la ejecucion
const objeto = undefined
console.log(objeto ? .nombre || "Propiedad no disponible") //agrego una condicon para evitar errores.  



///desestructuracion de obj

////declaro variables y en ellas almaceno los valores de las propiedades. Hago esto para trabajar con inmutabilidad, es decir utilizar esos valores sin riesgo de alterar las propiedades del objeto
//sin embargo, puedo usar la desestruc para simplificar y agilizar este proceso. Es una tecnica que permite declarar variables donde guardar propiedades de un obj de forma rapida y directa.

const pelsona = {
    nombreCliente: "prez",
    apellidoCliente: "Perez",
    edadCliente: 35,
    direccionCliente: {
        c: "falsa"
        n: 123
    }

}

console.log(nombre) ///lo mismo con apellido edad
///o mejor puedo usar esto

let {
    nombre,
    apellido,
    edad
} = pelsona ///noaltera al objeto, solo consulto las propiedades que necesito. Y las guardo en una variable

//tambien lo puedo usar para acceder a obj con objetos dentro

let {
    nombreCliente: nombre,
    apellidoCliente: apellido,
    edadCliente: edad,
    direccionCliente: direccion
} = pelsona

console.log(nombre)
console.log(apellido)

let {
    c: calle,
    n: numero
} = direccion
console.log(`${calle} ${numero}`)


//desestructuracion en parametros.

function desestructuracionObjeto(obj) {
    let {
        nC: nombre,
        aC: apellido,
        dC: direccion
    } = obj
    let {
        c: calle,
        n: numero
    } = direccion
    console.log(`${nombre}, ${apellido}, ${calle}, ${numero}`)
}

desestructuracionObjeto(persona)

function desestructuracionObjeto({
    nC: nombre,
    aC: apellido,
    dC: direccion
}) {
    let
    let {
        c: calle,
        n: numero
    } = direccion
    console.log(`${nombre}, ${apellido}, ${calle}, ${numero}`)
}


////Desestructuracion de ARRAY
///puede desestructurar un objeto de un array atraves de sui posicion.

const pelsona1 = {
    nombreCliente: "wwprez",
    apellidoCliente: "Perez",
    edadCliente: 35,
    direccionCliente: {
        c: "falsa"
        n: 123
    }

}

const pelsona2 = {
    nombreCliente: "asdprez",
    apellidoCliente: "Perez",
    edadCliente: 35,
    direccionCliente: {
        c: "falsa"
        n: 123
    }

}

let arrayPelsonas = [pelsona1, pelsona2]

const [a, b] = arrayPelsonas

console.log(a)
console.log(b)

const [, b] = arrayPelsonas ///acceso a la segunda posicion, con el espacio vacio salto a para acceder a b


////SPREAD
///es una herramienta que me permite desparramar un array u objeto. En otras palabras, cambiar la forma en la que presento este array u obj

console.log(...arrayPersonas)

let arrayNumeros = [5, 8, 5, 4, 3, 2, 4, 6, 7, ]
console.log(math.max(...arrayNumeros))

function retornarValor(...array) {
    console.log(array)
}
retornarValor(...arrayPelsonas)

///por ejemplo si necesito saber cual es el menor o mayor de este array de numeros, con spread puedo solucionar esto ya que math.max() recibira cada elemento del array como un parametro indivual

////SPREAD DE OBJETOS
////yo puedo hacer copias de objetos dentro de otros objetos

const persona5 = { ///con el spread copio los datos de la persona4, mas los datos que yo agrego.
    ...persona4,
    dni: 123123,
    estadoCivil: "soltero"
}
console.log(persona5)

let numeros = [5, 10, 60, 40]

const suma = (...numeros) => {
    return numeros.reduce((acc, n) => acc + n, 0)
    ``
}

console.log(suma(5, 10, 60, 50))


////

///CLASE 13
//LIBRERIAS

//librerias : son codigos pre-escritos que facilitan el desarrollo de aplicaciones. 
//usar trend builtwith 
//https://trends.builtwith.com/javascript/javascript-library
//https://2021.stateofjs.com/en-US/libraries/front-end-frameworks

///implementacion
///un ARCHIVO MINIFICADO son archivos JS cuyo contenido se encuentra escrito en una unica linea y de corrido, sin saltos de linea ni espacios innecesarios para achicarlos.


///DOCUMENTACION
//es el manual de instrucciones para la implementacion y manejo de las librerias. 

//--------------------------------------





///CLASE 14- PROMISES & ASYNC

//sincronica, espero hasta que termina la linea anterior, y ahi me ejecuto(el codigo)
//asyncronico, cargo datos en segundo plano, y mientras eso se cargo puedo seguir navegando.
//la programacion asincronica permite que multiples tareas sucedan a la vez.All comenzar una accion,. nuestro programa sigue en ejecucion; y cuando la accion termina nuestro progrma es informado y consigue acceso al resultado correspondiente.

//entonces, si deseio hacer dos peticiones
//Modelo sincronico: la segunda peticion empezaria solamente cuando termine la primera, y tendria el resultado de ambas luego de finalizar la segunda.

//modelo asincronico, ambas peticiones pueden realizarse en paralelo, y solo debemos sincronizar los resultados cuando terminen.
//ventajas, facilita el manejo de programas que realizan mutiples acciones a la vez.
//principales riesgos, puede dificultar la comprension de aquellos programas que tienden a seguir una unica linea de accion.



//setTimeout: esta funcion que permite realizar acciones asincronicamente.La funcion recibe dos parametros:
//una funcion de callback y un valor numerico que representa milisegundos. setTimeout(fn, time)

//asi, la funcion que pasamos por primer parametro se ejecuta luego de que transcurra el tiempo definido en el segundo parametro.
//Ejm: 
setTimeout(() => {
    console.log('proceso asincronico')
}, 3000)
//

const brn = document.querySelector('#boton');
const popup = document.querySelector('#popup-mensaje');

btn.addEventListener('click', () => {
    popup.classList.add('popup-active')

    setTimeout(() => {
        popup.classList.remove('popup-active')
    }, 2500)
});

//lo visto anteriormente en los ejemplos no se explica precisamente con el tiempo de ejec del proceso, sino con el orden que ocupa en el listado de peticiones a ejecutar.

/*CALL STACK(PILA): es una lista donde se apilan las distintas tareas a ejecutar por nuestro programa, Js es un lenguaje single threaded, o de un unico hilo,
lo que significa que tiene un unico stack o pila de ejecucion. De ahi que la ejecucion es implicitamente asincronica.*/

/*el proceso call stack: cuando se esta a punto de ejecutar
una funcion, esta es a;adida al stack. Si la funcion llama a la vez, a otra funcion,
esta es agregada sobre la anterior */

//ejmp
function multiply(x, y) {
    return x * y;
}

function printSquare(x) {
    let s = multiply(x, x);
    console.log(s);
}
printSquare(5); //es una lista de tareas de js a ejecutar durante el programa. Cada nueva instruccion se agrega en el orden que corresponde al stack y el motor de js resuelve una a una.
//basicamente, voy a ir acumulando cada uno de los procesos, y el ultimo que entro es el primero que sale.

//EVENT LOOP
//es la herramienta que permite la asincronizacion entre nuestro call stack con estas tareas asincronicas que funcionan en un thread aparte.

//Si el stack esta vacio, el event loop envia la primera funcion que este en la callback queue al call stack y comienza a ejecutarse.
//

//setInterval: misma sintaxis que setTimeout, pero la unidad de tiempo es un intervalo ara la repeticion de la funcion asociada.
setInterval(() => {
    console.log('tic')
}, 1000);
//Permite ejecutar funciones de una manera reiterativa tras los milisegundos indicados hasta que indiquemos su detencion o se cierre la aplicacion.


//clearInterval & clearTimeout
/*Cuando llamamos un setInterval() esta retorna una referencia al intervalo generado, el cual
podemos almacenar en una variable. Es esta referencia la que debemos pasar a la funcion clearInterval para que
 la limpieza tenga efecto: */

let counter = 0;
const interval = setInterval(() => {
    counter++
    console.log('counter: ', counter);

    if (counter >= 5) {
        clearInterval(interval)
        console.log('Se removio el intervalo')
    }
}, 1000);



///PROMESAS.
/*es un objeto de Js que representa un evento a futuro. Es una 
accion asincronica que se puede completar en algun momento y producir
un valor, y notificar cuando esto suceda. */
//Una promesa representa un evento a futuro que se que se va a ejecutar.
//Una promesa cuenta con tres estados posibles: pending, fulfilled y rejected. Las promesas pueden de ser resueltas o rechazadas.


/*Puedo crear promesas a traves de su constructor new Promise.
Su sintaxis es algo comleja, ya que recibe una funcion por parametro
que a su vez recibe por parametro las funciones de resolve y reject
 */



/*en principio, una promesa se retorna con estado pending, 
entendiendo que el valor a generar aunno fue resuelto*/

const eventoFuturo = () => {
    return new Promise((resolve, rejected) => {
        //cuerpo de la promesa
    })
}
console.log(eventoFuturo()) //Promise {<pending>}

/*esta funcion retorna una promesa que no se resuelve. Por lo tanto, veremos que el valor que genera
es un objeto Promise con estado pendiente*/


/*El valor de retorno de la proimesa se define a traves del llamado a las funciones de resolve o reject:
+Si el cuerpo de la promesa llama a resolve(), la promesa cambiara su estado a 
fulfilled, con el valor enviado a resolve().
+Si la promesa llama a reject(), cambiara su estado a rejected con el valor enviado al reject().
*/

//ejemplo::::::
/*Aqui podemos ver como cambia de estado la promesa con distintos valores.
Segun el llamado de la funcion de la promesa se vera resuelta o rechazada. Sin embargo, lo que
vemos por consola es el objeto Promise que retorna la funcion, y con lo que nos interesa trabajar en realidad es con el valor de resolucion de la promesa*/

const eventFuturo = (valor) => {
    return new Promise((resolve, reject) => {
        if (valor === true) {
            resolve('promesa resuelta')
        } else {
            reject('promesa rechazada')
        }
    })
}

console.log(eventFuturo(true)) //promise {'promesa resuelta}
console.log(eventFuturo(false)) //promise {<rejected> 'promesa rechazada'}

/////----------------------------------


const eventoFuturo2 = (valor) => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        res ? resolve('Promesa resuelta') : reject('promesa rechazada')
    }, 2000)
})
}

console.log(eventoFuturo2(true))//promise(<pending>)

//

/*en este caso, el console.log es sincronico y vemos que la promesa es ten pending
en ambos llamados(su resolucion se generara dentro de 2s). Las
promesas tienen un mecanismo para trabajar esta asincronia y poder ejecutar fuinciones cuando 
cambie su estado. */

/*Al llamado de una funcion que retorne una promesa, podemos concatenar el metodo
.then() o .catch(), los cuales reciben una fuincion por parametro con la cual se caputa el valor de la promesa.

+.then(): si la promesa es resuelta, su valor de retorno se captura dentro del then(),recibiendo
por parametro de su funcion ese valor.

+.catch():si la promesa es rechazada, su valor se captura dentro de un .catch() siguiendo
la misma logica */

//lo que queramos ejecutar cuadno la promesa se resuelva o rechace, debemos definirlo dentro de un .then o .., segun el caso

eventoFuturo(true)
.then((response) => {
    console.log(response) //promesa resuelta
})

eventoFuturo(false)
.catch((error) => {
    console.log(error) //promesa rechazada
})

/*
se aprecian los console.log tras 2 segundos de delay y lo que vemos es, 
precisamente, el valor que retornan el resolve o reject de la promesa.
 */

/*como una promesa puede tener varios estados posibles, se puede concatenar
varios.then .catch en un mismo llamado, y caeremos en el caso que corresponda segun
como se haya resuelto la promesa */

eventoFuturo(true)
.then((response) => {
    console.log(response) //promesa resuelta
})
.catch( (error) => {
    console.log(error)
})

eventoFuturo(false)
.then( (response) => {
    console.log(response)
})
.catch((error) => {
    console.log(error) //promesa rechazada
})

/* esto quiere decir que, para cada promesa podemos definir una estructura para trabajar
los distintos caso posibles. Cada promesa solo puede resolverse o
rechazarse una unica vez. Es un mecanismo de control claro y ordenado para trabajar
la asincronia y los posibles valores a recibir*/

