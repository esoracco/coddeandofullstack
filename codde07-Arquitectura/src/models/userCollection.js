//1. IMportar a Mongoose
const mongoose = require('mongoose');

//2. importamos el Schema de Mongoose
const { Schema } = mongoose;

//3. creamos la estructuta de la coleccion
const userSchema = new Schema({
    nombreContacto: {
        type: String,
        required: true
    },
    emailContacto: {
        type: String,
        required: true
    },telefonoContacto: {
        type: String,
        required: true              
},
    paisContacto: {
        type: String, 
        required: true
    },
    provinciaContacto: { 
        type: String,
        required: true
    },
    comentarioContacto: {
        type: String,
        required: true
    }
});

//4. Asignamos un nomnre a la coleccion
const User = mongoose.model('User', userSchema);

//5. exportamos la coleccion
module.exports = User;