/*1) Crie um laço que teste uma condição antes de entrar no loop
2) Dado o objeto {nome: "seu_nome", treinamento: "AWC"}, utilize a estrutura de repetição apropriada para imprimir no console os nomes dos atributos do objeto acima
3) Crie um laço 'for' que itere nos valores entre 5 e 20, imprimindo no console o valor corrente da iteração*/


var soma = 100;
for( var i = 0; soma <= 100; i++)
{
    console.log(soma);
}


var pessoa = {treinamento:"Treinamento",awc : "AWC"};
let i;

for (i in pessoa)
{
	console.log(pessoa[i]);//log "Treinamento","AWC"
}

for(var i = 5; i<=20; i++)
{
   console.log(i);
}
