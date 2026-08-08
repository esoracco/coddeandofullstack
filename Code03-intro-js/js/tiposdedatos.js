//string: cadena de caracteres, es decir, un conjunto de letras, numeros y simbolos que van entre comillas simples o dobles
// camelcase, nombrar variables en minusculas y la primera letra de la otra palabra en mayuscula

//con doble comillas
let direccionEmpleado = "Calle falsa 123";
let direccionUsuario = "Calle real 456";
//con comillas simples
let direccionCliente = 'Calle comercial 789';
let direccionProveedor = 'Calle industrial 101112';

//templete strings
let direccionSucursales = `Calle central 131415`;

// no iniciar con nuneros
//var 123456 = "pepe"

// no agregar espacios en blanco
//const hola Cliente = "bienvenido"; // no se puede agregar espacios en blanco

direccionUsuario = `Calle central 131415`;
console.log(direccionUsuario);

 direccionSucursales = `Calle central 131415`;
console.log(direccionSucursales);

const DNI = `12345678`;
console.log(DNI);

//CONCATENACION DE DATOS: agregar texto a la variables para la impresion en consola, se puede hacer con el signo + o con las comillas invertidas ``
console.log("La direccion del empleado es: " + direccionEmpleado);

console.log (`La direccion del empleado es: ` + direccionUsuario);
//con el tempmplete evito el simbolo de + y agrego llaves y $ para las variables que quiero imprimir en consola
console.log(`La direccion de la sucursal es: ${direccionEmpleado}`);

console.log("================================");

// 1. Numwericos: numeros para operaciones matematicas, se pueden usar con o sin decimales
let numero1 = 10;
let numero2 = 20;
let numero3 = 30.5;

console.log("================================");


let precioPan = 15;
let precioCafe = 20.50;

let resultado = precioPan + precioCafe;
console.log("el precio total de la compra de pan y cafe es: " + resultado);

let gaseosa = 3000;
let galletas = 2500;
let alfajor = 1800;
let pagoCompra = gaseosa + galletas + alfajor;
console.log("el costo total de la compra es: " + pagoCompra + " pesos");