/*1) Crie um laço que teste uma condição antes de entrar no loop
2) Dado o objeto {nome: "seu_nome", treinamento: "AWC"}, utilize a estrutura de repetição apropriada para imprimir no console os nomes dos atributos do objeto acima
3) Crie um laço 'for' que itere nos valores entre 5 e 20, imprimindo no console o valor corrente da iteração*/
//1
var a = 20;

while(a < 10){
    console.log(a);
}

if(a == 20){
    console.log("Entrei");
}
else{
    console.log("Foo");
}

//2
var dados = {nome:"Ivan", treinamento:"AWC"};
for(var prop in dados){
    console.log(dados);
}

//3
var b = 20;
for(int i = 5; i < b; i++){
    console.log(i);
}
