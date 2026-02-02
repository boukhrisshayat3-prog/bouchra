function notificarUsuario() {
    console.log("tu archivo ya esta listo para ver")
}
function descargarArchivo(nombre, accionAlTerminar){
    console.log(`Iniciando la descarga de : ${nombre}...`)
    setTimeout(()=>{
        accionAlTerminar()
    },2000)
}
console.log("--- el programa empieza ---")
descargarArchivo("lost in translation", notificarUsuario)
console.log("El programa sigue haciendo sus cocas mientra descarga")