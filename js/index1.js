class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.anterior = null;
        this.siguiente = null;
    }
}

class ListaDoble {
    constructor() {
        this.cabeza = null;
        this.cola = null;
    }

    agregarAlFinal(dato) {
        const nuevoNodo = new Nodo(dato);
        if (this.cola === null) {
            this.cabeza = this.cola = nuevoNodo;
        } else {
            this.cola.siguiente = nuevoNodo;
            nuevoNodo.anterior = this.cola;
            this.cola = nuevoNodo;
        }
    }

    imprimirDesdeCabeza() {
        let actual = this.cabeza;
        while (actual !== null) {
            console.log(actual.dato);
            actual = actual.siguiente;
        }
    }

    imprimirDesdeCola() {
        let actual = this.cola;
        while (actual !== null) {
            console.log(actual.dato);
            actual = actual.anterior;
        }
    }
}

// Ejemplo de uso
const listaDoble = new ListaDoble();
listaDoble.agregarAlFinal(1);
listaDoble.agregarAlFinal(2);
listaDoble.agregarAlFinal(3);

console.log("Imprimir desde cabeza:");
listaDoble.imprimirDesdeCabeza();

console.log("Imprimir desde cola:");
listaDoble.imprimirDesdeCola();

