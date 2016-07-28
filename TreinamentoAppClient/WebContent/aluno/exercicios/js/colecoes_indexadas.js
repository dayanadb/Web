/**
Array é um agregador de elementos.
var a = new Array[10, "oi", {}] ou var b = Array(); ou var c = [][];
var a.slice(posição,nr. elementos) - ex.: a.slice(1,2)// a partir da posição 1, retire 2 elementos.
var a.splice(posição, nr. elentos, elemento a ser "inserido")- ex.:  var a.splice(1,2,5,"oi")
var x=["a","d","z","c"], x.reverse("c","z","d","a")
var x=["a","d","z","c"], x.sort("a","c","d","z")
 */

//array através de construtor
var a = new Array[1,2,3];

//array literal com 3 elementos imprimindo o length
var a = [1,2,3]
console.log(a.length); // 3

//array literal vazio e popular.
var a = Array();

a[0] = 1;
a[1] = "e aí?";
a[2] = "";

//array c/ 3 elementos e imprimindo com forEach
var a = [1,2,3]

forEach(function(a))
{
	console.log(a);	
}

//array multidimensional
var a = [][];

a[0][0] = 1;
a[0][1] = 2;
a[1][0] = 3;
a[1][1] = 4;


