function invertirTexto(texto) {
    let textoInvertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto[i];
    }
    return textoInvertido;
  }
  
  const textoOriginal = "Hola, mundo!";
  const textoInvertido = invertirTexto(textoOriginal);
  console.log("Texto invertido:", textoInvertido);
  