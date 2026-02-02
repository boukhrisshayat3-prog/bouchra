// Crea un objeto dev con las propiedades: nombre ("Luis"), tecnologia ("JavaScript") y experiencia (3).
// Usa desestructuración para crear tres variables independientes con los mismos nombres.
// Imprime en consola un mensaje usando Template Literals: "Luis tiene 3 años de experiencia en JavaScript".

// const dev = {
//     nombre: "Luis",
//     tecnologia: "JavaScript",
//     experiencia: 3
// }

// const {nombre, tecnologia, experiencia} = dev
// console.log(`${nombre} tiene ${experiencia} años de experiencia en ${tecnologia}`)


// Tienes el objeto: const mascota = { nombre: "Firulais", tipo: "Perro" };.
// Extrae la propiedad nombre, pero renómbrala a nombreMascota durante la desestructuración.
// Extrae la propiedad edad, y como no existe en el objeto, asígnale un valor por defecto de 0.
// Imprime ambas variables.

const mascota = {
    name: "Firulais",
    tipo: "Perro"
    
}
const {name: nombreMascota, edad = 0} = mascota

console.log(nombreMascota, edad)
