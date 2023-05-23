// Función para obtener la opción elegida por el jugador
function obtenerOpcionJugador() {
    var opcion = prompt("Elige: piedra, papel o tijera").toLowerCase();
    while (opcion !== "piedra" && opcion !== "papel" && opcion !== "tijera") {
      opcion = prompt("Opción inválida. Elige: piedra, papel o tijera").toLowerCase();
    }
    return opcion;
  }
  
  // Función para obtener una opción aleatoria para la computadora
  function obtenerOpcionComputadora() {
    var opciones = ["piedra", "papel", "tijera"];
    var indice = Math.floor(Math.random() * 3);
    return opciones[indice];
  }
  
  // Función para determinar el resultado del juego
  function determinarGanador(jugador, computadora) {
    if (jugador === computadora) {
      return "¡Es un empate!";
    } else if (
      (jugador === "piedra" && computadora === "tijera") ||
      (jugador === "papel" && computadora === "piedra") ||
      (jugador === "tijera" && computadora === "papel")
    ) {
      return "¡Ganaste!";
    } else {
      return "¡Perdiste!";
    }
  }
  
  // Función principal del juego
  function jugarPiedraPapelTijera() {
    var jugador = obtenerOpcionJugador();
    var computadora = obtenerOpcionComputadora();
    var resultado = determinarGanador(jugador, computadora);
    alert("Jugador: " + jugador + "\nComputadora: " + computadora + "\nResultado: " + resultado);
  }
  
  // Iniciar el juego
  jugarPiedraPapelTijera();
  