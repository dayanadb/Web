/**
 * Try, cacth, finally
 */
var idade = 20;
try {
    var novaIdade = calculo(idade);
    console.log(novaIdade);
}
catch (Error) {
    console.log("Por favor, preencher sua idade");
}

switch (idade) {
case 10:
    idade = idade + 1;
    break;
default:
    idade;
    console.log(idade);
}

function calculo(idade) {
    if (idade != null) {
        return idade = idade + 1;
    }
    else {
        throw Error;
    }
}
/**
 * CONSIDERAÇÕES:
    Perfeito, parabéns! Apenas verifique que na linha 27, o throw deve lançar um novo objeto do tipo Erro - poderia ajustar para ficar assim: throw new Error('idade está nula');
  */
