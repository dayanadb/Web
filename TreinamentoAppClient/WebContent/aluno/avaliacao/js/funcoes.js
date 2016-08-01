/* 1) Declare uma função não-anonima que retorne 'bem-vindo' */

function bemvindo() {
    return "Bem-Vindo";
}

/* 2) Declare uma função anonima (armazenando o escopo dentro de uma variavel), sem retorno */

var a = function() {
    var b = 1;
};

/* 3) Declare uma função (anonima ou não-anonima) e dentro desta declare outro função 'interna'. Faça com que a função  mais externa retorne a mais interna */

var a = function () {
    function b () {
        var c = "interna";
        return c;
    }
    return b();
};
