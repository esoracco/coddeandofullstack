let contatoForm = document.getElementById("contactoForm");

//2. Agregamos evento al formulario;

contactoForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    // Evita que el formulario se envíe sin datos
//capturamos losdatos del formulario

let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let telefono = document.getElementById("telefono").value;
let pais = document.getElementById("pais").value;
let provincia = document.getElementById("provincia").value;
let comentario = document.getElementById("comentario").value;

//creamos un objeto con los datos del formulario
let contacto = {
    nombreContacto: nombre,
    emailContacto: email,
    telefonoContacto: telefono,
    paisContacto: pais,
    provinciaContacto: provincia,
    comentarioContacto: comentario
};

//3 envio los datos la backend con fetch
fetch("http://localhost:8080/contacto", {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(contacto)
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));
});

