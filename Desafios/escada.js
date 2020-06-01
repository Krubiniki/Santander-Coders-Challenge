//desafio consiste em escrever uma escada em uma array, recebendo um número de parâmetro que será a quantidade de degraus.

// Escada de exemplo: 3 andares
//
//	"  #"
//	" ##"
//	"###"

function escada(num)
{
    var esc = [];
    var hash = num;
    for(var i = 0; i < num; i++)
    {
      esc.push(" ".repeat(hash - 1) + "#".repeat(i + 1))
      hash--;
    }
    return esc;
}