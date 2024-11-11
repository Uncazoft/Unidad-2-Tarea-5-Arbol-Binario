// Clase Nodo
class Nodo {
    constructor(dato) {
        this.dato = dato;  // El valor que almacena el nodo
        this.siguiente = null;  // Puntero al siguiente nodo
    }
}

// Clase Lista Enlazada
class ListaEnlazada {
    constructor() {
        this.cabeza = null;  // La lista comienza vacía
    }

    // Agregar un nodo al final de la lista
    agregarAlFinal(dato) {
        const nuevoNodo = new Nodo(dato);  // Creamos un nuevo nodo con el dato
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;  // Si la lista está vacía, el nuevo nodo es la cabeza
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;  // Recorremos hasta el último nodo
            }
            actual.siguiente = nuevoNodo;  // Enlazamos el último nodo con el nuevo nodo
        }
    }

    // Imprimir la lista
    imprimirLista() {
        let actual = this.cabeza;
        let result = '';
        while (actual) {
            result += actual.dato + ' -> ';
            actual = actual.siguiente;
        }
        result += 'null';  // Fin de la lista
        console.log(result);
    }
}

// Ejemplo de uso
const lista = new ListaEnlazada();
lista.agregarAlFinal(10);
lista.agregarAlFinal(20);
lista.agregarAlFinal(30);
lista.imprimirLista();  // Salida: 10 -> 20 -> 30 -> null
