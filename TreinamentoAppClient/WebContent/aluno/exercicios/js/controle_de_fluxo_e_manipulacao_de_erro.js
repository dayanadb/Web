/**
 * 
 */
var b = 10;
var a = 1;
var x;
x = a + b;
if (x > 12) {
    alert(x);
}
else {
    alert("Resultado 1");
    alert("Resultado 2");
}

switch (x) {
case (1):
    console.log("CASE 1");
    break;
case (12):
    console.log("Case 2");
    break;
default:
    console.log("Nenhuma das anteriores")
}

/* CONSIDERAÇÕES:
    Os parenteses dentro das clausulas 'case', são opcionais - poderia por exemplo escrever case 1, case 12
    Percebi que não criou os exercícios de try...catch e throw. Caso tenha dúvidas sobre, me procure que podemos fazer um reforço individual!
    No mais, excelente!
 */
