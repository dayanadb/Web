window.addEventListener('load', function(){

    var bt2 = document.getElementById('bt2');
    bt2.addEventListener('click', maior10);

})

function diaSemanaF(dia){

    function x(){
        switch (dia) {
        case 0:
            dia = alert("Domingo");
            break;
        case 1:
            dia = alert("Segunda-feira");
            break;
        case 2:
            dia = alert("Terça-feira");
            break;
        case 3:
            dia = alert("Quarta-feira");
            break;
        case 4:
            dia = alert("Quinta-feira");
            break;
        case 5:
            dia = alert("Sexta-feira");
            break;
        case 6:
            dia = alert("Sábado");
            break;
        default:
            dia = alert("Erro");
        }

    }
    x(); //função do tipo closure

}

/*
 CONSIDERAÇÕES:
    Excelente!
 */
