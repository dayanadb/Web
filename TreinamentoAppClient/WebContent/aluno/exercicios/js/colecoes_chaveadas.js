/**
 * 
 */


//MAp

var a = new Map();
a.set("nome", "Dayana");
a.set("idade", 30);
var b = a.get("nome");
console.log("Posicao nome do map: " + b);
//a.delete("nome");

for (var c of a) {
    console.log("for of: " + c);
    
}

for (var[key,value] of a){
    console.log(" map chave, valor: " + key + " " + value);
}

//SET - não permite elementos duplicados
var c = new Set();
var d= [1,2,2]; //array

var e= new Set(d); // criar um set a partir de um array

for (var x of e){
    console.log("SET que veio de um Array: " + x);
}

var f = Array.from(e); //criar um array a partir de um SET

for (var x of f){
    console.log("Array que veio do SET: " + x);
}

e.add(10);
e.add(true);

console.log("Verifica se tem o valor 10 dentro do SET: " + e.has(10));

for (var x of e){
    console.log("Valores SET: " + x);
}

