function testaIf()
{
    var c = 10*10;

    if(c == 20)
    {
        console.log("Resposta Certa")
    }
    else
    (
        console.log("Não deu")
    )
}

function caso()
{
   var day;
    switch (new Date().getDay())
    {
        case 0:
            day = "Sunday";
        break;
        case 1:
            day = "Monday";
        break;
        case 2:
            day = "Tuesday";
        break;
        case 3:
            day = "Wednesday";
        break;
        case 4:
            day = "Thursday";
        break;
        case 5:
            day = "Friday";
        break;
        case  6:
            day = "Saturday";
    }
    console.log(day);
}

console.log(testaIf());
console.log(caso());

/* CONSIDERAÇÕES:
    Na linha 3, esta multiplicando 10 por 10, logo daria 100 ao inves de 20 (* multiplica, enquanto + soma)
    No mais, excelente!
 */
