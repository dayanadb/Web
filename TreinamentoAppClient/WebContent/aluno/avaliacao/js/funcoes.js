/*1) Declare uma função não-anonima que retorne 'bem-vindo'
2) Declare uma função anonima (armazenando o escopo dentro de uma variavel), sem retorno
3) DEclare uma função (anonima ou não-anonima) e dentro desta declare outro função 'interna'. Faça com que a função mais externa retorne a mais interna*/


function retornaTexto(){

    return 'ben-vindo';

}
//---------------------------------------
var funcao = function(){

}

//----------------------------------
var nome = retornaNome();
console.log(nome);

function retornaNome(){
    var nome1 = 'Dayana'
    function retornaNomeCompleto(){
        return nome1 + ' Hoffmann';
    }

    return retornaNomeCompleto();


}
