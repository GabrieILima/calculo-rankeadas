let ranking;
let pontosRaking;
function saldoVitoria(V, D) {
  return  V - D;}
  
  pontosRaking = saldoVitoria(50, 15);

  const faixasRaking = {
    10: 'Ferro',
    20: 'Bronze',
    50: 'Prata',
    80: 'Ouro',
    90: 'Diamante',
    100: 'Lendário',
  };
  for (let faixa in faixasRaking) {
    if (pontosRaking <= faixa) {
      ranking = faixasRaking[faixa];
      break;
    }
  }

  if (!ranking) {
    ranking = 'Imortal';
  }

  console.log(
    'O Herói tem de saldo de Vitoria ' +
      saldoVitoria(50, 15) +
      ' e está no nível ' +
      ranking
  );