// 1) Crie uma coleção do tipo chaveada que não permita duplicidade de elementos
// 2) Crie uma coleção do tipo chaveada que utiliza o par "chave/valor" para iteração


var a= new set();
a.set("nome","xxxx");
a.set("mod","yyyyy");
a.set("cor","MMMMM");
a.set("gasolina",true);
for (var [key, value] of a) {
  console.log(key + " = " + value);
}







var a= new map();
a.set("nome","xxxx");
a.set("mod","yyyyy");
a.set("cor","MMMMM");
a.set("gasolina",true);
for (var [key, value] of a) {
  console.log(key + " = " + value);
}


