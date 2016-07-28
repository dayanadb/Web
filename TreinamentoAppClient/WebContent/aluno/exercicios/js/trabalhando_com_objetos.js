/**
 * Objeto é uma instancia de um tipo pre definido
 */


/** //formas de criar um tipo de um objeto
var Pessoa  = {nome: "Dayana", sexo: "feminino"}

//OU
function Pessoa (){
    this.nome = 'Maria';
    this.sexo = 'feminino';
}

//instanciar um objeto

var b = new Pessoa();  --> via função

//OU

var b = Object.create(Pessoa); --> para um objeto literal (se instanciar new Pessoa da ruim)
b.nome = "João";

//----------declarando funções dentro de um objeto----------

//declaração literal
var Pessoa = {nome: "Dayana",
            sexo: "feminino",
            comer: function(){console.log("Dormindo");},
            dormir: deitar;
           }

function deitar(){ // função fora da classe, que é atribuida a função dormir da classe
    retorn a;
}

//OU

function Pessoa (){
    this.nome = 'Maria';
    this.sexo = 'feminino';
    
    this.comer = function(){console.log("Dormindo")};
    this.dormir = deitar;
}*/

//------Exercicio--------------------------------------------------------------------------------
console.log(" ---------------------Objeto------------------------");
var Pessoa = {nome: "Dayana",
            sexo: "feminino",  
            comer: function(){console.log("Dormindo");}, 
            dormir: deitar,
            carro:{cor:'Branco',ano:'2016',modelo:'Ford'}
           };

function deitar(){ // função fora da classe, que é atribuida a função dormir da classe
    return 'a';
}
var p1 =  Object.create(Pessoa);
console.log("Valor nome p1: " + p1.nome);
console.log("Info do carro: " + p1.carro.cor + " " + p1.carro.ano + " " + p1.carro.modelo);


function Animal(){ //objeto animal
    this.raca;
    this.tipo;
    
}

var a1 = new Animal();
a1.tipo = "cachorro";
a1.raca = "Pastor alemão";

console.log("Tipo: " + a1.tipo + " Raça: " + a1.raca);

//------------------------------Herança-----------------------------

function Pessoa1(){
    this.nome
}

function Animal(){
    this.idade;
    this.comer= function(){}
    
}
Pessoa1.prototype = new Animal();  //--> herança dimanica - define um tipo para a Pessoa
Pessoa1.prototype.idade = 10;  //define um valor default para a idade

var a = new Pessoa1();
var b = new Pessoa1();

console.log ("Idade : " + b.idade);


