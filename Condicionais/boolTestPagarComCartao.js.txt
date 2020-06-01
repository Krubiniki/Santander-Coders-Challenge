//exercício que checa as condicionais da função pagarComCartao com parâmetros diversos.

//a função não foi escrita, mas a testada foi disponibilizada:

//	function pagarComCartao(temJuros, taxasDoCartao, dinheiroDisponivel)
//	{
// 	 return !temJuros && taxasDoCartao >= 3 || dinheiroDisponivel < 100;
//	}

console.log(pagarComCartao(true, 6, 320));
console.log(pagarComCartao(false, 8, 80));
console.log(pagarComCartao(true, 2, 215));
console.log(pagarComCartao(true, 1, 32));