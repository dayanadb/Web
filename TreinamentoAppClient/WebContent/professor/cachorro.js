function Cachorro(nome, idade) {
	Animal.call(this, nome, idade);
	this.raca = "srd";
}
Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.teste = "testado";