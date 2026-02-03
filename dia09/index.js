// Ejercicio 2: Desarrollando una funcionalidad 
// Objetivo: Simular el trabajo diario de un desarrollador: crear una rama para una tarea, terminarla y subirla a la versión oficial.
// Desde la rama main, crea una rama para desarrollar el área de contactos: git checkout -b feature-contacto
// Crea el archivo contacto.html.
// Guarda tu progreso: git add contacto.html git commit -m "Añadir página de contacto"
// Imagina que la tarea está terminada y aprobada. Ahora debes llevar este archivo a la rama principal:
// Primero, vuelve a main: git checkout main
// Segundo, absorbe los cambios de la otra rama: git merge feature-contacto
// Ahora que main ya tiene el archivo, borra la rama que usaste para trabajar: git branch -d feature-contacto