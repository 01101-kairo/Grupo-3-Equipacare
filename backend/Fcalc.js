const calcularValores = (
  salaCirugia, // 12
  cirugiasPorSala, // 6
  processamentoDeTecidos, // true
  dia, // 7   //<---
  cme, // 12  //tempo entre uma limpeza e outra <--
  leitoUTI, // 30
  leitoInternacaoRPA, // 149
  totalDeAutoclaves, // 3     // <--
  totalDeLavadorasTermo // 2 // <--
) => {
  const volumePorCirugia = 1.5
  const cirugiasPorDia = salaCirugia*cirugiasPorSala
  const volumeTotalDiarioSalasCirugiacas = cirugiasPorDia * volumePorCirugia
  console.log(`Volume Total Diário - Cirurgias : ${volumeTotalDiarioSalasCirugiacas}`)

  const volumePorDiaDeLeitoUTI = 0.5
  const volumeTotalPorDiaUTI = volumePorDiaDeLeitoUTI * leitoUTI
  console.log(`Volume Total Diário - UTIs : ${volumeTotalPorDiaUTI}`)

  const volumePorDiaDeLeitoDeInternacao = 0.05
  const volumeTotalDiarioInternacao = volumePorDiaDeLeitoDeInternacao * leitoInternacaoRPA
  console.log(`Volume Total Diário - Internação : ${volumeTotalDiarioInternacao}`)

  const estimativaDeVolumeTotalDiarioPorMaterial = volumeTotalDiarioSalasCirugiacas + volumeTotalPorDiaUTI + volumeTotalDiarioInternacao

  const UE = 54
  const estimativaDeVolumeTotalDiarioUE = processamentoDeTecidos ? estimativaDeVolumeTotalDiarioPorMaterial * 2 : estimativaDeVolumeTotalDiarioPorMaterial
  const estimativaDeVolumeTotalDiarioLitros = estimativaDeVolumeTotalDiarioUE * UE
  return[
    `Estimativa Volume Total Diário por Material : ${estimativaDeVolumeTotalDiarioPorMaterial}`,
    `ESTIMATIVA DE VOLUME TOTAL DIÁRIO UE: ${estimativaDeVolumeTotalDiarioUE}`,
    `ESTIMATIVA DE VOLUME TOTAL DIÁRIO litros: ${estimativaDeVolumeTotalDiarioLitros}`,
  ]
}
// as mascas
// const marcaA = ['a1','a2','a3','a5','a6','a7','a7','a8','a9']
// const marcaB = ['b1','b2','b3','b4','b5','b6','b7','b8']
// const marcaC = ['c1','c2','c3','c4','c5','c6','c7','c8']
// const marcaD = ['d1','d2','d3','d4','d5','d6','d7','d8']
// const marcaE = ['e1','e2','e3','e4','e5','e6','e7','e8','e9','e10','e11','e11','e13']
// const marcaF = ['f1','f2','f3','f4']

module.exports = { calcularValores }
