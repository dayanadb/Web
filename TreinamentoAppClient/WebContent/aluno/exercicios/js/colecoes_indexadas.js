/**
 * 
 */
/* exemplos do professor
var a = new array();
var b = array();
var c = [10, rue, {
    nome: "x"
}];
var d = [][];
a[0] = "x";
d[0][0] = "teste";
for (var a of b) {};
b.foreach(function (x)) {
          x...
          };

c.push(10); // cria a próixima posição a partir do último..
a = a.concat(1,false,{});

a.spice(1,2,5,"a");
a.reverse();
a.sort();


Herança dinamica
Pessoa.prototype = new Animal = está extendendo o tipo animal.....
Pessoa.prototype.idade=10 // altera todas as instancias que forem criadas apos esse comando.
*/
// exercícios
var x = Array(1, 2, 3 );

var a = new Array("a", "b", "c");
console.log("tamanho do array= " + a.length);


var b = [];
b[0] = "teste 1";

var c = [];
c[0] = "teste 1";
c[1] = "teste 2";
c[2] = "teste 3";
c.forEach(function (x,y) {
          console.log ("posicao= " + x + " valor= " +y);
});


var d = new Array(
["teste ",0],
["teste ",01],
["teste ",10],
["teste ",11]
);


for (x=0;x<2;x++) {
    for (y=0;y<2;y++) {
        console.log("matriz = " + d[x][y]);
    }
}





