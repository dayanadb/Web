function Canil(animais) {
	this.nome = "";
	this.endereco = "";
	this.animais = animais;
	this.alimentar = function() {
		for (var int = 0; int < this.animais.length; int++) {
			var animal = this.animais[int];
			animal.comer();
		}
	}

}