/*1) Crie um laço que teste uma condição antes de entrar no loop
2) Dado o objeto {nome: "seu_nome", treinamento: "AWC"}, utilize a estrutura de repetição apropriada para imprimir no console os nomes dos atributos do objeto acima
3) Crie um laço 'for' que itere nos valores entre 5 e 20, imprimindo no console o valor corrente da iteração*/
var x = 0;
var y = 7;
while (x < y) {
    x++;
}

var obj = {
    nome: "seu_nome"
    , treinamento: "AWC"
};
for (var key in obj) {
    console.log(obj[key]);
}
for (var i = 5; i < 21; i++) {
    console.log(i);
}
