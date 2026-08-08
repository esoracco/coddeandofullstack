console.log("3. Hola desde archivo externo");

//. Esta es la forma de comentar un codigo en javaScript
/*
todo lo que este entre estas lineas es un comentario

*/
// ==========================
// 1. variables en js
// ==========================

// 1. variables con var
var nombre = "Tony";
var apellido = "Stark";
var edad = 45;

// variable: espacio de memoria para guardar informacion

// palabra reservada - nombre de la variable: esto es declarar una variable
var cajadejuguetes;

var cajadelibros;

// asignar un valor a la variable
cajadejuguetes = "Carro de juguete";
cajadelibros = "El señor de los anillos";

var cajadejuguetes = "Carro de juguete";
var cajadelibros = "El señor de los anillos";
// Usamos las variables para lo que necesitemos: la buscamos con el nombre que le asignamos y la usamos
// imorimimos en consola el valor de la variable
console.log(cajadejuguetes);
console.log(cajadelibros); // evitar usar var para no pisar las varibles anteriores, ya que var es global y puede ser modificada en cualquier parte del codigo
var cajadejuguetes = "Hola"
//=================================================
// 2. variables con let
//=================================================
// let es una variable de alcance local, solo se puede usar dentro del bloque donde fue declarada

//crear una variable con let
let persona;

persona ="Enzo"
//imprimimos valor
console.log(persona);
//crear una variavle y asignarle valor 
let provincia = "Mendoza";

//no puedo re declarar la variable persona, ya existe
//let persona = 25256478
persona =12345678
console.log(persona);


 let miEdad; // En lugar de 'let edad;'

console.log(miEdad)


// 3. variables con const = para datos que no cambian, es decir, su valor no puede ser modificado
// const es una variable de alcance local, solo se puede usar dentro del bloque donde fue declarada
// const es una variable que no puede ser modificada, es decir, su valor no puede ser cambiado
//===============================================
// laa const se deben asignar cuando se declaran
const DNI = 999999;
console.log(DNI);
//no podemos reasignar DNI con const
 //DNI = "tony@stark.com"
 //no podemos redeclarar DNI con const
 //const DNI = "Mario Perez"
