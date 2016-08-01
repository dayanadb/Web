console.log('CONTROLE DE FLUCO E MANIPULACAO DE ERRO');
var numero = 10;
var numeroStr = '10';
//1) declare um bloco try...catch...finally e force um lancamento de exceção dentro da declaração try
try {
    //2) Declare um bloco if...else if...else
    if (numero != numeroStr) {
        console.log('Valores diferentes');
    } else if (numero !== numeroStr ) {
        throw new Error('Valores iguais. Tipos diferentes');
    } else {
       console.log('Tudo igual');
    }
}
catch(e) {
    console.log(e.message);
}
finally {
    numeroStr = numero;
}
