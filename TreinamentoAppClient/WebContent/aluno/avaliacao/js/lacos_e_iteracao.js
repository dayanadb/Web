console.log('LACOS E INTERACAO');
//1) Crie um laço que teste uma condição antes de entrar no loop
var limite = 0;
while (limite <= 10 ) {
    console.log('while --> limite :' + limite);
    limite++;
}

/*2) Dado o objeto {nome: "seu_nome", treinamento: "AWC"}, utilize a estrutura de repetição apropriada para imprimir no console os nomes dos atributos do objeto acima */
var objeto = {nome: "seu_nome", treinamento: "AWC"};
for (propriedade in objeto) {
    console.log('for..in.. --> propriedade: ' + propriedade);
}
//3) Crie um laço 'for' que itere nos valores entre 5 e 20, imprimindo no console o valor corrente da iteração
for (var valor = 5; valor <= 20; valor++) {
    console.log('for -- > valor: ' + valor);
}


