
//creamos nuestro promessa
const miPedidoDePizza = new Promise ((resolve, rejectada)=>{
    const hayIngredientes =true;
    if(hayIngredientes){
        setTimeout(()=>{
            resolve("Aqui tienes tu pizza ")
        },2000)
    }else{
        rejectada("lo sentimos, no queda mesa")
    }
})
//ahora consumimos nuestro promesa
 console.log("Pedi Pizza")
 miPedidoDePizza

 .then((mensaje)=>{
 console.log("exito" + mensaje)
 })
 .catch((error)=>{
   console.log("error"+ error)
 })
 console.log("mientras espero...")