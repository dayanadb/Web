/**
 * 
 */
var animal = new Animal();
animal.comer();

Animal.prototype.raca = "chiuaua";
Animal.prototype.dormir = function() {
	console.log(this.nome + " está dormindo");
}

animal.dormir();
console.log(animal.comer.toString());

var myObject = animal.comer.call(myObject); 
