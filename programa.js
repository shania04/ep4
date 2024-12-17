function generarNumeros() {
    // Obtener valores de entrada
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);
  
    // Validar rango
    if (min >= max) {
      alert("El valor mínimo debe ser menor que el máximo.");
      return;
    }
  
    // Generar 20 números aleatorios
    const numeros = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * (max - min + 1)) + min
    );
  
    // Crear lista enumerada
    const listaElementos = numeros.map((num, index) => `<li>${index + 1} - ${num}</li>`).join("");
  
    // Mostrar en pantalla
    document.getElementById("lista-numeros").innerHTML = listaElementos;
  }
  