//Importamos lo módulos/paquetes/librerías que necesitamos
const express = require("express");  //crea el backend
const dotenv = require("dotenv");  //guarda y lee las variables de entorno
const app = express(); //creamos la app de express
dotenv.config(); //ejecuta la configuración de las variables de entorno
const path = require("node:path"); //permite trabajar con rutas de archivos

const PORT = process.env.PORT || 3000;

// Middleware: función que se ejecuta entre el request y el response
// Se utiliza para procesar los datos antes de que lleguen a la ruta
function saludar(req, res, next) {
  console.log("Buenos Días");
  if (req.url === "/middleware") {
    res.send("Hello World!");
  } else {
    next();
  }
}

// Configuramos que mi app use el Middleware llamado saludar
app.use(saludar);

// Usamos el middleware para ver los archivos del directorio public
app.use(express.static(path.join(__dirname, "./public")));

// Middleware para leer los datos del formulario
app.use(express.json());



// Post para recibir los datos del formulario
app.post('/contacto', (req, res)=>{
  console.log(req.body);
  res.json({
    data: "Contacto recibido con éxito",
  });
});



// Middleware para error de páginas o rutas no encontradas
app.use((req, res, next) => {
  res.status(404).send(
    <h1 style="color: red; margin-top: 50px; text-align: center;">
      404 Not Found
    </h1>
    );
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});