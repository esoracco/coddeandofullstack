// nuestra app de cambio de moneda

// 1. creamos las variables
let pesoArgentino 
let pesoChileno 
let dolarAmericano

// 2. le asignamos valores a las variables
pesoArgentino = 1500
pesoChileno = 999
dolarAmericano = 1

let cambioPesoArgentino = true
let cambioPesoChileno = true

// 3. logica del negocio/ condicional if = si se cumple la condicion, se ejecuta el bloque de codigo que esta dentro de las llaves
if(cambioPesoArgentino ){

    let cambiar = dolarAmericano * pesoArgentino
    console.log("Te damos: " + cambiar + " pesosArgentinos");

}
if(cambioPesoChileno){
    let cambiar = dolarAmericano * pesoChileno
    console.log("Te damos: " + cambiar + " pesosChilenos");
}

// estructura del if
//if(valor a evaluar: verdadero o falso){
    // aqui va todo el codigo que se ejecuta cuando es verdderobloque de codigo a ejecutar si la condicion es verdadera
//}
