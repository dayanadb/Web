/*
1) Declare um tipo através de função, contendo dois atributos internos chamado 'nome' e 'treinamento'. Deixá-los undefined
2) Crie um objeto a partir da declaração acima, utilizando alguma das duas formas possível para instanciação
*/

function Avalicacao(){
    this.nome;
    this.treinamento;

}
console.log('--------------------------------');
var a = new Avalicacao();

a.nome = 'Dayana';
a.treinamento = 'AWC';
console.log(a.nome);
console.log(a.treinamento);
