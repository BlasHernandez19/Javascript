/*EJERCICIO PÁG 32

// result = window.prompt("Cuál es tu nombre? ");


// function hola(){
//     alert(result)
// }
// if(result.toLowerCase()=="Mario"){
//     alert("Gay")
// }

// hola();

//EJERCICIO 2 PAG 51

// Numbers:
let length = 16;
let weight = 7.5;


// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


console.log(typeof length + ": " + length+ ", " + typeof weight + ": " + weight + ", " +
 typeof  x +": " + x + ", " + typeof y +": "+ y + ", " +
  typeof cars + ": " + cars + "\n" + typeof date +": " + date);

*/
/*EJERCICIOS PÁG 64


let obtenerNombreCompleto = () => {
    nombre = "blas";
    apellido = "hernández";

    return nombre + " " + apellido;
  };

  console.log(obtenerNombreCompleto());


  function saludar(edad){
    edad = false;
    console.log(edad);
  }
  saludar();

  const saludar = function(...valores){
    valores.forEach(element => {
        console.log("hola " + element)
    });
  };

  saludar("1","2","3","4","5");


*/
/*EJERCICIOS PÁG 74 & 75

function hola(){
  if(Math.round(Math.random())==1){
    console.log( "1 = Cara ");


  }else{
    console.log("0 = Cruz");
  }

}
hola();

 EJ 1 PÁG 75
const sumar = (a, b, c) =>
  console.log(a + "+ " + b + " + " + c + " = " + (a + b + c));
sumar(1, 2, 3);

EJ 2

const nombreFull = (a, b, c) => {
  a = "Blas";
  b = "Hernández";
  c = "Rodas";
  console.log(a, b, c);
}

nombreFull();

// EJERCICIO 3
const dosNumeros = (a, b) => {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
dosNumeros();
*/
/*EJERCICIOS PÁG 81


let mes = 3;
switch (mes) {
  case 1:
    console.log("Enero");
    break;
  case 2:
    console.log("Febrero");
    break;
  case 3:
    console.log("Marzo");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Mayo");
    break;
  case 6:
    console.log("Junio");
    break;
  case 7:
    console.log("Julio");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Septiembre");
    break;
  case 10:
    console.log("Octubre");
    break;
  case 11:
    console.log("Noviembre");
    break;
  case 12:
    console.log("Diciembre");
    break;
  default:
    console.error("No xd")
    break;
}
let valor = "3";
switch (valor) {
  case "1":
    valor = 1;
    console.log(valor, typeof valor);
    break;
  case "2":
    valor = 2;
    console.log(valor, typeof valor);
    break;
  case "3":
    valor = 3;
    console.log(valor, typeof valor);
    break;
  case "4":
    valor = 4;
    console.log(valor, typeof valor);
    break;
  case "5":
    valor = 5;
    console.log(valor, typeof valor);
    break;
  default:
    console.error("xd")
    break;
}
*/
/*EJERCICIOS PÁG 84

//EJ 1
console.log(Math.floor(Math.random() * 2));
//EJ 2
console.log(Math.round(Math.random()));
console.log(Math.round(Math.PI * 1000) / 1000);
*/
/*EJERCICIOS PÁG 87

let palabra = "holaketal";

const reemplazar = () => {
  console.log(palabra.replace("a", "o"));
}

reemplazar();
let tipo;
const academiaxd = (tipo) => {
  console.log(tipo.startsWith("aca"))

}
academiaxd("academia");

academiaxd("escuela");

let saludo = "Hola";
const saludar = (saludo) => {
  if (saludo == "Hola") {
    console.log("hola")
    console.log("hola")
    console.log("hola")
  }
}

saludar("Hola");
*/
/*EJERCICIOS PÁG 94

for (let index = 1; index < 11; index++) {
  console.log("I love code " + index);

};

console.log("\nAhora con while \n")
hola = 1;

while (hola < 11) {
  console.log("I love code " + hola);
  hola++;
};
*/
/*EJERCICIOS PÁG 95
//EJ 1
hola = ["a", "b", "c", "d", "e"]

hola.forEach(element => {
  console.log(element + "\n")
});
//EJ 2
let number = 5;
console.log(number);
while (number > 0) {
  number--;
  console.log(number)
};
*/
/*EJERCICIOS PÁG 96
let numero = 1;
let i = 0;
do {
  if (i === 0) {
    i++;
    numero--;
    console.log(numero);
  } else {
    numero++;
    console.log(numero)
  }
} while (numero < 5);

// Da 6 iteraciones, entra una vez en el if y después
// sigue entrando en el else hasta que numero es 5
*/
/*EJERCICIOS PÁG 108
//EJERCICIO 1
const arr1 = ["🍔", "🌯", "🍩", "🍕",
  "🍜", "🍱", "🥞", "🧇", "🍖"];
const startIndex = arr1.indexOf("🍕");  // Obtenemos el índice de la pizza
const replacedArr = arr1.fill("🍺", startIndex);  // Rellenamos con "🍺" a partir del índice de la pizza

console.log(replacedArr);

//EJERCICIO 2
const arr1 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
const hasPineapple = arr1.includes("🍍");

console.log(hasPineapple);

//EJERCICIO 3

const arr1 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
const index = arr1.indexOf("🍍");

if (index !== -1) {
  arr1.splice(index, 1);
}

console.log(arr1);

//EJERCICIO 4

const arr1 = ["🍓", "🍋", "🍓", "🍋", "🍓"];
const convertedArr = arr1.map(element =>
  element === "🍓" ? "🍄" : element);

console.log(convertedArr);

//EJERCICIO 5


const arr1 = ["🌶", "🥛", "🌶", "🥛", "🌶", "🥛"];
const updatedArr = arr1.flatMap(element => element === "🌶" ? [element, "🥵"] : element);

console.log(updatedArr)


//EJERCICIO 6
const arr1 = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];
const updatedArr = arr1.map((element, index, array) => {
  return (element !== "🃏" && array[index + 1] !== "🃏") ? [element, "🃏"] : element;
}).flat();

console.log(updatedArr);

*/
/*EJERCICIO PÁG 204
EJERCICIOS PÁG 205
const btns = document.querySelectorAll(".button");
const p = document.querySelector("p");

btns.forEach((btn) => {
  btn.onclick = () => {
    p.classList.toggle("red");
  }
});
var secondButton = document.querySelectorAll('.button')[1];
var paragraph = document.getElementById('23');

secondButton.addEventListener('click', function () {
  paragraph.classList.toggle('blue');
});
*/




