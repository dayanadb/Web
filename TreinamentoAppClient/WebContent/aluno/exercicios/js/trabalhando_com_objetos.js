/**
 * 
 */

//Objeto literal com 2 atributos e uma função//
var Animal = {nome:"rex",idade: 2, dormir: function() { return true}};

//Tipo de uma função, contendo pelo menos 2 atributos e uma função(não precisa ser implementada) e crie um objeto a partir da mesma//
function a() {
    this.nome="";
    this.sexo="";
    this.comer= function() {
        return true;
    }
}
var p1 = new a();

//Tipo contendo 3 atributos padrão e um quarto atributo através da prototipação(herança de tipos)//
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}
Person.prototype.nationality = "English"; //afeta todos os Person (acrescenta o parametro para todos)

var a = new Person();
console.log(a.nationality);

function Animal() {
this.age = 2;
}
Person.prototype = new Animal() //permite herança dinâmica ou seja, Person também tem acesso ao Animal. Se age =3 vai alterar para Person e Animal


//Objeto contendo um atrivuto e uma função que imprima o atributo utilizando referencia this//
function a() {
    this.nome="";
    this.sexo="";
    this.comer= function() {
        return true;
    }
    console.log(this.comer);
}
