// Vamos a crear una promesa que simule el azar.
// Instrucciones:
// Crea un archivo promesas.js.
// Crea una función que retorne una Promesa llamada jugarLoteria.
// Dentro de la promesa, usa un setTimeout de 2 segundos.
// Genera un número aleatorio (Math.random()).
// Si el número es mayor a 0.5, llama a resolve("¡Ganaste la lotería!").
// Si es menor o igual, llama a reject("Perdiste, sigue intentando").
// Fuera de la función, "juega" a la lotería:
// Usa .then para celebrar si ganas.
// Usa .catch para lamentarte si pierdes.

const jugarLoteria = new Promise((resolve, reject)=>{
    console.log("girand el bombo...")
    setTimeout(() => {
        const numero = Math.random();
        if(numero > 0.5){
            resolve("premio!!!, bocatos para todods ")
        }else{
            reject("que triste!!, mala suerte")
        }
    }, 2000);
})
jugarLoteria
.then((premio)=>{
    console.log(premio)
})
.catch((mensajeError)=>{
    console.log(mensajeError)
})
.finally(()=>{
    console.log("el juego ha terminado")
})