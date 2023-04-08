//Lista de de alumnos con los siguientes parametros aleatorios: nombre, apellido, curso (entre 1 y 5),
//nota de lengua, nota de matematica, nota de ciencias, año (2020, 20221, 2022 o 2023).
//Cada curso debe incluir minimo 10 y maximo 25 alumnos cada año.

// Función auxiliar para generar nombres aleatorios
function generarNombre() {
  const nombres = [
    "Ana",
    "Juan",
    "María",
    "Pedro",
    "Lucía",
    "Luis",
    "Sofía",
    "Diego",
    "Carla",
    "Miguel",
    "Laura",
    "Javier",
    "Fernanda",
    "Carlos",
    "Camila",
    "Gonzalo",
    "Valentina",
    "José",
    "Isabella",
    "Andrés",
    "Diana",
    "David",
    "Renata",
    "Raúl",
    "Julia",
    "Adrián",
    "Victoria",
    "Francisco",
    "Gabriela",
  ];
  const apellidos = [
    "García",
    "Martínez",
    "Fernández",
    "González",
    "López",
    "Rodríguez",
    "Pérez",
    "Sánchez",
    "Ruiz",
    "Hernández",
    "Jiménez",
    "Díaz",
    "Moreno",
    "Álvarez",
    "Muñoz",
    "Romero",
    "Gutiérrez",
    "Navarro",
    "Torres",
    "Domínguez",
    "Vázquez",
    "Serrano",
    "Castillo",
    "Ortega",
    "Rubio",
    "Molina",
    "Santiago",
    "Santos",
    "Flores",
    "Silva",
  ];
  const nombre = nombres[Math.floor(Math.random() * nombres.length)];
  const apellido1 = apellidos[Math.floor(Math.random() * apellidos.length)];
  const apellido2 = apellidos[Math.floor(Math.random() * apellidos.length)];
  return `${nombre} ${apellido1} ${apellido2}`;
}

// Función auxiliar para generar números aleatorios entre un mínimo y un máximo
function generarNumero(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

// Generar lista de alumnos
const listaAlumnos = [];

for (let year = 2020; year <= 2023; year++) {
  for (let curso = 1; curso <= 5; curso++) {
    const cantidadAlumnos = generarNumero(10, 25);
    for (let i = 1; i <= cantidadAlumnos; i++) {
      const alumno = {
        nombre: generarNombre(),
        curso: curso,
        notaLengua: generarNumero(5, 10),
        notaMatematica: generarNumero(5, 10),
        notaCiencias: generarNumero(5, 10),
        año: year,
      };
      listaAlumnos.push(alumno);
    }
  }
}

console.log(listaAlumnos);

////////////////////////////////////////////////////////////////////////////////////
////////////////////////// FILTRADO POR AÑO Y CURSO  ///////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// Función para filtrar la lista de alumnos por año y curso
function filtrarAlumnos(lista, año, curso) {
  return lista.filter((alumno) => alumno.año === año && alumno.curso === curso);
}

// Obtener los elementos del DOM necesarios
const selectAño = document.getElementById("select-año");
const selectCurso = document.getElementById("select-curso");
const listaDeAlumnos = document.getElementById("lista-alumnos");

// Crear opciones para el menú desplegable de años
for (let year = 2020; year <= 2023; year++) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  selectAño.appendChild(option);
}

// Crear opciones para el menú desplegable de cursos
for (let curso = 1; curso <= 5; curso++) {
  const option = document.createElement("option");
  option.value = curso;
  option.textContent = `Curso ${curso}`;
  selectCurso.appendChild(option);
}

//PRUEBA!!!!!
function filtro() {
  const añoSeleccionado = parseInt(selectAño.value);
  const cursoSeleccionado = parseInt(selectCurso.value);
  const alumnosFiltrados = filtrarAlumnos(
    listaAlumnos,
    añoSeleccionado,
    cursoSeleccionado
  );
  console.log(alumnosFiltrados);
  return alumnosFiltrados;
}

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////// LISTA DE ALUMNOS ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
// Manejar el evento "click" en el botón de Lista
const botonLista = document.getElementById("botonLista");
botonLista.addEventListener("click", () => {
  const añoSeleccionado = parseInt(selectAño.value);
  const cursoSeleccionado = parseInt(selectCurso.value);
  const alumnosFiltrados = filtrarAlumnos(
    listaAlumnos,
    añoSeleccionado,
    cursoSeleccionado
  );
  mostrarAlumnos(alumnosFiltrados);
});

