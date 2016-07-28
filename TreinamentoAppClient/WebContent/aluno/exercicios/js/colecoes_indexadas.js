//Criar um array atravez de construtor com 3 elementos
var arr01 = ["Zero",1,"dois"];
arr01.constructor;

//Criar array literal com 3 elementos e imprimir no console o lenght
var arr02 = ["Zero",1,"dois"];
console.log(arr02.length);

//Criar um array vazio e popular com um elemento
var arr03 = [];
arr03.push("Elemento01");

//Criar array com 3 elementos e imprimir usando for each
var arr04 = ["Elemento01",2,"Elemento03"];

arr04.forEach(function (item, index, array) {
  console.log(item, index);
});

//Criar um array multidimensional
var arr05 = [][];
