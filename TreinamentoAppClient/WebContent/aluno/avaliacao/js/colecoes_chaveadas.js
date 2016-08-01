// 1) Crie uma coleção do tipo chaveada que não permita duplicidade de elementos
// 2) Crie uma coleção do tipo chaveada que utiliza o par "chave/valor" para iteração
/*1*/
var set_ex1 = new Set();
set_ex1.add(11);
set_ex1.add(21);
set_ex1.add(31);
set_ex1.add(112);
set_ex1.add(221);
set_ex1.add(31);
set_ex1.add(11);
set_ex1.add(2121);
set_ex1.add(31243);
set_ex1.add(11);
set_ex1.add(21231);
set_ex1.add(31);
for (var item of set_ex1) {
    console.log(item);
}
/*2*/
var chave_valor = new Map();
chave_valor.set("chave1", "um");
chave_valor.set("chave2", "dois");
chave_valor.set("chave3", "tres");
chave_valor.set("chave4", "quatro");
chave_valor.set("chave5", "cinco");
for (var [key, value] of chave_valor) {
    console.log(key + " " + value);
}
