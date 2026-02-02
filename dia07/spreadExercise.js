// Ejercicio Clonar y Combinar Objetos
// Enunciado:
// Tienes un objeto usuario con nombre y email.
// Crea un segundo objeto detalles con rol y pais.
// Usa el operador spread para crear un nuevo objeto llamado usuarioCompleto que combine las propiedades de ambos.
// Importante: Añade una propiedad extra id: 1 al momento de crear usuarioCompleto sin modificar los originales.

const usuario ={
    nombre:"Ana",
    email: "Ana@algo.com"
}

const detalles={
    rol:"desarallodora",
    pais:"Peru"
}
const usuarioCompleto ={ ...usuario, ...detalles, id: 1}
console.log(usuarioCompleto)
console.log(usuarioCompleto.nombre)