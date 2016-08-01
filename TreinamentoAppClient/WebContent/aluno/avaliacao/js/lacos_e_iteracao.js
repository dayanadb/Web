/*1) Crie um laço que teste uma condição antes de entrar no loop
2) Dado o objeto {nome: "seu_nome", treinamento: "AWC"}, utilize a estrutura de repetição apropriada para imprimir no console os nomes dos atributos do objeto acima
3) Crie um laço 'for' que itere nos valores entre 5 e 20, imprimindo no console o valor corrente da iteração*/
/*1*/
var iterador = -3;
do {
    let imprimir = iterador;
    console.log("A variável tem valor: " + iterador);
    iterador++;
}
while (iterador <= 7);
/*2*/
var objeto2 = {
    nome: "Marco A Scheid"
    , treinamento: "AWC"
};
var extrator;
for (extrator in objeto2){
    console.log(objeto2[extrator]);
}
/*3*/
var iterador3 = 5;
for (; iterador3 <= 20; iterador3++) {
    console.log("Iteracao corrente: " + iterador3);
}
