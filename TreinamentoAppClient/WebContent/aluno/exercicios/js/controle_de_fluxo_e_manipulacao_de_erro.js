/**
 * 
 */
var a = 5;
try {
    if (a == 1) {
        a = a + 1;
        console.log("é um");
    }
    else if (a == 2) {
        console.log("é dois");
        throw "Não deveria ser dois";
    }
    else {
        console.log("não é nem um nem dois");
    }
    switch (a) {
    case 1:
        {
            console.log("switch é um");
        }
    case 2:
        {
            console.log("não é nem um");
        }
    default:
        {
            console.log("valor defalut");
            x.controle();
        }
    }
}
catch (error) {
    console.log("erro no default");
}
finally {
    console.log("finalmente");
}
