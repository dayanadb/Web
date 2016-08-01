/*1) declare um bloco try...catch...finally e force um lancamento de exceção dentro da declaração try
2) Declare um bloco if...else if...else*/

//1
var a = 10;
var b = 50;

if(a < b){
    try{
        var c = a + b;
    }
    catch(erro){
        console.log("Erro");
        }
    finally{
        console.log("Saindo..")
    }
}

//2
if(a > 50){
    var d = 50 + a;
}
else if(a <= 10){
    console.log("a é igual a 10");
}
else{
    console.log("Foo")
}
