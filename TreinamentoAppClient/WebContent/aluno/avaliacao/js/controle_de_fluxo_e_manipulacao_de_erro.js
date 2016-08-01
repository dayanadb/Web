/*1) declare um bloco try...catch...finally e force um lancamento de exceção dentro da declaração try
2) Declare um bloco if...else if...else*/



try {
    var a = 2;

    if (a == 1) {
        a = a + 1;
        console.log("excessao " + a);
    }
    else if (a == 2) {
        console.log("valor 2");
        throw "Não deveria ser dois";
    }
    else {
        console.log("não é nem um nem dois");
    }
}
catch (error) {
    console.log("erro no default");
}
finally {
    console.log("finalmente");
}
