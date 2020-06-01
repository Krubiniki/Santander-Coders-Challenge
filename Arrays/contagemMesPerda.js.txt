//função que conta meses com perda

function quantidadeDeMesesComPerda(umPeriodo) {
  let quantidade= 0;
  for (let mes=0; mes< umPeriodo.length; mes++) {
    if(umPeriodo[mes] < 0)
      quantidade++;
  }
  return quantidade;
}