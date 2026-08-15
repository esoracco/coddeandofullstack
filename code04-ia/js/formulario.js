// Función para recibir y procesar el formulario
function recibirDatos(event) {
    // Evita que la página se recargue automáticamente al enviar
    if (event) event.preventDefault();

    // 1. Obtenemos los valores de los inputs
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("Nombre registrado:", nombre);
    console.log("Email registrado:", email);
    console.log("Password registrado:", password);

    // 2. Ejecutamos el login pasando los datos capturados
    loginUsuario(nombre, email, password);
}

// Función para validar el acceso del usuario
function loginUsuario(nombre, email, password) {
    let admin = "Mario";
    let pass = "1234";
    let emailAdmin = "mario@example.com";

    if (nombre === admin) {
        alert("Bienvenido " + nombre);
        window.location.href = "../pages/admin.html";
    } else {
        alert("Usuario no registrado");
        window.location.href = "../pages/error.html";
    }
}