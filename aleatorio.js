function generarNumeroAleatorio(min, max) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroAleatorio;
  }
  
  const numeroMinimo = 1;
  const numeroMaximo = 10;
  const numeroAleatorio = generarNumeroAleatorio(numeroMinimo, numeroMaximo);
  console.log("Número aleatorio:", numeroAleatorio);
  