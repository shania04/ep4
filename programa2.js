function calcularCubos() {
    // Obtener los valores de los inputs
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
  
    // Validar los números
    if (isNaN(num1) || isNaN(num2)) {
      alert("Por favor, ingrese ambos números.");
      return;
    }
  
    // Identificar el rango de números
    const inicio = Math.min(num1, num2);
    const fin = Math.max(num1, num2);
  
    // Inicializar el resultado
    let resultadoHTML = "";
  
    // Calcular el cubo de los números impares en el rango
    let i = inicio;
    do {
      if (i % 2 !== 0) {
        resultadoHTML += `<p>${i} => ${i ** 3}</p>`;
      }
      i++;
    } while (i <= fin);
  
    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = resultadoHTML;
  }
  