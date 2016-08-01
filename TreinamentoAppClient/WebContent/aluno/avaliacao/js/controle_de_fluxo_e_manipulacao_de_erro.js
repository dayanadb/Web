/*1) declare um bloco try...catch...finally e force um lancamento de exceção dentro da declaração try
2) Declare um bloco if...else if...else*/
/*1*/
function tryCatch() {
    var w = true;
    try {
        if (w) {
            throw "Lancei.";
        }
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log("Esse é o finally.");
    }
}
tryCatch();
/*2*/
var teste = 5;
if (teste < 5) {
    console.log("É menor que 5.");
}
else {
    if (teste >= 5 && teste < 10) {
        console.log("Está entre 5 e 10.");
    }
    else {
        console.log("É maior que 10.");
    }
}
