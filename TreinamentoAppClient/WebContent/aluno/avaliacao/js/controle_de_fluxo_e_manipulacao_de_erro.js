/*1) declare um bloco try...catch...finally e force um lancamento de exceção dentro da declaração try
2) Declare um bloco if...else if...else*/
function bloco01() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
        if (x == "") throw "Empty";
    }
    catch (err) {
        message.innerHTML = "Error: " + err + ".";
    }
    finally {
        document.getElementById("demo").value = "";
    }
}

function bloco02() {
    var time = 12;
    var cumprimento;
    if (time < 12) {
        cumprimento = "Bom Dia";
    }
    else if (time < 18) {
        cumprimento = "Boa Tarde";
    }
    else {
        cumprimento = "Boa Noite";
    }
}
