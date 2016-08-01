/*1) Declare um tipo atraves de uma função
2) Instancia um objeto para o tipo definido acima, utilizando uma das duas formas possiveis de instanciação*/

function motor(){

}
var Carro ={
    nome:"bmw",
    ano:2016
    motor();
};

function Carro(nome,ano,cor){
    this.nome = nome;
    this.ano = ano;
    this.cor = cor;
}
var a = new Carro();
a.nome = "bmw";
a.ano = 2016;
a.cor = "Red";
