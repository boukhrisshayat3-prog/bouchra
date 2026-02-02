// Ejercicio El resto de los invitados (Destructuring + Rest)
// Enunciado:
// Tienes un array: const invitados = ["Carlos", "Maria", "Juan", "Lucas", "Rosa"];.
// Usa desestructuración para asignar a "Carlos" a la variable anfitrion.
// Usa el operador rest para agrupar a todos los demás nombres en un array llamado otrosInvitados.
// Imprime ambas variables.

const invitados =["Jorge", "Ana", "Bouchra", "Daniel"]
const [anfitrion, ...otrosInvitados] =invitados;
console.log(`el anfitrion es: ${anfitrion}`)
console.log(`los demas otros ${otrosInvitados}`)