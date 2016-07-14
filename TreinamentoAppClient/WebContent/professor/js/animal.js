function Animal(nome, idade, foto) {
	this.idade = idade;
	this.nome = nome;
	this.foto = foto;
	this.comer = function comer() {
		console.log(this.nome + " está comendo");
	}
	this.brincar = function(frase) {
		return frase + "!!";
	}
}
