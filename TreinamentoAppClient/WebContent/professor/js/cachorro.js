function Cachorro(nome, idade, raca, foto) {
	Animal.call(this, nome, idade, foto);
	this.raca = raca;
}
Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.teste = "testado";