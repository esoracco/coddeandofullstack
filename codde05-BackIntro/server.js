
//1. Usamos un modulo de NOde.js llamado os, que nos permite obtener informacion
// del sistema operativo
//2. Creamos una variable para utilizar el 
// modulo os y obtener informacion del sistema operativo

//una carpeta de info
const os = require("node:os");

//fs es un modulo de node.js que nos permite trabajar con el sistema de archivos
const fs = require("node:fs");

const mercadoPago = require("mercadopago");

// Usamos la variable creada para obtener informacion del sistema
//  operativo y la mostramos en consola

let espacioLibreCompu = os.freemem();
let espacioTotalCompu = os.totalmem();

console.log(espacioLibreCompu);
console.log(espacioTotalCompu);

//usamoa el modulo fs para crear un archivollamado
//info.txt y dentro del archivo guardamos la informacion del sistema operativo
fs.writeFileSync("info.txt","Espacio libre de la computadora: " + espacioLibreCompu + "\n" + "Espacio total de la computadora: " + espacioTotalCompu);



    //4. usamos la variable creada para obtener informacion del 
// sistema operativo y la mostramos en consola

