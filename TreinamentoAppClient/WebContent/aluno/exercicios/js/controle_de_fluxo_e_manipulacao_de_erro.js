function ola()
{
    var nome = "Anne";

    if (nome == "Anne")
    {
        alert("Olá Anne!");
    }
    else
    {
        alert("Olá");
    }
}


function diaSemana(dia){
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

function imprimirPares()
{
    var i=1;

    for (i=1; i<=20; i++)
    {
        if (i%2 == 0)
        {
            console.log(i);
        }
    }
}


function maior10()
{
    var x;
    do
    {
        x = prompt("Informe um numero: ");
        console.log(x);
    }
    while(x < 10)

    alert("Maior que 10");
}

/*
    throw

    try
    {
        codigo
    }
    catch(exception)
    {
        //captura de erros
    }
    finally
    {
        //liberar uma conexao com BD
        //fechar arquivo
    }
            */

