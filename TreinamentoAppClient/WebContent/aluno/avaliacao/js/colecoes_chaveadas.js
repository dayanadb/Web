// 1) Crie uma coleção do tipo chaveada que não permita duplicidade de elementos
// 2) Crie uma coleção do tipo chaveada que utiliza o par "chave/valor" para iteração


var a= new Map();
a.set("nome","xxxx");
a.set("mod","yyyyy");
a.set("cor","MMMMM");
a.set("gasolina",true);
for (var [key, value] of a) {
  console.log(key + " = " + value);
}







var b= new Map();
b.set("nome","xxxx");
b.set("mod","yyyyy");
b.set("cor","MMMMM");
b.set("gasolina",true);
for (var [key, value] of b) {
  console.log(key + " = " + value);
}


