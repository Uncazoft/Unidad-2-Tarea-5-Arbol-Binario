class Nodo {
  constructor(dato) {
      this.dato = dato;
      this.izquierda = null;
      this.derecha = null;
  }
}

class ArbolBinario {
  constructor() {
      this.raiz = null;
  }

  agregar(dato) {
      const nuevoNodo = new Nodo(dato);
      if (this.raiz === null) {
          this.raiz = nuevoNodo;
      } else {
          this.agregarNodo(this.raiz, nuevoNodo);
      }
      this.dibujar();
  }

  agregarNodo(nodo, nuevoNodo) {
      if (nuevoNodo.dato < nodo.dato) {
          if (nodo.izquierda === null) {
              nodo.izquierda = nuevoNodo;
          } else {
              this.agregarNodo(nodo.izquierda, nuevoNodo);
          }
      } else {
          if (nodo.derecha === null) {
              nodo.derecha = nuevoNodo;
          } else {
              this.agregarNodo(nodo.derecha, nuevoNodo);
          }
      }
  }

  buscar(dato) {
      return this.buscarNodo(this.raiz, dato);
  }

  buscarNodo(nodo, dato) {
      if (nodo === null || nodo.dato === dato) {
          return nodo;
      }
      if (dato < nodo.dato) {
          return this.buscarNodo(nodo.izquierda, dato);
      } else {
          return this.buscarNodo(nodo.derecha, dato);
      }
  }

  eliminar(dato) {
      this.raiz = this.eliminarNodo(this.raiz, dato);
      this.dibujar();
  }

  eliminarNodo(nodo, dato) {
      if (nodo === null) {
          return null;
      }
      if (dato < nodo.dato) {
          nodo.izquierda = this.eliminarNodo(nodo.izquierda, dato);
      } else if (dato > nodo.dato) {
          nodo.derecha = this.eliminarNodo(nodo.derecha, dato);
      } else {
          if (nodo.izquierda === null) {
              return nodo.derecha;
          } else if (nodo.derecha === null) {
              return nodo.izquierda;
          }
          nodo.dato = this.minValor(nodo.derecha);
          nodo.derecha = this.eliminarNodo(nodo.derecha, nodo.dato);
      }
      return nodo;
  }

  minValor(nodo) {
      let minv = nodo.dato;
      while (nodo.izquierda !== null) {
          minv = nodo.izquierda.dato;
          nodo = nodo.izquierda;
      }
      return minv;
  }

  dibujar() {
      const contenedor = document.getElementById('arbol-container');
      contenedor.innerHTML = '';
      this.dibujarNivel(this.raiz, contenedor, 0);
  }

  dibujarNivel(nodo, contenedor, nivel) {
      if (!nodo) return;
      let divNivel = contenedor.querySelector(`.nivel[data-nivel="${nivel}"]`);
      if (!divNivel) {
          divNivel = document.createElement('div');
          divNivel.className = 'nivel';
          divNivel.setAttribute('data-nivel', nivel);
          contenedor.appendChild(divNivel);
      }
      const divNodo = document.createElement('div');
      divNodo.className = 'nodo';
      divNodo.innerText = nodo.dato;
      divNivel.appendChild(divNodo);

      this.dibujarNivel(nodo.izquierda, contenedor, nivel + 1);
      this.dibujarNivel(nodo.derecha, contenedor, nivel + 1);
  }

  inOrder(nodo, resultado = []) {
      if (nodo) {
          this.inOrder(nodo.izquierda, resultado);
          resultado.push(nodo.dato);
          this.inOrder(nodo.derecha, resultado);
      }
      return resultado;
  }

  verificarBST() {
      const datos = this.inOrder(this.raiz);
      for (let i = 1; i < datos.length; i++) {
          if (datos[i] < datos[i - 1]) {
              return false;
          }
      }
      return true;
  }
}

const arbol = new ArbolBinario();

function agregarNumero() {
  const numero = parseInt(document.getElementById('numero').value);
  if (!isNaN(numero)) {
      arbol.agregar(numero);
  }
}

function buscarNumero() {
  const numero = parseInt(document.getElementById('numero').value);
  if (!isNaN(numero)) {
      const resultado = arbol.buscar(numero);
      alert(resultado ? `Número ${numero} encontrado` : `Número ${numero} no encontrado`);
  }
}

function eliminarNumero() {
  const numero = parseInt(document.getElementById('numero').value);
  if (!isNaN(numero)) {
      arbol.eliminar(numero);
  }
}

arbol.agregar(50);
arbol.agregar(30);
arbol.agregar(70);
arbol.agregar(20);
arbol.agregar(40);
arbol.agregar(60);
arbol.agregar(80);
arbol.agregar(10);
arbol.agregar(25);
arbol.agregar(35);
arbol.agregar(45);
arbol.agregar(55);
arbol.agregar(65);
arbol.agregar(75);
arbol.agregar(85);

console.log("El árbol es un BST válido:", arbol.verificarBST());
console.log("Nodo buscado (45):", arbol.buscar(45));
arbol.eliminar(45);
console.log("El árbol es un BST válido después de eliminar 45:", arbol.verificarBST());
console.log("Nodo buscado (45) después de eliminar:", arbol.buscar(45));
