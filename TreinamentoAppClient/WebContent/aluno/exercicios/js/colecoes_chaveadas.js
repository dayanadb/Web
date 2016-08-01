/**
 * 
 */

var a = new Map();
a.set(1, "nome");
a.set(2, "idade");
a.set(3, "sexo");

for(var i of a){
    console.log(key+" "+value);
}

//
var b = new Set();
b.add(10);
b.add("fo");
b.add("oi");

for(var i of b){
    console.log(i);
}

//
