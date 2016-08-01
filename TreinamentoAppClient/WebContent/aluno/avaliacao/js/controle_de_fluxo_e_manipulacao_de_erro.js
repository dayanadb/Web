/*1) declare um bloco try...catch...finally e force um lancamento de exceção dentro da declaração try
2) Declare um bloco if...else if...else*/


//TRY CATCH FINALLY --------------------------------------------
var x = null;
try {
    x.error;
}
catch (e) {
    x = 30;
    console.log("Oi, sou x, meu valor é = ", x);
}
finally {
    console.log("That's all folks");
}
//--------------------------------------------------------------

//IF ELSE-------------------------------------------------------
var y = 3;
if (y == 1) {
    console.log("Y é 1");
    } else
        if (y == 2) {
        console.log("Y é 2");
    } else console.log("Y n é p* nenhuma");
//--------------------------------------------------------------
