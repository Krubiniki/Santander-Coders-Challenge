// Desafio consiste em calcular a altura de uma árvore seguindo as seguintes regras:

// 1) a arvore começa com 1 metro, na estação do outono
// 2) cada primavera dobram seu tamanho 
// 3) cada verão crescem um metro
// 4) a cada ciclo, ocorre o revezamento entre verão e primavera, começando com primavera
// 5) 0 ciclo deve retornar altura 1

function alturaArvoreUtopica(num)
{
  var altura = 1;
  for (var i = 0; i < num; i++)
  {
    if((i + 1) % 2 === 0)
      altura += 1;
    else
      altura *= 2;
  }
  return altura;
}