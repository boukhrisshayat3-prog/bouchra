// Buscando a Iron Man 📝 Enunciado 
// Crea una función asíncrona llamada obtenerVengador.
// Dentro de un bloque try, haz un fetch a la URL de Iron Man: https://akabab.github.io/superhero-api/api/id/346.json.
// Convierte la respuesta a JSON.
// Imprime en consola: "Nombre Real: [fullName]" y su inteligencia (intelligence) que está dentro de powerstats.
// En el catch, imprime: "Error al contactar con la base de datos de Avengers".
// Si quieres seleccionar tu propio super heroe, puedes revisar → https://akabab.github.io/superhero-api/api/glossary.htmlÇgit commit -m "feature-contacto"
async function obtenerVengador() {
  try {
    const res = await fetch('https://akabab.github.io/superhero-api/api/id/346.json');
    if (!res.ok) throw new Error('No encontrado');
    const hero = await res.json();

    const fullName = hero.biography?.fullName ?? 'Desconocido';
    const intelligence = hero.powerstats?.intelligence ?? 'Desconocido';

    console.log(`Nombre Real: ${fullName}`);
    console.log(`Inteligencia: ${intelligence}`);
  } catch (err) {
    console.log('Error al contactar con la base de datos de Avengers');
  }
}


obtenerVengador();