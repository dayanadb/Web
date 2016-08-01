/*1) Crie um laço que teste uma condição antes de entrar no loop
2) Dado o objeto {nome: "seu_nome", treinamento: "AWC"}, utilize a estrutura de repetição apropriada para imprimir no console os nomes dos atributos do objeto acima
3) Crie um laço 'for' que itere nos valores entre 5 e 20, imprimindo no console o valor corrente da iteração*/
var n = 0;
while (n < 3) {
    n++;
}
var obj = {
    nome: "Rafael"
    , treinamento: "AWC"
};
for (var i in obj) {
    console.log(obj[i]);
}

for (iterou = 5; iterou < 20; iterou++) {
    console.log(iterou);
}
