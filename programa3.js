// Arreglo inicial de frutas
let frutas = ["Plátano", "Naranja", "Manzana", "Mango", "Fresa", "Uva", "Granadilla"];

// Función para mostrar el arreglo
function verArreglo() {
  const resultado = document.getElementById("resultado");
  resultado.value = frutas.join(", ");
}

// Función para ordenar el arreglo alfabéticamente
function ordenarArreglo() {
  frutas.sort();
  const resultado = document.getElementById("resultado");
  resultado.value = frutas.join(", ");
}

// Función para invertir el arreglo
function invertirArreglo() {
  frutas.reverse();
  const resultado = document.getElementById("resultado");
  resultado.value = frutas.join(", ");
}

// Función para mostrar la longitud del arreglo
function mostrarLongitud() {
  const resultado = document.getElementById("resultado");
  resultado.value = `La cantidad de elementos del arreglo es: ${frutas.length}`;
}

// Función para insertar un nuevo elemento al arreglo
function insertarElemento() {
  const nuevoElemento = document.getElementById("nuevoElemento").value.trim();
  if (nuevoElemento) {
    frutas.push(nuevoElemento);
    document.getElementById("nuevoElemento").value = ""; // Limpiar campo
    const resultado = document.getElementById("resultado");
    resultado.value = frutas.join(", ");
  } else {
    alert("Por favor, ingrese una fruta válida.");
  }
}

// Función para eliminar el último elemento del arreglo
function eliminarElemento() {
  if (frutas.length > 0) {
    frutas.pop();
    const resultado = document.getElementById("resultado");
    resultado.value = frutas.join(", ");
  } else {
    alert("No hay más elementos para eliminar.");
  }
}
