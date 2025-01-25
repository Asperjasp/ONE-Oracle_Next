
// It is more similar to the bash script alias so to unpack the variable you use $

let numeroSecreto = 6;
// let is block-scoped
// var is not block scoped
// It was done for solving
/*
One of the issues with using the var keyword was redeclaring a variable inside a block will also redeclare the variable outside the block. 
*/
let numeroUsuario = prompt("Me indicas un numero por favor:");
// It prompts an alert

// El bavegador de chrome se puede cambiar 
// La consola nos va a acompañar durante 
console.log(numeroUsuario); // esto lo imprime en la consola no ahce nada mas
// Es el print the javascript 

if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste el número y era ${numeroSecreto}`);
}
while(numeroSecreto != numeroUsuario){
 numeroUsuario = prompt("Me indicas un numero por favor:"); // Esrtoy reasingando por eos no funciona
}

alert("Bienvenido a nueestro Sitio Web!!")
let Lenguage = "Lua"
let edad = 25
let numero_ventas = 25
let saldoDisponible = 25
alert("Completa todos los campos")

let Mensaje_Error = "¡Error! Completa todos los campos"

// NOte que podemos extraer el valor del ´rompt
let nombre_usuario = prompt("Ingresa tu nombre ")
let Edad_usuario = prompt("Ingresa tu edad ")
if (Edad_usuario >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!")
} else {
    alert("Lo siento, no puedes obtener tu licencia de conducir. Puees tu tienes "+ Edad_usuario+ "Entiendes?")
}

// Los alerts se almacenan
