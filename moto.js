// Clase para los items del comercio
class Item {
  constructor(nombre, precio, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

// Items del comercio
const honda = new Item("Honda", 200, "Honda");
const suzuki = new Item("Suzuki", 150, "Suzuki");
const yamaha = new Item("Yamaha", 300, "Yamaha");

// Array para mis compras donde vamos a ir metiendo los items que compremos
const miscompras = [];

// los yenes disponibles
let yenes = 1000;

// Elementos del DOM
const losYenes = document.querySelector("#yenes span");
losYenes.innerText = yenes; // Para que muestre los yenes apenas carga la aplicación}
const elmiscompras = document.getElementById("miscompras");

// Función para agregar items a nuestro comercio
function comprar(itemDelJuego) {
  // Verificamos si tenemos los yenes disponible para la compra
  if (yenes - itemDelJuego.precio >= 0) {
    miscompras.push(itemDelJuego);
    yenes -= itemDelJuego.precio; // Actualizamos el dinero
    actualizarHTML();
  } else {
    alert(`No tenés los yenes suficiente para comprar ${itemDelJuego.nombre}.`);
  }
}

// Función para vender un item
function vender(nombreDelItem) {
  // Buscamos el item con find
  const itemEncontrado = miscompras.find(
    (item) => item.nombre == nombreDelItem
  );

  // Si está en el comercio, la devolvemos y actualizamos el HTML
  if (itemEncontrado) {
    // Actualizamos los yenes
    yenes += itemEncontrado.precio;
    const indice = miscompras.indexOf(itemEncontrado);
    miscompras.splice(indice, 1);
    // Actualizamos el HTML
    actualizarHTML();
  }
}

// Función para actualizar el HTML de la aplicación (yenes e items)
function actualizarHTML() {
  elmiscompras.innerHTML = "";
  for (const itemDelJuego of miscompras) {
    const li = `
      <li onclick="vender('${itemDelJuego.nombre}')">
        <img src="img/${itemDelJuego.imagen}" alt="${itemDelJuego.imagen}" />
      </li>
      `;
    // Concatenamos los li creados en el elemento #miscompras (ul)
    elmiscompras.innerHTML += li;
  }

  losYenes.innerText = yenes;
}
