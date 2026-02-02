const products =[
   {
       nombre:"Laptop",
       precio:"500$",
       stock:5
   },
    {
       nombre:"Mouse",
       precio:"$",
       stock:10
   },  {
       nombre:"Teclado",
       precio:"30$",
       stock:20
   }
]
function calcularTolal(producto, cantidad){
   const subtotal =producto.precio * cantidad;
   const impuesto =subtotal*0.21;
  let precioFinal = subtotal + impuesto
  if (precioFinal > 100){
   precioFinal=precioFinal-10
  }
  return precioFinal


}
const cantidadDeseada =3
const productoEligida =products[0]
const totalAPagar =calcularTolal(productoEligida, cantidadDeseada)
calcularTolal([0])
console.log(`Has comprado ${cantidadDeseada}unidades de ${productoEligida.nombre} El total a pagar ${totalAPagar}$`)



