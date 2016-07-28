/*
Orientação objeto é uma instância de um tipo pré definido, em Java seria uma "Classe";
existem formas de declarar(criar) um objeto:

var Pessoa = { nome:"", sexo: ""} - tipo "Pessoa" forma literal ou 
var b = new Pessoa(); // instanciando objeto. ou
var b = object.create(Pessoa);

function Pessoa()
{
	this.nome = '';
	this.sexo = '';
}

comer: function(){console.log('Comendo')};// declaração anônima

dormir: deitar;função dormir reaproveita a função deitar
ou
function deitar(){};

function Pessoa()
{
	this.nome;
	this.dormir = deitar();//método deitar
}

function Animal()
{
	this.raca='';
	
	this.comer = function()
	{
		this.dormir();
	}
	
	this.dormir = function()
	{
	  //faz algo e
	  return(algo);
	}
}

outra:

function Pessoa()
{
	this.nome = '';
	this.idade = '';
	this.comer = function(){};
}

	var a = new Pessoa()
	{
	delete a.nome;// deleta atributo
	a.endereco = ''; // inclui atributo "endereço"
	}
	

//prototype:

Pessoa.prototype = new Planta();//construtor
Pessoa.prototype = new Animal();//construtor
Pessoa.prototype = new Carro();//construtor
Planta.prototype = new Vegetal();//construtor

function Pessoa(idade)
{
	this.nome;
}

function Animal()
{
	this.nome;
	this.idade = 8;
	this.comer = function(){};
	
}

Pessoa.prototype = new Animal();
var a = new Pessoa();
a.idade = 12;

var b = new Pessoa();
b.idade; // valerá 8


Exemplo:

function Debito()
{
	this.debitar = function()
	{
		super.processar(); // aqui chama pai.
	}
}

function Credito()
{
	this.creditar = function()
	{
		super.processar;
	}
}
function Operacao()
{
	this.processar= function(){};
}

Debito.prototype = new Operacao();
Credito.prototype = new Operacao();

*/


//Exercícios:

//objeto literal
var Carro = { marca:"Vw", modelo:"Gol"};


//tipo atraves de função, com atributos e uma função, e objeto a partir da mesma.
function carro ()
{
	this.modelo= "Fusion";
	this.marca = "Ford";
		this.lavar = function()
		{
			this.sempre='';
		}
}


//objeto contendo atributo e uma função utilizando "this."
function Animal()
{
	this.raca='';
	
	this.comer = function()
	{
		this.dormir();
	}
	
	this.dormir = function()
	{
	  //faz algo e
	  return(algo);
	}
}



