// variables y selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

// eventos
eventListeners();
function eventListeners() {
     document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
     formulario.addEventListener("submit", agregarGasto);
}

// clases
class Presupuesto {
     constructor(presupuesto) {
          this.presupuesto = Number(presupuesto);
          this.restante = Number(presupuesto);
          this.gastos = [];
     }
}

class UI {
     insertarPresupuesto(cantidad) { // extrayendo valores
          const {presupuesto, restante} = cantidad;

          // agregando al html

          document.querySelector('#total') = presupuesto
          document.querySelector('#restante') = restante
     }

     imprimirAlerta(mensaje, tipo) {

          const divMensaje = document.createElement('div');
          divMensaje.classList.add('text-center', 'alert');
          if (tipo == 'error') {
               divMensaje.classList.add('alert-danger');
          } else {
               divMensaje.classList.add('alert-success');
          }

          // mensaje de error
          divMensaje.textContent = mensaje;

          // insertar en html
          document.querySelector('.primario').insertBefore(divMensaje, formulario)

          // quitar de html
          setTimeout(() => {
               divMensaje.remove()
          }, 3000);

     }
}

// instanciar
const ui = new UI();

let presupuesto;

// funciones
function preguntarPresupuesto() {
     const presupuestoUsuario = prompt("Cual es tu presupuesto?");

     if (presupuestoUsuario == "" || presupuestoUsuario == null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
          window.location.reload();
     }
     presupuesto = new Presupuesto(presupuestoUsuario);
     console.log(presupuesto);
}

// agregar gastos
function agregarGasto(e) {
     e.preventDefault();

     // leer los datos del formulario
     const nombre = document.querySelector('#gasto').value;
     const cantidad = document.querySelector('#cantidad').value;


     // validar
     if (nombre === '' || cantidad === '') {
          console.log('Los campos son obligatorios')
          ui.imprimirAlerta('ambos campos son obligatorios', 'error')
          return
     } else if (cantidad <= 0 || isNaN(cantidad)) {
          ui.imprimirAlerta('Cantidad no valida', 'error')
          return
     }
}
