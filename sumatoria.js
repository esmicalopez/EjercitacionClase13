function sumatoria(arrayNumeros) {
    let totalSumas = 0;
    for (numero of arrayNumeros) {
        totalSumas += numero
    }
    return totalSumas
}
let numeros = [150, 600, -480, 35, 42]
console.log(sumatoria(numeros));