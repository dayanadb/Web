console.log('TRABALHANDO COM OBJETOS');
//1) Declare um tipo através de função, contendo dois atributos internos chamado 'nome' e 'treinamento'. Deixá-los undefined
function Carro () {
    this.modelo = undefined;
    this.cor = undefined;
}

//2) Crie um objeto a partir da declaração acima, utilizando alguma das duas formas possível para instanciação
var carro = new Carro();

carro.modelo = 'Camaro';
carro.cor = 'Amarelo';

console.log('Meu ' + carro.modelo + ' ' + carro.cor);
