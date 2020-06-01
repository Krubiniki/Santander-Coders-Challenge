//função que detecta se o indivíduo é um filósofo hipster e retorna true pelas condições abaixo:
// 1) é "Músico"
// 2) nacionalidade "Brasil"
// 3) anda mais de 2 km por dia

function filosofoHipster (prof = " ", nac = " ", kmDia = 0)
{
    return (prof === "Músico" && nac === "Brasil" && kmDia >= 2)
}