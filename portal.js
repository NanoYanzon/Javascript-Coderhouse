//VARIABLES
let listaDeAlumnos; //Elemento que muestra la lista
let titulo;
let botonLista;
let botonInforme;
let botonCurso;
let botonExportar;
let botonSalir;
let listaAlumnosMock = []; //Array con TODOS los objetos alumnos
const url = "https://643dd6aa6c30feced81ad86f.mockapi.io/Students";
let tablaAlumnos;
let cells = document.querySelectorAll("td:nth-child(3)");

////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////INICIAR ELEMENTOS Y EVENTOS//////////////////////////////////////////
function iniciarElementos() {
  listaDeAlumnos = document.getElementById("lista-alumnos");
  botonLista = document.getElementById("botonLista");
  titulo = document.getElementById("titulo");
  botonInforme = document.getElementById("botonAlumnos");
  botonCurso = document.getElementById("botonCurso");
  tablaAlumnos = document.getElementById("tabla");
  botonExportar = document.getElementById("botonExportar");
  botonSalir = document.getElementById("botonSalir");
}

function iniciarEventos() {
  botonLista.addEventListener("click", () => {
    mostrarAlumnos(listaAlumnosMock);
  });
  botonInforme.addEventListener("click", () => {
    mostrarInforme(listaAlumnosMock);
  });
  botonCurso.addEventListener("click", () => {
    mostrarCurso(listaAlumnosMock);
  });
  botonExportar.addEventListener("click", () => {
    generatePDF();
  });
  botonSalir.addEventListener("click", () => {
    alertaSalida();
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// Petición a la API//////////////////////////////////////////
fetch(url)
  .then((response) => response.json()) // Convertimos la respuesta en JSON
  .then((data) => {
    // Recorremos el array de objetos y creamos un nuevo objeto por cada uno
    data.forEach((alumno) => {
      const newAlumno = {
        id: alumno.id,
        nombre: alumno.nombre,
        avatar: alumno.avatar,
        lengua: parseInt(alumno.lengua),
        matematica: parseInt(alumno.matematica),
        fisica: parseInt(alumno.fisica),
        historia: parseInt(alumno.historia),
      };
      listaAlumnosMock.push(newAlumno); // Agregamos el nuevo objeto al array
    });

    console.log(listaAlumnosMock); // Mostramos el array en la consola
  })
  .catch((error) => console.error(error)); // Manejamos errores en caso de que los haya

///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////LISTA DE ALUMNOS ////////////////////////////////////////////
function mostrarAlumnos(lista) {
  titulo.textContent = "Lista de alumnos y notas";
  tablaAlumnos.innerHTML = ""; // Limpiar la lista existente

  let row = document.createElement("tr");
  let cell1 = document.createElement("th");
  let cell2 = document.createElement("th");
  let cell3 = document.createElement("th");
  let cell4 = document.createElement("th");
  let cell5 = document.createElement("th");
  let cell6 = document.createElement("th");
  cell1.innerHTML = "ID";
  cell2.innerHTML = "NOBRE";
  cell3.innerHTML = "LENGUA";
  cell4.innerHTML = "MATEMÁTICA";
  cell5.innerHTML = "FÍSICA";
  cell6.innerHTML = "HISTORIA";
  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  row.appendChild(cell4);
  row.appendChild(cell5);
  row.appendChild(cell6);
  tablaAlumnos.appendChild(row);

  lista.forEach((alumno) => {
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");
    let cell5 = document.createElement("td");
    let cell6 = document.createElement("td");
    cell1.innerHTML = alumno.id;
    cell2.innerHTML = alumno.nombre;
    cell3.innerHTML = alumno.lengua;
    cell4.innerHTML = alumno.matematica;
    cell5.innerHTML = alumno.fisica;
    cell6.innerHTML = alumno.historia;
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);

    ///////// Boton Borrar///////////
    let buttonDelete = document.createElement("button");
    buttonDelete.className = "btn boton-tabla";
    buttonDelete.id = "delete";
    buttonDelete.innerHTML = "Borrar";
    row.appendChild(buttonDelete);
    buttonDelete.addEventListener("click", function () {
      let idABorrar = alumno.id;
      fila.remove();
    });

    ////////// Boton editar //////////
    let buttonEdit = document.createElement("button");
    buttonEdit.className = "btn boton-tabla";
    buttonEdit.id = "edit";
    buttonEdit.innerHTML = "Editar";
    row.appendChild(buttonEdit);
    tablaAlumnos.appendChild(row);
  });
  row = document.createElement("tr");
  let cell = document.createElement("td");
  let buttonCreate = document.createElement("button");
  buttonCreate.className = "btn boton-tabla ";
  buttonCreate.id = "create";
  buttonCreate.innerHTML = "Cargar nuevo alumno";
  row.appendChild(buttonCreate);
  tablaAlumnos.appendChild(row);
}

///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////INFORME DE ALUMNOS ////////////////////////////////////////////
function mostrarInforme(lista) {
  titulo.textContent = "Informe de los alumnos";
  tablaAlumnos.innerHTML = ""; // Limpiar la lista existente

  let row = document.createElement("tr");
  let cell1 = document.createElement("th");
  let cell2 = document.createElement("th");
  let cell3 = document.createElement("th");
  let cell4 = document.createElement("th");
  cell1.innerHTML = "ID";
  cell2.innerHTML = "NOBRE";
  cell3.innerHTML = "PROMEDIO";
  cell4.innerHTML = "APROBADO";
  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  row.appendChild(cell4);
  tablaAlumnos.appendChild(row);
  let aprobado;
  let ppromedio;
  lista.forEach((alumno) => {
    promedio =
      (alumno.lengua + alumno.matematica + alumno.fisica + alumno.historia) / 4;
    if (promedio >= 6) {
      aprobado = "Si";
    } else {
      aprobado = "No";
    }

    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");
    cell1.innerHTML = alumno.id;
    cell2.innerHTML = alumno.nombre;
    cell3.innerHTML = promedio;
    cell4.innerHTML = aprobado;
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    tablaAlumnos.appendChild(row);
  });
}

///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////INFORME DEL CURSO ////////////////////////////////////////////
function mostrarCurso(lista) {
  titulo.textContent = "Informe del Curso ";
  //Calculo promedios
  const promedioLengua =
    lista.reduce((total, alumno) => total + alumno.lengua, 0) / lista.length;
  const promedioMatematica =
    lista.reduce((total, alumno) => total + alumno.matematica, 0) /
    lista.length;
  const promedioFisica =
    lista.reduce((total, alumno) => total + alumno.fisica, 0) / lista.length;
  const promedioHistoria =
    lista.reduce((total, alumno) => total + alumno.historia, 0) / lista.length;
  const promedioGeneral =
    (promedioLengua + promedioMatematica + promedioFisica + promedioHistoria) /
    4;
  const cantAlumnos = lista.length;
  ////////////////////////////////////////////

  tablaAlumnos.innerHTML = ""; // Limpiar la lista existente
  let row;
  let cell1;
  let cell2;

  row = document.createElement("tr");
  cell1 = document.createElement("th");
  cell2 = document.createElement("th");
  cell1.innerHTML = "PARÁMETRO";
  cell2.innerHTML = "VALOR";
  row.appendChild(cell1);
  row.appendChild(cell2);
  tablaAlumnos.appendChild(row);
  /////////////
  row = document.createElement("tr");
  cell1 = document.createElement("td");
  cell2 = document.createElement("td");
  cell1.innerHTML = "Cant. de alumnos";
  cell2.innerHTML = cantAlumnos;
  row.appendChild(cell1);
  row.appendChild(cell2);
  tablaAlumnos.appendChild(row);
  /////////////
  row = document.createElement("tr");
  cell1 = document.createElement("td");
  cell2 = document.createElement("td");
  cell1.innerHTML = "Prom. Lengua";
  cell2.innerHTML = promedioLengua.toFixed(2);
  row.appendChild(cell1);
  row.appendChild(cell2);
  tablaAlumnos.appendChild(row);
  /////////////
  row = document.createElement("tr");
  cell1 = document.createElement("td");
  cell2 = document.createElement("td");
  cell1.innerHTML = "Prom. Matemáticas";
  cell2.innerHTML = promedioMatematica.toFixed(2);
  row.appendChild(cell1);
  row.appendChild(cell2);
  tablaAlumnos.appendChild(row);
  /////////////
  row = document.createElement("tr");
  cell1 = document.createElement("td");
  cell2 = document.createElement("td");
  cell1.innerHTML = "Prom. Física";
  cell2.innerHTML = promedioFisica.toFixed(2);
  row.appendChild(cell1);
  row.appendChild(cell2);
  tablaAlumnos.appendChild(row);
  /////////////
  row = document.createElement("tr");
  cell1 = document.createElement("td");
  cell2 = document.createElement("td");
  cell1.innerHTML = "Prom. Historia";
  cell2.innerHTML = promedioHistoria.toFixed(2);
  row.appendChild(cell1);
  row.appendChild(cell2);
  tablaAlumnos.appendChild(row);
  /////////////
  row = document.createElement("tr");
  cell1 = document.createElement("td");
  cell2 = document.createElement("td");
  cell1.innerHTML = "Prom. GENERAL";
  cell2.innerHTML = promedioGeneral.toFixed(2);
  row.appendChild(cell1);
  row.appendChild(cell2);
  tablaAlumnos.appendChild(row);
}

//////////////////////////////////////////////////////////////////////////
///////////////////////////////// PDF   /////////////////////////////////////
function generatePDF() {
  var pdf = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a5",
    putOnlyUsedFonts: true,
  });
  pdf.text("Lista de alumnos", 20, 20);
  pdf.text("Aquí se imprimirían las listas de los alumnos", 20, 30);
  pdf.save("Lista de alumnos.pdf");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////// Alerta salida con sweet alert //////////////////////////////////////
function alertaSalida() {
  swal({
    title: "¿Seguro desea salir?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Gracias por venir!", {
        icon: "success",
        timer: 2000,
      });
      window.location.href = "index.html";
    } else {
      swal("Seguimos en el portal!", { icon: "success" });
    }
  });
}

///////////////////////////git /////////////////////////////////////////////////////////////////////////////
///////////////////// ORQUESTADORA //////////////////////////////////////
function main() {
  iniciarElementos();
  iniciarEventos();
}

main();
