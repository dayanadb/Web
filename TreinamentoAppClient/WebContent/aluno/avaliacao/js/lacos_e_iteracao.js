/*1) Crie um laço que teste uma condição antes de entrar no loop
2) Dado o objeto {nome: "seu_nome", treinamento: "AWC"}, utilize a estrutura de repetição apropriada para imprimir no console os nomes dos atributos do objeto acima
3) Crie um laço 'for' que itere nos valores entre 5 e 20, imprimindo no console o valor corrente da iteração*/

var i = 0;
while(i <=5){

console.log(i);
   i++;

}
console.log('------------------------------------');

var obj = new Object();
obj = {nome: 'Dayana', treinamento: 'AWC'};

for (var c in obj) {
    console.log(c);
}


console.log('--------------------------------');
for (var i = 5; i<=20; i++ ){

    console.log(i);

}
