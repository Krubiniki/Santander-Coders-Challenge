//função que checa se o usuário já pode se aposentar de acordo com as condicionais:
// 1) Idade Mínima para mulheres("F") = 60 anos e homens ("M") = 65
// 2) Mínimo de 30 anos de contribuição

function podeSeAposentar(idade = 0, sexo = " ", cp = 0){
    return ((sexo === "F" && idade >= 60 && cp >= 30) || (sexo === "M" && idade >= 65 && cp >= 30));
}