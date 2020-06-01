//função que soma 25 centavos a cada loop. Variáveis declaradas dentro do for não podem ser consultadas fora

function somar5MoedasDe25Centavos()
{
    var money = 0;
    
    for(var i = 0; i < 5; i++)
        money += 0.25;
    return money;
}