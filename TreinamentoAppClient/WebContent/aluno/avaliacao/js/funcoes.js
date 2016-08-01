/*1) Declare uma função não-anonima que retorne 'bem-vindo'
2) Declare uma função anonima (armazenando o escopo dentro de uma variavel), sem retorno
3) DEclare uma função (anonima ou não-anonima) e dentro desta declare outro função 'interna'. Faça com que a função mais externa retorne a mais interna*/


var comer = function()
{
    return("bem-vindo")
};


var comer = function()
{

};



var calculo = function()
{
  var num = 10;
    function()
    {
        num += num;
        return(num);
    }
};






