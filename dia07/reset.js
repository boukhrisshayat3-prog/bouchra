
// Enunciado:
// Tienes un objeto usuario con nombre y email.
// Crea un segundo objeto detalles con rol y pais.
// Usa el operador spread para crear un nuevo objeto llamado usuarioCompleto que combine las propiedades de ambos.
// Importante: Añade una propiedad extra id: 1 al momento de crear usuarioCompleto sin modificar los originales.

// const usuario = {
//     nombre: "Ana",
//     email: "ana@algo.com"
// }

// const detalles = {
//     rol: "Desarrolladora",
//     pais: "Peru", 
// }
// const usuarioCompleto={...usuario, ...detalles, id: 1}
// console.log(usuarioCompleto)
// Ejercicio Limpiando objetos (Excluir propiedades)
// Enunciado:
// Recibes un objeto de una API con datos sensibles: const empleado = { id: 5, pass: "123456", nombre: "Pepe", puesto: "Dev" };.
// Usa desestructuración y rest para separar la pass del resto de los datos.
// Guarda el resto de la información en un objeto llamado datosPublicos.
// Imprime datosPublicos para verificar que la contraseña no está ahí.
 const empleado = { id: 5, pass: "123456", nombre: "Pepe", puesto: "Dev" };
 const {pass, ...otrosEmpleado} = empleado
 const datosPublicos = {...otrosEmpleado}
 console.log(datosPublicos)