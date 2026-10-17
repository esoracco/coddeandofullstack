

//cometario de una sola linea

/*
comentario de 
varias 
lineas
*/


// Creamos la función que se ejecutará cuando se envíe el formulario

function recibirDatos() {
  
  //1. Crear Variables
  // var como palabra reservada para crear variables
  var nombre = document.getElementById("nombre").value
  
  // let como palabra reservada para crear variables
  let email = document.getElementById("email").value
  
  // let como palabra reservada para crear variables
  let password = document.getElementById("password").value
  
  console.log(nombre)
  console.log(email)
  console.log(password)


  // Login de acceso a una cuenta de usuario
  // usamos el condicional if

  let admin = "Mario"
  let pass = "1234"
  let emailAdmin = "mario@example.com"

  if(nombre == admin){
    //ventana de alerta de bienvenida al usuario
    alert("Bienvenido " + nombre)

    //redireccionamos a otra página
    window.location.href = "../pages/admin.html"

  }else{
    alert("Usuario no registrado")

    //enviarlo a la página del error
    window.location.href = "../pages/error.html"
  } 

}










//Función: bloque de código que se ejecuta cuando es llamado

// estructura de una función
//function suma(reibe info) { todo el código que se ejecuta}

function suma(numeroUno, numeroDos) {

  let resultado = numeroUno + numeroDos

  console.log(resultado)

}

suma(10, 20)

suma(30, 40)

suma(50, 60) 

/*
let uno = 10
let dos = 20

let suma = uno + dos

console.log(suma)

uno = 30
dos = 40

let suma2 = uno + dos

console.log(suma2)

uno = 50
dos = 60

let suma3 = uno + dos

console.log(suma3)
*/