//função que percorra do 0 ao 6 com o interador, imprimindo os números pares.

function passandoPelosPares()
{
    for(var i = 0; i < 7; i += 2)
    {
        if(i % 2 === 0)
            console.log("aqui eu tenho o valor de " + i);
    }
}