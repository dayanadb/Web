// 1) Crie uma coleção do tipo chaveada que não permita duplicidade de elementos
// 2) Crie uma coleção do tipo chaveada que utiliza o par "chave/valor" para iteração

var a = new Set([1, 2, 3]);

var map01 = new Map();
map01.set(0, "zero");
map01.set(1, "um");
map01.set(2, "dois");
map01.set(3, "tres");
map01.set(4, "quatro");
for (var [key, value] of map01)
{
    console.log(key + " = " + value);
}
