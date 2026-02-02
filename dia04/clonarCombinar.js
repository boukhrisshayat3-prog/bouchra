// Ejercicio: Clonar y Combinar Objetos

const usuario = {
  nombre: 'Ana',
  email: 'ana@example.com'
};

const detalles = {
  rol: 'admin',
  pais: 'España'
};

const usuarioCompleto = { ...usuario, ...detalles, id: 1 };

console.log('usuario:', usuario);
console.log('detalles:', detalles);
console.log('usuarioCompleto:', usuarioCompleto);

module.exports = { usuario, detalles, usuarioCompleto };
