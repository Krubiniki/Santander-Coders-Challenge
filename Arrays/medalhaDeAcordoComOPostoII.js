// rescrever a função medalha de acordo com o posto utilizando arrays.

function medalhaDeAcordoComPosto (numero)
{
    var array = ["nada", "ouro", "prata", "bronze"];
    if(numero >= 1 && numero <= 3)
        return(array[numero]);
    else
        return (array[0]);
}