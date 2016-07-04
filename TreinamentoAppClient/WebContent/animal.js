function Animal() {
	this.idade = 0;
	this.nome = "";

	this.comer = function comer() {
		console.log(this.nome + " está comendo");
	}
}