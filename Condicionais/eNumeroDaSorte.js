// função que retorna true se for um número da sorte de acordo com as condições apresentadas:
// 1) número é positivo
// 2) é um múltiplo de 2 ou 3
// 3) não é o número 15

function eNumeroDaSorte (num)
{
    return num > 0 && ((num % 2 === 0)  || (num % 3 === 0)) && num != 15;
}