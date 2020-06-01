// completar a função para que somasse a quantidade de meses que teve lucro

function quantidadeDeMesesComLucro(umPeriodo) {
  let quantidade= 0;
  for (let mes=0; mes< umPeriodo.length; mes++) {
    if(umPeriodo[mes] > 0)
      quantidade++;
  }
  return quantidade;
}