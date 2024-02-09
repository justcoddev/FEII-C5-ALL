function iniciarJuego() {

  // suludamos al usuario
  alert("Bienvenido al piedra papel o tijera de Frontend II.");
  // guardamos en una variable en nombre ingresado
  let banderaNombre = true;
  let nombre;
  do {
    nombre = prompt("Ingese su nombre por favor:");

    if (nombre !== "" && nombre.length >= 3 && typeof nombre == "string" && nombre !== undefined && nombre !== null) {
      banderaNombre = false;
    } else alert("Nombre no válido");
  } while (banderaNombre)

  nombre = nombre.toUpperCase();
  // mostramos los datos por consola
  if (nombre == null) {
    alert("Nombre Incorrecto");
  } else {
    console.log("----------------------------");
    console.log("El jugador es:")
    console.log(nombre);
    console.log("----------------------------");
    alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");
  }
  return nombre;
}
// console.log(nombre.length);
// creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función
const nombreJugador = iniciarJuego();

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.