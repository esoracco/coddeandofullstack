
// 1. Importar el modulo de mongoose
const mongoose = require('mongoose');

// 2. Creamos una función para la conexión a la base de datos
const conexionDB = async () =>{

  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/arquitectura');
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }

};

// 3. Exportamos la función de conexión
module.exports = conexionDB;