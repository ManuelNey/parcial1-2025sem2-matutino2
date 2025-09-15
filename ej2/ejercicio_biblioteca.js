/**
 * EJERCICIO DE PARCIAL: SISTEMA DE GESTIÓN DE BIBLIOTECA UNIVERSITARIA
 * 
 * OBJETIVO: Implementar un sistema que permita gestionar los préstamos de libros 
 * en una biblioteca universitaria, aplicando conceptos avanzados de manipulación
 * de objetos y arrays en JavaScript.
 * 
 * INSTRUCCIONES:
 * 1. Analiza la estructura de datos proporcionada
 * 2. Implementa todas las funciones requeridas 
 * 3. Prueba tus funciones con los datos de ejemplo y los casos de prueba proporcionados
 * 4. NO modifiques la estructura base de los objetos, solo añade las funcionalidades solicitadas
 */

// Importamos los datos desde el archivo JSON usando ES6 import
import bibliotecaData from './datos_biblioteca.json' with { type: 'json' };

// Creamos una copia de los datos para trabajar con ellos
const biblioteca = { ...bibliotecaData };
/**
 * FUNCIONES A IMPLEMENTAR:
 */

/**
 * 1. Función para prestar un libro
 * 
 * Implementa una función que gestione el proceso de préstamo de un libro a un estudiante.
 * Deberás realizar las validaciones necesarias y actualizar los registros correspondientes.
 * 
 * @param {number} idLibro - ID del libro a prestar
 * @param {number} idEstudiante - ID del estudiante que pide prestado
 * @param {string} fechaPrestamo - Fecha del préstamo (formato YYYY-MM-DD)
 * @return {boolean|string} - true si se realizó el préstamo, mensaje de error si no
 */
function prestarLibro(idLibro, idEstudiante, fechaPrestamo) {
    let libroABuscar = null;
    for (const libroActual of biblioteca.libros) {
        if (libroActual.id === idLibro) {
            libroABuscar = libroActual;
            break; //Corto si lo encuentro
        }
    }
    if (libroABuscar === null || libroABuscar.disponible === false) {
        console.log("El libro no está o no está disponible ahora ");
        return false
    }

    let estudianteElegido = null;
    for (const estudianteActual of biblioteca.estudiantes) {
        if (estudianteActual.id === idEstudiante) {
            estudianteElegido = estudianteActual;
            break; //Si lo encuentro corto
        }
    }
    if (estudianteElegido === null) {
        console.log("El estudainte que se mandó no está");
        return false;
    }
    //En esta parte solo se lelga si el libro está
    libroABuscar.disponible = false; //El libro ya no esta disponible

    //TOmo el formato del json prestamos:[
    //         { "estudiante": "Ana García", "fechaPrestamo": "2025-08-15", "fechaDevolucion": null }
    //       ]
    libroABuscar.prestamos.push({
        idEstudiante: idEstudiante,
        fechaPrestamo: fechaPrestamo,
        fechaDevolucion: null
    });

    estudianteElegido.librosActuales.push({
        idLibro: idLibro,
        fechaPrestamo: fechaPrestamo
    });

    return true;
}

/**
 * 2. Función para buscar libros
 * 
 * Desarrolla una función de búsqueda flexible que permita encontrar libros 
 * según diversos criterios como título, autor, categoría y disponibilidad.
 * 
 * @param {object} criterios - Objeto con los criterios de búsqueda
 * @return {array} - Array con los libros que cumplen los criterios
 */
function buscarLibros(criterios) {
    const resultados = [];
    for (const libro of biblioteca.libros) {
        let cumpleCriterio = true;
        for (const atributo in criterios) { //Veo si coincido con el algún atributo
            if (libro[atributo] !== criterios[atributo]) {
                cumpleCriterio = false; //Si no me sirve lo saco
                break;
            }
        }
        if (cumpleCriterio) {
            resultados.push(libro);
        }
    }
    return resultados;

}


// ALGUNOS CASOS DE PRUEBA
// Descomentar para probar tu implementación


console.log("Probando préstamo de libro:");
console.log(prestarLibro(1, 3, "2025-09-13"));

console.log(prestarLibro(1, 4, "2025-09-13"));
console.log("\nBuscando libros de programación disponibles:");
console.log(buscarLibros({categoria: "Programación", disponible: true}));


