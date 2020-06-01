//função que retorna quanto dinheiro você tem a partir da quantidade de moedas de 25 centavos

function somarMoedasDe25(quantidadeDeMoedas = 0)
{
    var money = 0;
    
    for(var i = 0; i < quantidadeDeMoedas; i++)
        money += 0.25;
    return money;
}