//comenraio una linea


/*
comentario multi-linea

*/

//var nombre = "Francisco"
/*var edad = 40

console.log(nombre)

nombre = 20

console.log(nombre)

nombre = 10

console.log(nombre)

edad = "francisco"

console.log(edad)*/
/*
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

let numero1= parseFloat(prompt("ingrese un numero"))
let numero1= parseInt(prompt("ingrese un numero"))

alert(numero1)
alert(numero2) */



/*CLASE 2*/




/*
let numero = 2
// si - condicion
if(numero == 2) {
    //codigo a ejecutar
    console.log("numero es igual a 2")
} else{
    console.log("Numero no es igual a 2")
}

/*Pero si let numero = 3 la condicion es falsa por ende el if no se ejecuta */

if(NaN){
    console.log("NaN")   /*es falso*/
}


let numero = 2; 
let numero = parseInt(prompt("Ingrese un numero para saber si es par o impar"))

if(numeron % 2 == 0) { // 5 / 2 = 2.5  5 % 2 = 1
 console.log("El numero es par")
} else {
    console.log("El numero es impar")

}

// un if medio loco

if(numero % 2){
    console.log("El numero es par")
} else {
    console.log("El numero es impar")
}


// condiciones anidadas if... else if
/*
let presupuesto = parseInt(prompt("Ingrese un presupuesto"))
//> < >= <=
if(presupuesto >= 0){
    console.log("Presupuesto mayor a cero")
} else if(presupuesto >= -1000) {
    console.log("Presupuesto aceptable")
} else {
    console.log("Te fuiste del presupuesto")
}
*/

let presupuesto = parseInt(prompt("Ingrese un presupuesto"))

let noHayDeudas = (deudas >=0)
let hayDeudasMenores = (deudas >= -1000)

if(noHayDeudas){
    console.log("no tengo deudas")
} else if(hayDeudasMenores) {
    console.log("deudas aceptables")
} else {
    console.log("Te fuiste de deudas")
} //es mas limpio el codigo pero no es lo mas normal, mejor poner las variables en el if.



let numero1 = 5
let numero2 = "5"

// == Analizo valores != (distinto valor)
// === (estrictamente igual) Analizo valores y tipos !== (estrictamente distintos valor y tipo)
if(numero1 == numero2){
    console.log("V")
} else{
    console.log("F")
} // == Es verdadero pero pq Js toma como que tienen el mismo valor, solo se diferencian en el tipo, string y nuero.
  // === daria falso pq son distintos tipos.


//

let numero1 = 10
let numero2 = 20

