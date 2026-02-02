// Enunciado: 
// 1. Tienes un array de nombres de usuarios: ["Ana", "Luis", "Maria"]. 
// 2. Usa forEach para imprimir en consola un saludo para cada uno: "Hola, [nombre], bienvenido al curso".
// const nombre =["Ana", "Luis", "Maria"]
// nombres.array.forEach(nombre => {
//     console.log(`hola, ${nombre} `)
    
// });
// Enunciado: 
// 1. Tienes un array de precios: [100, 200, 300]. 
// 2. Crea un nuevo array llamado preciosConIVA donde cada precio tenga el 21% de IVA sumado. 
// 3. Imprime el nuevo array.
// const precios=[100, 200, 300];
// const preciosConIva=precios.map(p => p*1.21);
// const precioSumado = precios.map(sumatoria => sumatoria +10)
// console.log(preciosConIva)
// console.log(precioSumado)

// Enunciado: 
// 1. Tienes un array de objetos productos: [{nombre: "PC", precio: 800}, {nombre: "Mouse", precio: 20}, {nombre: "Teclado", precio: 50}]. 
// 2. Filtra los productos que cuesten más de 100 USD para crear un array de productosPremium.
// 
// Enunciado: 
// 1. Tienes un array de gastos: [15.50, 20, 5.75, 10]. 
// 2. Usa reduce para obtener el total de la suma de todos los gastos. 
// 3. El valor inicial del acumulador debe ser 0.
const gastos= [15.50, 20, 5.75, 10]
const total =gastos.reduce((acumulador, actual)=>acumulador + actual, 0)
console.log(`el total de gastos es ${total}`)