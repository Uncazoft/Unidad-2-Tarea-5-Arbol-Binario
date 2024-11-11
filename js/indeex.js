class NodoCircular {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}

class ListaCircular {
    constructor() {
        this.cabeza = null;
    }

    agregarAlFinal(dato) {
        const nuevoNodo = new NodoCircular(dato);
        if (this.cabeza === null) {
            this.cabeza = nuevoNodo;
            nuevoNodo.siguiente = this.cabeza;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente !== this.cabeza) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
            nuevoNodo.siguiente = this.cabeza;
        }
    }

    imprimir() {
        if (this.cabeza === null) return;

        let actual = this.cabeza;
        do {
            console.log(actual.dato);
            actual = actual.siguiente;
        } while (actual !== this.cabeza);
    }
}

// Ejemplo de uso
const listaCircular = new ListaCircular();
listaCircular.agregarAlFinal(1);
listaCircular.agregarAlFinal(2);
listaCircular.agregarAlFinal(3);

console.log("Imprimir lista circular:");
listaCircular.imprimir();
