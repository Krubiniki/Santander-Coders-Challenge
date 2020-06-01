//utilizando o switch para trocar valores entre duas variáveis

var numeroA = 30;
var numeroB = 45;
var numeroC;
console.log("A antes: " + numeroA,"B antes: " + numeroB);

numeroC = numeroA;
numeroA = numeroB;
numeroB = numeroC;
console.log("A depois: " + numeroA,"B depois: " + numeroB);