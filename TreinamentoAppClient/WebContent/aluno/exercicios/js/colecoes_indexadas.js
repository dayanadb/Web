/**
 * 
 */

var a = new Array(10,true,{nome:"x"});
var b = Array();
var c = [10, true,{nome:"x"}];
console.log("Valor de a: " + a.length);
var x = c[0];
console.log("Valor X " + x);
console.log("Tamanho vetor c: " + c.length);
for (var d of c){
   console.log("for of: " + d) ;
}

//adiciona um elemento na proxima posição livre do array
c.push("Day");
b.push("a");
b.push("b");

b.forEach(function(e){
    console.log("Valor vetor B: " + e);
})

//for each da Api
c.forEach(function (e){
    console.log("For Each: " + e);
});

//remove posições do array , posição inicial que vai ser removido e quantas posições ele vai excluir
c.splice(2,2);

c.forEach(function(f){
    console.log("vetor depois da remocao: " + f);
});

//reverse
var d = new Array('a','c','d', 'z');

d.reverse(); // inverte a ordem dos elementos
console.log("Valor do reverse: " + d);

//sort - metodo para ordenar
var e = new Array('z','c','a', 'd');
e.sort();  //ordena
console.log("Valor Sort: " + e);


var multi = new Array([1,2,3]['a',7]);

