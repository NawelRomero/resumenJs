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
let numero1 = parseFloat(prompt("Ingrese otro numero"))
let operacion = prompt("ingrese una operacion")

calculadora(numero1, numero2, operacion)