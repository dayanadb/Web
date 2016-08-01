/**
 * 
 */
/*

var Pessoa={nome:"teste", sexo:""}
ou
function Pessoa() {
    this.nome="";
    this.sexo="";
}

var p1 = new Pessoa();

a.nome="xxxxxx";
a["nome"] = "xxxxx";
var b = a.nome;
b = a["nome"];


var Pessoa = {
    nome:"",
    sexo:"";
    comer: function() {console.log("comer")}
dormir: deitar;
}

function deitar() {
    return "a";
}

function Pessoa(){
    this.nome;
    this.dormir = deitar;

}

delete a.nome  // del atributo
a.endereco="" //add atributo


Herança dinamica
Pessoa.prototype = new Animal = está extendendo o tipo animal.....
Pessoa.prototype.idade=10 // altera todas as instancias que forem criadas apos esse comando.

tipos: literal e construtor
*/
// crie um objeto literal, contendo pelo menos dois atriutos e uma função. não precisa ser implementada
var carrro = {
    marca:"",
    modelo:"",
    abastecer: function() {console.log("enchendo o tanque")}};

var pp = Object.create (carrro);


// defina um tipo através de uma função, contendo pelo menos dosi atributos e uma função e crie um objeto a partir da mesma
function Carro(){
    this.marca;
    this.modelo;
    this.calibrar = function(){};
}
var c1 = new Carro();
c1.marca="teste e marca";
console.log("marca= " + c1.marca);

// crie um objeto contendo um atributo e uma função que imprima o atributo  e uma função que imprima o atributo utilizando referencia a "this"

var Pessoa = {
    nome:"teste",
    sexo:"",
    vestir: function() {console.log("vestindo");},
    andar : function() {console.log(this.nome + " andando");}
};

var pess=Object.create (Pessoa);
pess.vestir;
pess.andar;



