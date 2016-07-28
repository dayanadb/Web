/**
  É um conjunto de instruções que executa uma tarefa ou calcula um valor.
 método a ser invocado em algum lugar no código
 função anônima: var comer = function(){};
 ainda: var x = comer() ou var y = comer;(aqui y passa a ser a função)
 */

//função anônima
var conexao = conecta()
{
	var x = "conectou";
	var y = "não conectou";
	
	console.log(x);
	console.log(y);
}

//função anônima retornado string literal
var conexao = conecta()
{
	var x = "conectou";
	var y = "não conectou";
	
	console.log(x);
	console.log(y);
	return("conectou");
}

//função armazenando a primeira função.
function reciclar()
{
	var escopo= conexao();
}

//função aninhada
function aninhada()
{
	var x = 10;
	
	function maisInterna()
	{
		var y = 100;
		if(y < 100)
		{
			soma = x + y;
		}
		
	}
}

//função recebendo um parâmetro
var x = 10;
function soma(x)
{
	var mult = x * 5;
	console.log(mult);
}

//função recebe parâmetro "rest"
function calculo(rest)
{
	var diferenca = 100 - rest;
}

//função que útiliza o léxico "this."
function pessoas(nome, sobrenome, idade)
{
    var primeiroNome = "";
	var ultimoNome = "";
	var idade1 = 0;
	this.primeiroNome = nome;
    this.ultimoNome = sobrenome;
    this.idade1 = idade;
 }
