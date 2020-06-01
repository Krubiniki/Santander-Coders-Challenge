// função que checa se o usuário pode subir na montanha russa através das condicionais:
// 1) Altura mínima de 1,5 ou 1,2 se estiver acompanhado
// 2) Não ter problema cardíaco
// 3) utilizar os parâmetros: alturaPessoa (numero), vemComCompania (booleano), temProblemaCardiaco (booleano)

function podeSubir(alturaPessoa = 0, vemComCompania,  temProblemaCardiaco){
    return ((vemComCompania === false &&alturaPessoa >= 1.5 && temProblemaCardiaco === false) || (vemComCompania === true && alturaPessoa >= 1.2 && temProblemaCardiaco === false));
}