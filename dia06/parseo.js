const respuestaServidor = '{"producto": "Monitor", "precio": 250, "stock": true}'
const data = JSON.parse(respuestaServidor)
console.log(data.producto)
console.log(data.precio)