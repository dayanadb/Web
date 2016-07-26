/**
 * Controladores de fluxo e manipulação de erros
 */

var a;
if (a == "lucas") {
    alert("moço");
}
else if (a == "ricardo") {
    alert("mano");
}
else {
    alert("você");
}

let tipo;
switch (tipo) {
case "Homem":
    document.getElementById("tipo").innerHTML = "É homem!";
    break;
case "Mulher":
    document.getElementById("tipo").innerHTML = "É mulher!";
    break;
default:
    document.getElementById("tipo").innerHTML = "É indefinido!";
}

/* CONSIDERAÇÕES:
   Variáveis declaradas com 'let' devem ser declaradas dentro de escopo de bloco ({}). Por exemplo: {let x = 10;}
   No seu if...else da linha 6-14, a está undefinied, seia uma boa pratica verificar se  tipo é String usando o operador ===
   No mais, excelente!
 */
