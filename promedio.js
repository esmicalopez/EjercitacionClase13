function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    const promedio = suma / numeros.length;
    return promedio;
  }
  
  const numeros = [10, 20, 30, 40, 50];
  const promedio = calcularPromedio(numeros);
  console.log("El promedio es:", promedio);
  