if(numero1 == 10 && numero2 == 20){
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

if(numero1 == 10  ||  numero2 == 20){
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

if(!(isNaN(numeroX))){
console.log("Numero es valido")
} else {
    console.log("Numeor no valido")  //usar la negacion para hacer el resultado mas logico para mi. 
}


//


let nota = parseInt(prompt("Ingrese una nota"))

if(nota >= 1 && nota <=5){
    console.log("Estas desaprobado")
} else if(nota === 6 || nota === 7 ){
    console.log("Estas aprobado con nota de bien")
} else if(nota === 8 || nota === 9 ){
    console.log("Estas aprobado con nota de muy bien")
} else if(nota === 10){
    console.log("Edtas aprobado con nota Excelente")
} else {
    console.log("Nota no valida")
}

//


//CLASE 3



for(let i=1; 1<=10; i++){ //i = i + 1
   console.log(i)
}
// 


for(let i=1; 1<=10; i++){ //i = i + 1
   if(i == 5) {
    console.log("i es igual a 5")
    break
    
   }
   console.log(i)
}

//

for(let i=1; 1<=10; i++){ //i = i + 1

    if(i % 2 == 0) {
        continue
    }
    console.log(i)
}


//while   crear ciclo con un condicional. si la sentencia sea verdadera, el ciclo es infinito\

let repetir = true 
let acumulador = 0
let contador = 0
while(repetir) { //repetir == true
    let nota = parseInt(prompt("ingrese una nota"))
    acumulador += nota //acumulador = acumulador + nota
    contador++
    let confirma = prompt("Desea ingresar otra nota mas").toLowerCase()
    if(confirma == "no"){
        repetir = false //parecido a break
    }
}

console.log(`El promedio de las notas es ${acumulador / contador}`)


//

//DO..WHILE, a diferencia de while, ejecuto cierto codigo y luego consulto si se vuelve a repetir.
let acumulador = 0
let contador = 0
let confirma

do{
    let nota = parseInt(prompt("ingrese una nota"))
    acumulador += nota
    contador++
    confirma = prompt("Desea ingresar otra nota mas").toLowerCase()
}while(confirma != "no")

console.log(`El promedio de las notas es ${acumulador / contador}`)

/////
///CALCULADORA
let numero1
let numero2
let operador

do{
    numero1 = parseFloat(prompt("ingrese un numero"))
    numero2 = parseFloat(prompt("ingrese otro numero"))
    operador = prompt("ingrese una operacion (+,-,/,*)")
    if(isNaN(numero1) || isNaN(numero2)){
        alert("Por favor ingrese un numero valido")
    }
}while(isNaN(numero1) || isNaN(numero2))

console.log(numero1 + numero2)

///
///SWITCH

let numero1
let numero2
let operador

do{
    numero1 = parseFloat(prompt("ingrese un numero"))
    numero2 = parseFloat(prompt("ingrese otro numero"))
    operador = prompt("ingrese una operacion (+,-,/,*)")
    if(isNaN(numero1) || isNaN(numero2)){
        alert("Por favor ingrese un numero valido")
    }
}while(isNaN(numero1) || isNaN(numero2))

switch(operador){
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

function saludar(){
    console.log("Hola coders")
}

saludar() ///ejecuta la linea dentro de la funcion. en este caso linea 333 llama a la funcion pero se ejecuta la linea 330.
saludar()
saludar()
saludar()

//numeros como parametros, estos no se pueden definir en la funcion, el de los parametros importa.
let numero1 = parseFloat(prompt("Ingrese un numero")) //50
let numero2 = parseFloat(prompt("Ingrese otro numero"))//60

function suma(numero1, numero2){
    console.log(numero1 + numero2) //o return numero1 + numero2
}

let sumaNumeros = suma(5,10)
sumaNumeros = suma(10,20)
console.log(sumaNumeros)


suma(5,10)
suma(4,10)
suma(50,10)
///

const IVA = 1.21

function calcularIVA(producto){
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
} */// esto pasada a funcion anonima quedaria asi(funcion anonima por si sola no tiene sentido implementarla)

const suma = function(num1, num2) {return num1 + num2}
const resta = function(num1, num2) {return num1 - num2}
const multiplicacion = function(num1, num2) {return num1 * num2}
const division = function(num1, num2) {return num1 / num2}

console.log(suma(5,10)) // lo mismo para las demas con su respectiva funcion

//funcion flecha, siempre con const para que no modifiquen el cod.

const suma = (num1, num2) => num1 + num2
const resta = (num1, num2) => num1 - num2
const multiplicacion = (num1, num2) => num1 * num2
const division = (num1, num2) => num1 / num2

console.log(suma(5,10)) // lo mismo para las demas con su respectiva funcion, la funcion flecha simplifica el anonima.
// s es de mas de una linea, quedaria const suma = (num1,num2) =>{
                             //                  return num1 + num2
                                         // }    lo cual no tendria sentido implementar funcion flecha.

////calculadora


function calculadora(numero1, numero2, operacion){
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
    }*///la complejidad, y lo que cuesta para el procesador bajo. if cuesta menos en ejecuta que un switch.
    
    if(operacion == "+"){
        console.log(suma(numero1, numero2))
    } else if(operacion == "-"){
        console.log(resta(numero1, numero2))
    } else if (operacion == "*"){
        console.log(multiplicacion(numero1,numero2))
    } else if(operacion == "/"){
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

function Persona(nombre, apellido, edad, dni){ //una funcion tiene parametros
    this.nombre = nombre;  // estos son los atributos, this(mi) nombre, mi atributo nombre, va a ser igual al nombre que me ingresen como parametro
    this.apellido = apellido;// de esta forma puedo crear objetos infinitos llamando a la funcion, y asi ahorrar codigo
    this.edad = edad;
    this.dni = dni;
    this.saludar = () => console.log(`Hola, mi nombre es ${this.nombre}, estoy saludando`); ///el parentesis es "funcion"
    this.mostrar = () => console.log(this)
}

const persona1 = new Persona("nahuel","romero", 21, 42626338)
const persona2 = new Persona("juan", "romero", 23, 42422422)
console.log(persona1)
persona1.saludar() //primero llamo al objeto, luego a la funcion, se le conoce como metodo. Los metodos son funciones especiales
//por ejemplo consola es un objeto, console.log es un metodo de consola
//parseFloat() es una funcion, no tuve que llamar a nadie para ejecutarlo.
persona2.saludar()

//// CLASES, son una equivalencia al empleo de funcion constructora y permite definir distintos tipo de metodos.
//crear objteos mediante clases

class Persona {//mas limpio en la consola, y mas limpio el codigo, mas recomendado crear objetos constructores mediante clases.
    constructor(nombre, apellido, edad, dni, cuentaBancaria){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.cuentaBancaria = cuentaBancaria
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre}, estoy saludando`)
    }

    mostrar(){
        console.log(this)
    }

    deposito(cantDeposito){
        this.cuentaBancaria += cantDeposito ////cantidad que tengo en cuentaBancaria, y suma num que agregue en cantDeposito
    }

    retiro(cantRetirar){
        if(this.cuentaBancaria - cantRetirar >=0 ){
            this.cuentaBancaria -= cantRetirar
        } else {
            console.log("No puede retirar mas dinero del que dispone")
        }
    }
}

const persona1 = new Persona("nahuel","romero", 21, 42626338, 300)
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

const array1 = []        ////con const para que no cambie su esctructura, que no mute(cuando hay arrays dinamicos se hacen con let, pq necesito cambiar su valor constantemente)

let array2 = [true, 1, "hola, 4"]
array2[1] = 999 /// va a cambiar el valor sea const o let, pero no puedo cambiar la estructura si hay const

console.log(array2)
/// para llamar elemento especifico del array
console.log(array2[2])
//
for(let i = 0; i<4; i++) {
    console.log(array[i]) //array[0]  array2[1]
}

//es mejor usar array.length para no tener que cambiar el indice siempre que se modifiquen los objetos en el array
//metodo LENGTH se utiliza para definir el limite de una iteracion sobre un array, me permite saber explicitamente la longitud del mismo
for(let i = 0; i<array2.length; i++){
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

let nombres1 = nombres.splice(1,3) /// (1,3) elimina desde indice 1, el 3 es al cantidad que elimina desde esa posicion
console.log(nombres1) ///esto me retornaria los elementos eliminados
console.log(nombres)////esto me retorna en mi array original sin los nombres eliminados.

/// metodo JOIN paso todos los elementos a texto y agrego entre parentesis un separador entre cada elemntos
console.log(nombres.join("*"))

///metodo CONCAT concatene dos arrays, no string.
let nombres2 = ["emily", "nadia"]
let nombres3 = nombres1.concat(nombres2)
console.log(nombres3)

//// metodo SLICE devuelve una copia de una parte del array dentro de un nuevo array.
let nombres3 = nombres1.slice(0,2) ////este si pide indice, y el fin no esta incluido


////metodo INDEXOF, buscame cada uno de mis elementos, uno a uno, y devolveme el indice del elemento si lo encontras.
//si no existe el elemento, me retorna -1

let nombreAEliminar = prompt("ingrese un nombre")

let indice = nombres1.findIndex(nombre => nombre === nombreAEliminar)

if(indice !== -1){
    nombres1.splice(indice, 1)
    console.log(nombres1)
}else {
    alert("nombre invalido")
}


////metodo INCLUDES, similar a indexOF, me permite saber si un elemento existe dentro de un array o no
console.log(nombres1.includes("nahuel"))

///metodo REVERSE como su nombre lo indica, invierte el orden de los elementos dentro de un array
console.log(nombres1.reverse)

///// ARRAY DE OBJETOS

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const persona1 = new Persona("Francisco", "Pugh", 40)
const persona2 = new Persona("Juan", "gomez", 14)
const persona3 = new Persona("solomon", "nunes", 55)

let personas = [persona1,persona2,persona3]

console.log(personas)

////recorrer arrays de objetos

for(let personaEnArray of personas){  ////recomendable usar un nombre significativo, pero funciona con cualquier nombre
    console.log(personaEnArray)
}



