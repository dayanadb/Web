/*1) Crie um laço que teste uma condição antes de entrar no loop */
var a=1;
while(a < 10) {
    a++;
console.log(a);
}

/*2) Dado o objeto {nome: "seu_nome", treinamento: "AWC"}, utilize a estrutura de repetição apropriada para imprimir no console os nomes dos atributos do objeto acima */
var Pessoa = {nome:"jun", treinamento:"AWC"};
for (var x in Pessoa) {
     console.log(Pessoa[x]);
}

/*3) Crie um laço 'for' que itere nos valores entre 5 e 20, imprimindo no console o valor corrente da iteração*/
for(var i=5;i <= 20;i++) {
    console.log(i);
}
