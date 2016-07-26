/**
 * Try, cacth, finally
 */
var idade = 20;

try{
    var novaIdade = calculo(idade);
    console.log(novaIdade);
}catch (Error){
    console.log("Por favor, preencher sua idade");
 }



switch(idade){
    case 10: idade = idade +1; break;

    default: idade; console.log(idade);
}

function calculo(idade){
    if(idade != null ){
       return idade = idade + 1;
    }else {
        throw Error;
    }

}

