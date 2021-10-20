let total = 0;

function carrito() {
  do {
    let velasSoja = prompt(
      "¿Querés comprar Black Set, Grey Set, Vela Ko o Vela Huapi?",
      "Ej: Vela Ko"
    );
    let cantidad = parseInt(prompt("¿Cuantas velas queres comprar?", 0));

    let precio = 0;

    switch (velasSoja) {
      case "Black Set":
        precio = 4500;
        break;
      case "Grey Set":
        precio = 3500;
        break;
      case "Vela Ko":
        precio = 1100;
        break;
      case "Vela Huapi":
        precio = 1300;
        break;
      default:
        alert("Datos ingresados incorrectos, por favor volve a ingresarlos.");
        precio = 0;
        cantidad = 0;
    }

    total = total + precio * cantidad;
    agregarOtroProducto = confirm("¿Necesitas agregar otro producto?");
  } while (agregarOtroProducto);
}

function calcularEnvio(total) {
  let confirmacion = confirm("¿Querés recibirlo en tu domicilio?");

  if (confirmacion && total >= 7000) {
    alert("Tu envío es gratis. El total de tu compra es $" + total);
  } else if (confirmacion && total < 7000 && total != 0) {
    alert("El envío cuesta $1000. El total de tu compra es $" + total);
    total = total + 1000;
  } else {
    alert("El total de tu compra es $" + total);
  }

  return total;
}

carrito();
calcularEnvio(total);

class velas {
  constructor(producto, aroma, precio) {
    this.producto = producto;
    this.aroma = aroma;
    this.precio = parseFloat(precio);
    this.stock = true;
  }
  sumarIva() {
    this.precio = this.precio * 1.21;
  }
  vender() {
    this.stock = false;
  }
}

const product1 = new velas("Black Set", "Vainilla", "4500");
const product2 = new velas("Grey Set", "Coco vainilla", "3500");
const product3 = new velas("Vela Ko", "Uva pitanga", "1100");
const product4 = new velas("Vela Huapi", "Vainilla", "1300");

product1.sumarIva();
product1.vender();

product2.sumarIva();

product3.sumarIva();
product3.vender();

product4.sumarIva();

console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);
