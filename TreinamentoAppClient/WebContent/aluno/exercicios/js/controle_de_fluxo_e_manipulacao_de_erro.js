/**
 * 
 */
var a;
if (a === 1) {}
else {
    a = 1;
    throw err;
}

switch (a) {
case 1:
    console.log("case01");
    break;
case 2:
    console.log("case02");
    break;
default:
    console.log("caseDefault");
}

try {
    console.log(a);
}
catch (err) {
    document.getElementById("demo").innerHTML = err.message;
}
finally {
    a = 2;
}

/* CONSIDERAÇÕES:
   Na 'else' da linha 6, voce está atribuindo um valor para 'a' após um throw. O throw ele retornará um erro ao metodo chamador, portanto a linha 8 não será alcançada!
   No mais, excelente!
*/