// Función para mostrar la lista de alumnos en el DOM
function mostrarAlumnos(lista) {
  const titulo = document.getElementById("titulo");
  titulo.textContent = "Lista de alumnos y notas";
  listaDeAlumnos.innerHTML = ""; // Limpiar la lista existente
  lista.forEach((alumno) => {
    const li = document.createElement("li");
    li.textContent = `${alumno.nombre} - Notas: Lengua ${alumno.notaLengua}, Matemáticas ${alumno.notaMatematica}, Ciencias ${alumno.notaCiencias}`;
    listaDeAlumnos.appendChild(li);
  });
}

///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////INFORME DE ALUMNOS ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// Manejar el evento "click" en el botón de informe
const botonInforme = document.getElementById("botonAlumnos");
botonInforme.addEventListener("click", () => {
  const añoSeleccionado = parseInt(selectAño.value);
  const cursoSeleccionado = parseInt(selectCurso.value);
  const alumnosFiltrados = filtrarAlumnos(
    listaAlumnos,
    añoSeleccionado,
    cursoSeleccionado
  );
  mostrarInforme(alumnosFiltrados);
});

// Función para mostrar el informe de notas de los alumnos
function mostrarInforme(lista) {
  const titulo = document.getElementById("titulo");
  titulo.textContent = "Informe de los alumnos";
  listaDeAlumnos.innerHTML = ""; // Limpiar la lista existente
  lista.forEach((alumno) => {
    const li = document.createElement("li");
    const promedio =
      (alumno.notaLengua + alumno.notaMatematica + alumno.notaCiencias) / 3;
    if (promedio >= 6) {
      li.textContent = `${alumno.nombre} - Promedio: ${promedio.toFixed(
        2
      )} (APROBADO)`;
    } else {
      li.textContent = `${alumno.nombre} - Promedio: ${promedio.toFixed(
        2
      )} (NO APROBADO)`;
    }
    listaDeAlumnos.appendChild(li);
  });
}

///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////INFORME DEL CURSO ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// Manejar el evento "click" en el botón de Curso
const botonCurso = document.getElementById("botonCurso");
botonCurso.addEventListener("click", () => {
  const añoSeleccionado = parseInt(selectAño.value);
  const cursoSeleccionado = parseInt(selectCurso.value);
  const alumnosFiltrados = filtrarAlumnos(
    listaAlumnos,
    añoSeleccionado,
    cursoSeleccionado
  );
  mostrarCurso(alumnosFiltrados);
});

function mostrarCurso(lista) {
  const titulo = document.getElementById("titulo");
  titulo.textContent =
    "Informe del Curso " + selectCurso.value + " del año " + selectAño.value;
  listaDeAlumnos.innerHTML = ""; // Limpiar la lista existente

  //Calculo promedios
  const promedioLengua =
    lista.reduce((total, alumno) => total + alumno.notaLengua, 0) /
    lista.length;
  const promedioMatematica =
    lista.reduce((total, alumno) => total + alumno.notaMatematica, 0) /
    lista.length;
  const promedioCiencias =
    lista.reduce((total, alumno) => total + alumno.notaCiencias, 0) /
    lista.length;
  const promedioGeneral =
    (promedioLengua + promedioMatematica + promedioCiencias) / 3;
  const cantAlumnos = lista.length;

  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  li1.textContent = "El curso tiene " + cantAlumnos + " alumnos ";
  const li2 = document.createElement("li");
  li2.innerHTML = "Promedio LENGUA: " + promedioLengua.toFixed(2) + "<br>";
  const li3 = document.createElement("li");
  li3.innerHTML =
    "Promedio MATEMÁTICA: " + promedioMatematica.toFixed(2) + "<br>";
  const li4 = document.createElement("li");
  li4.innerHTML = "Promedio CIENCIAS: " + promedioCiencias.toFixed(2) + "<br>";
  const li5 = document.createElement("li");
  li5.innerHTML =
    "PROMEDIO GENERAL del curso es de: " + promedioGeneral.toFixed(2) + "<br>";

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);

  listaDeAlumnos.appendChild(ul);
}
