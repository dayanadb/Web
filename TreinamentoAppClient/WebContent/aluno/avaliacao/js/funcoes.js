/*1) Declare uma função não-anonima que retorne 'bem-vindo'
2) Declare uma função anonima (armazenando o escopo dentro de uma variavel), sem retorno
3) DEclare uma função (anonima ou não-anonima) e dentro desta declare outro função 'interna'. Faça com que a função mais externa retorne a mais interna*/

function primeiro()
{
    console.log("Bem vindo");
}

//primeiro();

var fun = function()
{
    var x = 10;
}

function aninhada ()
{
    var x;
    function aninhada2()
    {
        x = 10;
        return x * 10;
    }
    console.log(aninhada2());
}


aninhada();
