/**
 * 
 */
function sobrenome(){}
var Pessoa = {
    nome : "Ivan",
    idade : 21,
    sobrenome : sobrenome
};
function Pessoa(nome,idade){
    this.nome = nome;
    this.idade = idade;
};


//
var Pessoa = { nome: "",
              idade: "",
              carro: {
                  cor: "Azul",
                  ano: "2016",
              }
}

var p = new Pessoa();
p.idade;
p.nome;


//Prototype
function Pessoa(){
    this.nome;
}
function Animal(){

}
