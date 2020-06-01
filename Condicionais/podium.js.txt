//função que checa qual seu posto no podium de acordo com seu posto

function medalhaSegundoOPosto (posto = 0){
    if (posto === 1)
        return "ouro";
    if (posto === 2)
        return "prata";
    if (posto === 3)
        return "bronze";
    if (posto >= 4 || posto <= 0)
        return "Continue participando"
}