/**
 * 
 */
/* exemplo renato
var a= new map();
a.set("nome","renao"); // chave string + objeto...
a.set("x",[]);
var y = a.get("x");


// array permite valor com duplicidade, set não permite

var dd = new set(a); // pra remover elementos duplicados...

var xx = new set();
xx.add(10);

var yy = xx.has(10); // verifica se tem o 10 no array...


*/

for of para Map
for  (var [key, value]  of sayings) {
    console.log (key + " " + value);

}

// crie um objeto map contendo cinco objetos e utilize for... of para imprimir o valor de cada objeto.

var a= new map();
a.set("nome","xxxx","idade",10,"sexo","M","peso",70,"altura",1.8);
for  (var [key, value]  of sayings) {
    console.log (key + " " + value);

}

// crie um set contendo 3 objetos quaisquer e utiize for...of para imprimi o valor de cada elemento

// crie um objeto set e converta-o para array

// crie um array contendo 4 posições e converta-o para set

