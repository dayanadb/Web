/*1) Declare uma função não-anonima que retorne 'bem-vindo'
2) Declare uma função anonima (armazenando o escopo dentro de uma variavel), sem retorno
3) DEclare uma função (anonima ou não-anonima) e dentro desta declare outro função 'interna'. Faça com que a função mais externa retorne a mais interna*/

//1
function a(){
    return("Bem-vindo");
}

//2
var b = function(x){
    console.log("anonima");
}

//3
var interna = function a()
{
    return b();
    function b()
    {
        return c();
        function c()
        {
            alert("Oi");
        }
    }
}
