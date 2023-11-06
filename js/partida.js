import Baraja from "./baraja.js";
export default class Partida  {
    _filas;
    _columnas;
    _baraja;
    _cartasSeleccionadas = [];
    _mazo = [];
    _cartaVolteada;
    _aciertos = 0;
    _numeroIntentos = 0;

    constructor(filas, columnas){
        this._filas = Number(filas);
        this._columnas = Number(columnas);
        this._baraja = new Baraja();      
    }

    selecciona(){
        while(this._cartasSeleccionadas.length < this._filas * this._columnas / 2){
            var carta = this._baraja.generaCarta();
            if(!this._cartaEnSeleccionadas(carta)){
                this._cartasSeleccionadas.push(carta);
            }
        }
    }

    baraja(){
        this._cartasSeleccionadas.sort(() => Math.random() - 0.5);
    }

    reparte(){
        for(var i = 0; i < this._filas; i++){
            this._mazo[i] = [];
            for (var j = 0; j < this._columnas; j++){
                var carta = this._cartasSeleccionadas.pop();
                this._mazo[i][j] = carta;
            }
        }
    }

    voltea(fila,columna){
        var carta = this._mazo[fila][columna];
        if (carta) {
            carta.voltear();
        }
        if (this._cartaVolteada) {
            if (carta && carta === this._cartaVolteada){
                this._aciertos++;
                this._cartaVolteada = null;  
                return true;
            } else {
                this._cartaVolteada = null;
                return false;
            }
        } else {
            this._cartaVolteada = carta;
            return false;
        }
    }
    

    haFinalizado(){
        return this._aciertos === this._filas * this._columnas / 2;
    }
    

    _cartaEnSeleccionadas(carta){
        return this._cartasSeleccionadas.includes(carta);
    }  
}
 //probando para subir que no se por que no va bien//

