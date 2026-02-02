// Crea una función asíncrona llamada obtenerDatos.
// Dentro de un bloque try, utiliza fetch para llamar a la API: https://jsonplaceholder.typicode.com/users/1.
// Convierte la respuesta a JSON usando await.
// Imprime el nombre del usuario obtenido.
// En el bloque catch, imprime un mensaje de error que diga: "Hubo un problema con la petición".
const fetch = require('node-fetch');
// async function obtenerDatos() {
//     try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users/1')
//         const usuario = await response.json()
//         console.log(usuario)
//     } catch (error) {
//         console.log('Hubo un problema con la peticion')

//     }
    
// }

// obtenerDatos()

async function getData() {
    try {
        const user = "arperezch13"
        const reply = await fetch (`https://api.github.com/users/${user}`)
        const data = await reply.json 
        console.log(data)
    } catch (error) {
        console.error ('Hubo un problema con la peticion')
    }
}

getData()