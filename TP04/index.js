// TRABAJO PRÁCTICO N° 04 - CODDEANDO
// ==========================================

// Paso 1: Perfil del estudiante 
let nombre = "Enzo";
let edad = 16;
let sabeProgramar = true;
let horasDisponibles = 15;

// Paso 2: Lógica de clasificación

// 1. Ruta Intensiva
if (edad >= 18 && sabeProgramar) {
    console.log(`¡Hola ${nombre}! Estás listo para el Bootcamp Avanzado de Coddeando.`);
}

// 2. Ruta Fundamentos
else if (!sabeProgramar || horasDisponibles < 10) {
    console.log(`¡Hola ${nombre}! Te recomendamos empezar con el Curso de Fundamentos a tu ritmo.`);
}

// 3. Ruta General
else {
    console.log(`¡Bienvenido ${nombre}! Tu perfil es perfecto para el programa estándar.`);
}


// PRUEBA 1 (Ruta Intensiva):
// Configuración: edad = 20, sabeProgramar = true, horasDisponibles = 15
// Consola: "¡Hola Enzo! Estás listo para el Bootcamp Avanzado de Coddeando."
//
// PRUEBA 2 (Ruta Fundamentos):
// Configuración: edad = 20, sabeProgramar = false, horasDisponibles = 5
// Consola: "¡Hola Enzo! Te recomendamos empezar con el Curso de Fundamentos a tu ritmo."
//
// PRUEBA 3 (Ruta General):
// Configuración: edad = 16, sabeProgramar = true, horasDisponibles = 15
// Consola: "¡Bienvenido Enzo! Tu perfil es perfecto para el programa estándar."
