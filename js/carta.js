export default class Carta{
    _palo;
    _nombre;
    _volteada;

    constructor(palo, nombre){
        this._palo = palo;
        this._nombre = nombre;
        this._volteada = false;
    }

    getPalo(){
        return this._palo;
    }

    setPalo(palo){
        this._palo = palo;
    }

    getNombre(){
        return this._nombre;
    }

    setNombre(nombre){
        this._nombre = nombre;
    }

    voltear() {
        this._volteada = !this._volteada;
    }

    toString(){
        if (this._volteada) {
            return `${this._nombre}-${this._palo}`;
        } else {
            return 'carta';
        }
    }
}

 //probando para subir que no se por que no va bien//
