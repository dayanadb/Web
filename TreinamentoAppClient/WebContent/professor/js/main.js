var currentScreen = 'dadoscadastrais';
function doDrop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}

function deixa(event) {
	event.preventDefault();
	event.stopPropagation();
}

function startDrag(ev) {
	ev.dataTransfer.effectAllowed = "copy";
	ev.dataTransfer.dropEffect = "copy";
	ev.dataTransfer.setData("text", ev.target.id);
}

function backward() {
	var next = document.getElementById('backarrow');
	var back = document.getElementById('backarrow');
	next.addEventListener("click", function(e) {
		switch (currentScreen) {
		case 'servicosadicionais':
			document.getElementById('servicosadicionais').hidden = true;
			document.getElementById('dadoscadastrais').hidden = false;
			currentScreen = 'dadoscadastrais';
			break;
		case 'confirm':
			document.getElementById('confirm').hidden = true;
			document.getElementById('servicosadicionais').hidden = false;
			currentScreen = 'servicosadicionais';
			break;
		}
	});
}

function forward() {
	var next = document.getElementById('nextarrow');
	var back = document.getElementById('backarrow');
	next.addEventListener("click", function(e) {
		switch (currentScreen) {
		case 'dadoscadastrais':
			document.getElementById('dadoscadastrais').hidden = true;
			document.getElementById('servicosadicionais').hidden = false;
			currentScreen = 'servicosadicionais';
			break;
		case 'servicosadicionais':
			document.getElementById('servicosadicionais').hidden = true;
			document.getElementById('confirm').hidden = false;
			currentScreen = 'confirm';
			break;
		case 'confirm':
			document.getElementById('confirm').hidden = true;
			document.getElementById('end').hidden = false;
			currentScreen = 'end';
			break;
		}
	});
}

function startup() {
	try {
		var cao1 = new Cachorro("Toto", 3, "Shih Tzu", 'http://www.mendhammoves.com/articles/rescue_dogs/puppy.png');
		var cao2 = new Cachorro("Lilika", 5, "Pitbull", 'http://static.ddmcdn.com/en-us/apl/breedselector/breed-selector/images/quiz-dogs/dog1.png');
		var cao3 = new Cachorro("Thor", 10, "Rotweiller", 'http://www.pngall.com/wp-content/uploads/2016/03/Dog-PNG-5-180x180.png');
		var cao4 = new Cachorro("Scooby", 3, "Pintcher", 'http://pngimg.com/upload/dog_PNG2415.png');
		var cao5 = new Cachorro("Tiger", 5, "Basset", 'http://littlepaws4pets.co.uk/images/content/a-new-home-for-your-dog.png');
		var canil = new Canil([ cao1, cao2, cao3, cao4, cao5 ]);
		var animais = canil.animais;
		var selectanimais = document.getElementById("animais");
		var selecionados = document.getElementById("selecionados");
		for (var int = 0; int < animais.length; int++) {
			var animal = animais[int];
			var animalDiv = document.createElement("div");
			var dadosDiv = document.createElement("div");
			animalDiv.className = 'animais';
			animalDiv.draggable = true;
			animalDiv.id = animal.nome + animal.idade + animal.raca;
			animalDiv.addEventListener("dragstart", startDrag, true);
			var imagem = document.createElement("img");
			var nome = document.createElement("p");
			var idade = document.createElement("p");
			var raca = document.createElement("p");
			imagem.src = animal.foto;
			nome.className = 'name';
			nome.innerHTML = animal.nome;
			idade.innerHTML = animal.idade + ' anos';
			raca.innerHTML = animal.raca;
			dadosDiv.appendChild(nome);
			dadosDiv.appendChild(idade);
			dadosDiv.appendChild(raca);
			animalDiv.appendChild(imagem);
			animalDiv.appendChild(dadosDiv);
			selectanimais.appendChild(animalDiv);
		}
	} catch (e) {
		console.log(e);
	}
}

window.addEventListener("load", forward, true);
window.addEventListener("load", backward, true);
window.addEventListener("load", startup, true);
var teste = {
	a : 'teste',
	b : 'de novo',
	c : function() {
		console.log("c chamado");
	}
};
teste.c();
var obj = Object.create(Cachorro.prototype);
console.log(obj);