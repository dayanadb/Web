//Criar um objeto literal contendo 2 atributos e uma função(não precisa ser implementada)
var obj01 = {atr01:"Atributo1",atr02:"Atributo2", fn01: function(){return true}};
//Definir um tipo atraves de uma função, com 2 atributos e 1 função (não precisa ser implementada) Criar 1 objeto apartir dela
function fn01(){
    this.atr01 = "Atributo1";
    this.atr02 = "Atributo2";
    this.fn = function(){
        return true;
    }
}
var obj = new fn01();
//Definir um tipo contendo 3 atributos padrão e um quarto atributo atraves de prototipação (herança do tipo)
function fn02(){
    this.atr01 = "Atributo1";
    this.atr02 = "Atributo2";
    this.atr03 = "Atributo3";
}
fn02.prototype.atr04 = "Atributo4";
//Criar um objeto contendo 1 atributo e uma função que imprima o atributo utilizando referencia this

function fn03(){
    this.atr01 = "Atributo";
    this.imprimir = function(){
        console.log(this.atr01)
    }
}
