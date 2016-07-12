try {
	var cao1 = new Cachorro("toto1", 1);
	var cao2 = new Cachorro("toto2", 5);
	var cao3 = new Cachorro("toto3", 10);
	var canil = new Canil([ cao1, cao2, cao3 ]);
	canil.alimentar();
} catch (e) {
	console.log(e);
}
