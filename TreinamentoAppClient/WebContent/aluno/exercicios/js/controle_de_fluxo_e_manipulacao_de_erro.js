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
    switch (new Date().getDay())
    {
        case 6:
            console.log = ("Today is Saturday");
        break;
            case 0:
        console.log = ("Today is Sunday");
        break;
        default:
        console.log = ("Looking forward to the Weekend");
    }
}

console.log(testaIf());
console.log(caso());
