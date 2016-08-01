// 1) Crie uma coleção do tipo chaveada que não permita duplicidade de elementos
var a = new Set();
a.add(1);
a.add(2);
a.add(1);

// 2) Crie uma coleção do tipo chaveada que utiliza o par "chave/valor" para iteração
var b = new Map();

b.set("Nome","jun");
b.set("Treinamento", "treinamento AWC");
b.set("Dia", "Segunda-feira");

for(var [key, value] of b) {
    console.log(key +":"+  value);
}
