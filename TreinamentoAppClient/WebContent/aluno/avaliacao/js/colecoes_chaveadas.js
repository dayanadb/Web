// 1) Crie uma coleção do tipo chaveada que não permita duplicidade de elementos
// 2) Crie uma coleção do tipo chaveada que utiliza o par "chave/valor" para iteração

//1
var a = new Set();
a.add(10);
a.add("fo");
a.add("oi");

for(var i of a){
    console.log(i);
}

//2
var b = new Map();
b.set(1, "nome");
b.set(2, "idade");
b.set(3, "sexo");

for(var i of b){
    console.log(key+" "+value);
}
