//função que utiliza math random para simular uma probabilidade de chuva

function gerarProbabilidade(){
    return (Math.random() * 100);
}

console.log = ("Probabilidade de chuva: " + gerarProbabilidade() + "%.");