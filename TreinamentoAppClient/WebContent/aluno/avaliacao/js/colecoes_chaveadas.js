// 1) Crie uma coleção do tipo chaveada que não permita duplicidade de elementos
// 2) Crie uma coleção do tipo chaveada que utiliza o par "chave/valor" para iteração



var valores = [1,2,2,2,3];
var numerico = new Set(valores);

for (var x of numerico){
    console.log(x);
}

//--------------------------------------

var chaveado = new Map();
chaveado.set("animal","cachorro");
chaveado.set("raca","pastor alemão");

for (var[key,value] of chaveado){
    console.log(" map chave, valor: " + key + " " + value);
}

