import Carta from "./carta.js";
export default class Baraja{
    _cartas = [];
    static PALOS = ['PICAS', 'CORAZONES','TREBOLES','DIAMANTES'];
    static NOMBRES = ['A','2','3','4','5','6','7','8','9','J','Q','K'];

    constructor(){
        for(var palo of Baraja.PALOS){
            for(var nombre of Baraja.NOMBRES){
                this._cartas.push(new Carta(palo,nombre));
            }
        }
    }

    generaCarta(){
        var indiceAleatorio = Math.floor(Math.random() * this._cartas.length);
        return this._cartas.splice(indiceAleatorio, 1)[0];
        //probando para subir que no se por que no va bien//
    }
}
