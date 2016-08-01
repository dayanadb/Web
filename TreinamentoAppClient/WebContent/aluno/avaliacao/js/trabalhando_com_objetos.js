/*
1) Declare um tipo através de função, contendo dois atributos internos chamado 'nome' e 'treinamento'. Deixá-los undefined
2) Crie um objeto a partir da declaração acima, utilizando alguma das duas formas possível para instanciação
*/
/*1*/
function Objeto_funcao(nome, treinamento) {
    this.nome = nome;
    this.treinamento = treinamento;
}
/*2*/
var estudante = new Objeto_funcao("Marco A Scheid","AWC");
console.log("Estudante: " + estudante.nome);
console.log("Curso: " + estudante.treinamento);
