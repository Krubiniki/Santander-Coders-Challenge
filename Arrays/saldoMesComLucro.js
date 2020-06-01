//função que soma os valors de um meses que tiveram lucro

function saldoDeMesesComLucro(umPeriodo) {
  var lucros = [];
  for (let mes=0; mes< umPeriodo.length; mes++) {
    if(umPeriodo[mes] > 0)
      lucros.push(umPeriodo[mes]);
  }
  return lucros;
}