/*1) Crie um laço que teste uma condição antes de entrar no loop
2) Dado o objeto {nome: "seu_nome", treinamento: "AWC"}, utilize a estrutura de repetição apropriada para imprimir no console os nomes dos atributos do objeto acima
3) Crie um laço 'for' que itere nos valores entre 5 e 20, imprimindo no console o valor corrente da iteração*/


a = 0;
while (a < 100) {
    console.log("contando = " + a);
    a++;
}

var aluno = {
    nome: "Roberto Carlos Leonardo",
    treinamento: "AWC"};
var pp = Object.create (aluno);
console.log("Nome do aluno= " + pp.nome);




for ( i = 5; i <= 20; i++) {
    console.log("for loop i = " + i);
}
