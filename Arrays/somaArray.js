//testando os resultados de uma função que soma elementos de array

var umSemestre = [50, -12, 1000, 300, 200, 0];
var outroSemestre = ["zero","um","dois","tres","quatro","cinco"];

function somaLucroSemestre(umSemestre) {
    return umSemestre[0] + umSemestre[1] +
        umSemestre[2] + umSemestre[3] +
        umSemestre[4] + umSemestre[5];
}

console.log(somaLucroSemestre(umSemestre[0]));
console.log(somaLucroSemestre(umSemestre));
console.log(somaLucroSemestre(outroSemestre));