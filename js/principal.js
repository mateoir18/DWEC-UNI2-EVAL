import Partida from "./partida.js";

class Juego {
    constructor() {
        
        var filas = prompt("Por favor, introduce el número de filas");
        var columnas = prompt("Por favor, introduce el número de columnas");

        console.log("Creando nueva partida...");  
        this.partida = new Partida(filas, columnas);
        this.partida.selecciona(); 
        this.partida.baraja(); 
        this.partida.reparte(); 
    }

    iniciar() {
        console.log("Iniciando juego..."); 

        for (var i = 0; i < this.partida._filas; i++) {
            var filaCartas = [];
            for (var j = 0; j < this.partida._columnas; j++) {
                var carta = this.partida._mazo[i][j];
                if (carta) {
                    filaCartas.push(carta.toString());
                } else {
                    filaCartas.push(" ");
                }
            }
            console.log("| " + filaCartas.join(' | ') + " |");
        }
    }

    seleccionarCarta() {
        
        var fila = prompt("Por favor, introduce el número de fila de la carta a voltear");
        var columna = prompt("Por favor, introduce el número de columna de la carta a voltear");

        
        this.partida.voltea(fila, columna);

        
        this.iniciar();

        
        this.seleccionarCarta();
    }
}

console.log("Creando nuevo juego...");  
var juego = new Juego();
juego.iniciar();
juego.seleccionarCarta();

export default Juego;

 //probando para subir que no se por que no va bien//






