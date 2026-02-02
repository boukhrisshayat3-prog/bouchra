function esperarDosSegundos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("✅ ¡Tiempo completado!");
        }, 2000);
    });
}
async function cocinar() {
    console.log("calentando el horno...")
    await esperarDosSegundos()
    console.log("horeando la pizza...")
    await esperarDosSegundos()
    console.log("a comer")
}
cocinar()