//================ PRIMERA ENTREGA ================

// const pmanzana = 10;
// const pbanana = 11;
// const ppera = 9;
// let total = 0;
// let cont = false;

// do {
//   let qmanzana = prompt("Ingresa cuantos kilos de manzana desea ($10/kg)");
//   let qbanana = prompt("Ingresa cuantos kilos de banana desea ($11/kg)");
//   let qpera = prompt("Ingresa cuantos kilos de pera desea ($9/kg)");
//   let efectivo = prompt(
//     "Si paga en efectivo tiene un 10% de descuento. ¿Desea pagar en efectivo? (Si/No)"
//   );

//   let subtotal = pmanzana * qmanzana + pbanana * qbanana + ppera * qpera;

//   if (efectivo.toLowerCase() == "si") {
//     total = subtotal * 0.9;
//   } else {
//     total = subtotal;
//   }
//   alert("Su total es de: $" + total);

//   let continuar = prompt("¿Desea hacer otro pedido? (Si/No)");
//   if (continuar.toLowerCase() == "si") {
//     cont = true;
//   } else {
//     cont = false;
//   }
// } while (cont == true);

// alert("Muchas gracias por su compra!");

// ================== SEGUNDA ENTREGA ====================

const listaDeNombres = [
  "Gertrudis Reig Cabrera",
  "Eliana Victoria Ferrández Viana",
  "Amor Miranda Iglesia",
  "Aitana Perez Bustamante",
  "Samanta Sánchez Cabello",
  "Hugo Laguna-Casals",
  "Eligia González Borja",
  "Lilia Pellicer Portillo",
  "Marcia del Uriarte",
  "Horacio Olmedo Checa",
  "Gastón Rómulo Pineda Alcalá",
  "Caridad Seco-Vives",
  "Maricela Lloret Romero",
  "Toni Coronado Nieto",
  "Juan Antonio Llano-Tolosa",
  "Vera Cuenca Merino",
  "Calisto Coloma Busquets",
  "Adelardo Tamayo Rosell",
  "Nazaret Manzanares Carreño",
  "Celestino Angulo Escolano",
  "Arcelia Jaén Palomino",
  "Ulises Revilla Losa",
  "Edmundo Molins Diez",
  "Custodia Llabrés Nevado",
  "Teo Jerez Oliva",
  "Celestino Uría-Alcalde",
  "Andrés Palau Mir",
  "Felipe Madrigal Ferrán",
  "Enrique de Vallejo",
  "Martina Carpio Cerdá",
  "Mario Doménech Llobet",
  "Anna Bartolomé Alberola",
  "Cintia Perez",
  "Angélica Gallart Nadal",
  "Cristóbal Pepe Alcaraz Coca",
  "Hermenegildo Ríos Egea",
  "Tiburcio Quirós Rocamora",
  "Mirta Sureda Carretero",
  "Leonardo Bonet Zabaleta",
  "Salomé Carbonell Barreda",
  "Celso Alcaraz",
  "Evangelina Garcés-Barragán",
  "Eligio Benavides Palomar",
  "Jose Antonio Horacio Gárate Cordero",
  "Cornelio de Salazar",
  "Matías Prats Alvarez",
  "Julián de Carro",
  "Estela Roman-Rey",
  "Juliana Calzada Maldonado",
  "Roberta Cerdán Guitart",
];
let listaAlumno = [];
let i = 0;

//Constructor de personas
class Persona {
  constructor(nombre, curso, nota, id) {
    this.nombre = nombre;
    this.curso = curso;
    this.nota = nota;
    this.id = id;
  }
}

// Carga info de personas recorriendo array y asocia curso y notas de forma aleatoria
function crearPersona() {
  let nombre = listaDeNombres[i]; //Recorro array de lista de nombres
  let curso = Math.floor(Math.random() * 4) + 1; //alumnos de 1 a 5 grado aleatorio
  let nota = Math.floor(Math.random() * (10 - 5)) + 5; //notas de 5 a 10 aleatorio
  let id = i;
  //console.log( `Hola mi nombre es ${nombre}, voy a ${curso} grado, mi calificación es: ${nota}`);

  const alumno = new Persona(nombre, curso, nota, id);
  return alumno;
}

// Creo una onjeto persona paca cada nombre en el array listaDeNombres
// Muestro la lista en el HTML
let text1 = "<ul>";
for (i = 0; i < listaDeNombres.length; i++) {
  listaAlumno.push(crearPersona());
  // console.log(listaAlumno[i]); // Muestro alumnos y datos por consola para verificar
  text1 +=
    "<li>" +
    listaAlumno[i].id.toString() +
    "  " +
    listaAlumno[i].nombre.toString() +
    " - Grado: " +
    listaAlumno[i].curso.toString() +
    " - Nota: " +
    listaAlumno[i].nota.toString() +
    "</li>";
}
text1 += "</ul>";
document.getElementById("Lista").innerHTML = text1;

// Cuento la cantidad de alumnos en cada curso
let text2 = "<ul>";
for (let x = 0; x < listaDeNombres.length; x++) {
  // contar si

  text2 += "<li>" + " Grado 1:" + cant1 + " alumnos" + "</li>";
}
text2 += "</ul>";
document.getElementById("Cant").innerHTML = text2;
