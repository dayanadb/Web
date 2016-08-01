/*1) Declare uma função não-anonima que retorne 'bem-vindo'
2) Declare uma função anonima (armazenando o escopo dentro de uma variavel), sem retorno
3) DEclare uma função (anonima ou não-anonima) e dentro desta declare outro função 'interna'. Faça com que a função mais externa retorne a mais interna*/


function welcome(){
    return "bem-vindo";
}


function(){
    var scp=this;
}

function externa(){

    function interna(){
        return "Yo soy interna!"
    }

    return this.interna();
}
