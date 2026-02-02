// Ejercicio Formateo de Usuarios
// Enunciado:
// 1. Tienes un array de objetos: [{n: "ana"}, {n: "juan"}]. 
// 2. Usa map para crear un nuevo array donde los nombres estén en mayúsculas y la propiedad se llame nombreCompleto. 
// 3. Resultado esperado: [{nombreCompleto: "ANA"}, {nombreCompleto: "JUAN"}].
// Ejercicio Convertidor de Moneda
// Enunciado: 
// 1. Tienes precios en dólares: [10, 50, 100]. 
// 2. Crea un nuevo array llamado preciosEuros multiplicando cada precio por 0.92. 
// 3. Imprime el array resultante.

const usuarios =[{n: "ana"}, {n: "juan"}];
const usuariosFormateados = usuarios.map(usuario =>({
    nombreCompleto: usuario.n.toUpperCase()
}));
console.log(usuariosFormateados);

// const preciosDolares =[10, 50, 100];
// const preciosEuros =preciosDolares.map(precio => precio *0.92);
// console.log(preciosEuros);

