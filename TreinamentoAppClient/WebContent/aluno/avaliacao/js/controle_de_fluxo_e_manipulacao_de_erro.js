/*1) declare um bloco try...catch...finally e force um lancamento de exceção dentro da declaração try
2) Declare um bloco if...else if...else*/
var obj;
try {
    if (obj == undefined) {
        throw "forçando...";
    }
}
catch (err) {
    console.log(err.message);
}
finally {
    obj = {
        nome: "Lucas"
    };
}
var a = 5
if (a < 5) {
    console.log("menor que 5");
}
else if (a == 5) {
    console.log("igual a 5");
}
else {
    console.log("maior que 5");
}
