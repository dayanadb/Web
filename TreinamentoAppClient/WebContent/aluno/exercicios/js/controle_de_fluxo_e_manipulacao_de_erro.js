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
<<<<<<< HEAD
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
=======

    switch (a)
case 1:
    {
        console.log("switch é um");
>>>>>>> origin/robertoleonardo
    }
}
catch (error) {
    console.log("erro no default");
}
finally {
    console.log("finalmente");
}

/* CONSIDERAÇÕES:
    Na linha 10, else if deve ser separado ( colocou elseif, tudo junto)
    No throw da linha 12, não seria obrigatorio declara um escopo de bloco para lançar o erro. Por exemplo, poderia fazer throw "Não deveria ser dois"
    Nos cases das linhas 21 e 25 não declarou break no final dos cases  - o que acarretaria que cases seguintes também seriam executados. Caso tivesse sido essa a sua intenção ok! Apenas esteja atento!
    No mais, muito bom!
 */
