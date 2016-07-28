/**
obejct {nome:"Aldo", sobrenome:"Leonardo"}

Map:-> var a = new Map(); o Map sempre utiliza chave, valor.

a.set("nome","Aldo"), no set a chave sempre será uma "string"; var b = new Set();  var b = new Set(pode passar um array);
var d = Array.from(a); b.add(10), b.add("true"), b.add({}); quando usar o set ou array, array permite duplicidade de elemen-
tos e o set não permite.

var y = a.get("x"), estou recuperando da chave x e atribuindo em y;       
 
*/

//------------------------------------------------------------
//objeto Map com 03 objetos - Object{chave:valor, chave:valor, chave:valor}
Object{nome:"Aldo", sobrenome:"Leonardo", idade:"52"}

for(var i[chave, valor] of Object)
{
    console.log(chave i = " " + valor); //Aldo, Leonardo, 52
}

//-------------------------------------------------------------
//set com 03 objetos
var a.set(nome:"Aldo", sobrenome:"Leonardo", idade;"52")

for(i of a)
{
	console.log(i); // Aldo, Leonardo, 52
}

//-------------------------------------------------------------
//objeto convertido para array
Object{nome:"Aldo", sobrenome:"Leonardo", idade:"52"};


//--------------------------------------------------------------
//Array com 04 posições e converta para Set
var a = [1,2,3,4];




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

*/

