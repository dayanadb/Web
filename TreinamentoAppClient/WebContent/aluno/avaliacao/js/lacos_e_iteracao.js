/*1) Crie um laço que teste uma condição antes de entrar no loop
2) Dado o objeto {nome: "seu_nome", treinamento: "AWC"}, utilize a estrutura de repetição apropriada para imprimir no console os nomes dos atributos do objeto acima
3) Crie um laço 'for' que itere nos valores entre 5 e 20, imprimindo no console o valor corrente da iteração*/

//1-------------------------------------------
var i=0;
while (i<10){
    i += 2;
  console.log(i);
}
//--------------------------------------------

//2-------------------------------------------
var obj = {nome: "seu_nome", treinamento: "AWC"};
for(o in obj){
    console.log(o);
}

//3-------------------------------------------
i = 5;
for (i; i<21; i++){
    console.log(i);
}
