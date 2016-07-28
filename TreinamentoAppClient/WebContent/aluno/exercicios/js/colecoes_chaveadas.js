//Criar um Map com 5 objetos e usar for...of para imprimir o valor de cada objeto
var map01 = new Map();
map01.set(0, "zero");
map01.set(1, "um");
map01.set(2, "dois");
map01.set(3, "tres");
map01.set(4, "quatro");
for (var [key, value] of map01) {
    console.log(key + " = " + value);
}
//Criar um Set com 3 objetos e usar for...of para imprimir o valor de cada objeto
var set01 = new Set([1, 2, 3]);
for (let item of set01) console.log(item);
//Criar um objeto Set e converter para array
var set02 = new Set([4, 5, 6]);
var arr01 = Array.from(set02);
//Criar um array com 4 posições e converter para Set
var arr02 = ["pos01", "pos02", "pos03", "pos04"];
var set03 = new Set(arr02);
