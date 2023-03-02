//================ PRIMERA ENTREGA ================

const pmanzana = 10;
const pbanana = 11;
const ppera = 9;
let total = 0;
let cont = false;

do {
  let qmanzana = prompt("Ingresa cuantos kilos de manzana desea ($10/kg)");
  let qbanana = prompt("Ingresa cuantos kilos de banana desea ($11/kg)");
  let qpera = prompt("Ingresa cuantos kilos de pera desea ($9/kg)");
  let efectivo = prompt(
    "Si paga en efectivo tiene un 10% de descuento. ¿Desea pagar en efectivo? (Si/No)"
  );

  let subtotal = pmanzana * qmanzana + pbanana * qbanana + ppera * qpera;

  if (efectivo.toLowerCase() == "si") {
    total = subtotal * 0.9;
  } else {
    total = subtotal;
  }
  alert("Su total es de: $" + total);

  let continuar = prompt("¿Desea hacer otro pedido? (Si/No)");
  if (continuar.toLowerCase() == "si") {
    cont = true;
  } else {
    cont = false;
  }
} while (cont == true);

alert("Muchas gracias por su compra!");
