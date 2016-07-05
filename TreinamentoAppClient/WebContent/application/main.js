var cao = new Cachorro();
cao.nome = "toto";
var gato = new Animal();
gato.nome = "miau";
var canil = new Canil();
canil.animais.push(cao);
canil.animais.push(gato);
canil.alimentar();