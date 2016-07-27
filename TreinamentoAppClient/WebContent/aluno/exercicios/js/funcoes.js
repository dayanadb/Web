/**
 * 
 */
/**
 * 
 */

var resultado = Soma();

console.log("Resultado funcao: " + resultado);

var funcaoSoma = Soma;

console.log("Funcao: " + funcaoSoma);

Calculo();

var dados = new Object();
dados = { nome : "Dayana", valor : 5 };

var dadosUsuario = RetornaDados(dados);
console.log(dadosUsuario.nome);
console.log(dadosUsuario.valor);

var data = RetornaData(); 
console.log(" Retorno de uma funcao aninhada: " + data  );

function Soma(){
    var valor = 10;    
    return valor + 10;       
}

function Calculo(){
    var valor = 10;
    var valor1 = 2;
    var resultado = valor + valor1;
    console.log("Resultado funcao Calculo: " + resultado);
}

function RetornaDados(dados){    
    dados.valor = 2;
    dados.nome= "Maria";    
    return dados;   
}

function RetornaData(){    
    var dataCompleta;
    
    function Today(){
        var currentDate = new Date()
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        var year = currentDate.getFullYear()
         dataCompleta =  day + "/" + month + "/" + year; 
        return   dataCompleta;    
    }
    
    return Today();    
}




