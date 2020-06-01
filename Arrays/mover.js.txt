//função que retira o último elemento de uma array, e o adiciona ao último elemento de outra array
//para o push, o retorno é uma array com um elemento novo
//para o pop, o retorno é o elemento retirado da array

function mover(umArray, outroArray)
{
    outroArray.push(umArray.pop())
}