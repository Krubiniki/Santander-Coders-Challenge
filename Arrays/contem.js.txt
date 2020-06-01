//função que recebe uma array e um elemento como parâmetros. Se esse elemento estiver em alguma posição da array, essa função retornará o valor da posição na array

function contem(array = [], n = 0)
{
    return (array.indexOf(n) >= 0)
}