console.log('SINTAXE E TIPOS');

//1) Declare uma variavel (undefined)
var idade;

// 2) Inicialize a variavel acima com um literal 'Number'
var valorIngresso = 100;

idade = 35;
// 3) Declare uma variável de escopo de bloco
if (idade > 10 && idade < 65 ) {
    var valorPagar;
    var couver = 10;
    // menores de 18 anos pagam meia
    if (idade < 18) {
        valorPagar = valorIngresso / 2;
    }
    // entre 19 e 50 paga 75%
    else if (idade <= 50 ){
        valorPagar = valorIngresso * 0.75;
    }
    // de 50 até 64 anos paga apenas couver
    else  {
        valorPagar = couver;
    }
    console.log(valorPagar);
}
else {
    console.log('Isento de ingresso')
}

