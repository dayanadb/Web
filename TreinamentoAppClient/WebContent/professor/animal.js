function Animal(nome, idade) {
	this.idade = idade;
	this.nome = nome;
	this.comer = function comer() {
		console.log(this.nome + " está comendo");
	}
	this.brincar = function(frase) {
		return frase + "!!";
	}
}
