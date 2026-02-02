// Enunciado:
// Tienes el siguiente string que representa una tarea de una base de datos: '{"id": 1, "tarea": "Aprender Fetch", "completada": false}'.
// Transfórmalo a objeto.
// Cambia la propiedad completada a true mediante código.
// Imprime el objeto final para ver el cambio

const baseDeDatos = '{"id": 1, "tarea": "Aprender Fetch", "completada": false}'
const datosObj = JSON.parse(baseDeDatos)

datosObj.completada = true

console.log(datosObj.completada)