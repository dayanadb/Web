/*
1) Declare um tipo através de função, contendo dois atributos internos chamado 'nome' e 'treinamento'. Deixá-los undefined
2) Crie um objeto a partir da declaração acima, utilizando alguma das duas formas possível para instanciação
*/
function Aluno() {
    this.nome = undefined;
    this.treinamento = undefined;
}
var obj = new Aluno();
obj.nome = "Lucas";
obj.treinamento = "WAC";
