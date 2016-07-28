/**
 * 
 */

//Array criado através de construtor//
var a = ["a","b","c"];
a.constructor;

//Array literal com 3 elemento//
var b = ["a", "b", "c"];
console.log(b.length);

//Array(literal ou construtor) vazio e populado com 1 elemento//
var c = new Array[];
c[0]=1;
console.log(c[0]);

//Array utilizando forEach//
var d = [1,2,3];

d.forEach(function(currentValue, index) {
          console.log("index ["+index+"]= "+currentValue);
          });

//Array utilizando for of//
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
  console.log(entry);
}

//Array multidimensional//
var e = [][];
