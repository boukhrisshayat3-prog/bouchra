// Ejercicio Generador de Tickets
// Enunciado: 
// 1. Tienes un array de productos: ["Monitor", "Teclado", "Mouse"]. 
// 2. Usa forEach para imprimir en consola: "Producto [índice + 1]: [nombre]". 
// 3. Pista: Recuerda que el segundo parámetro de la función de callback es el índice.
// Ejercicio Conteo de Stock
// Enunciado: 
// 1. Tienes un array de cantidades: [5, 12, 8, 20]. 
// 2. Crea una variable totalStock inicializada en 0. 
// 3. Usa forEach para sumar cada cantidad a totalStock e imprime el resultado final.
const productos= ["Monitor", "Teclado", "Mouse"]
productos.forEach((producto, i)=>{
    console.log(`Producto ${i + 1}: ${producto}`)//wela ndiro ++i

})
const cantidades =[5, 12, 8, 20];
let totalStock =0;
cantidades.forEach(cantidad =>{
    totalStock += cantidad
})
console.log(`el total de stock es: ${totalStock}`)
