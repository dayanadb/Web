/**
 * 
 */
for ( x = 1; x < 10; x++) {
    console.log("for loop x = " + x);
}

var a = 1;
do {
    console.log("do/while loop a = " + a);
    a++;
} while (a < 10);

a = 0;
while (a < 10); {
    console.log("while loop a = " + a);
    a++;
}

a = 0;
while (a < 10) {
    console.log("while break loop a = " + a);

    if (a >= 4) {
        break;
    }
    a++;
}

console.log("while break loop b final = " + a);

var b = 0;
while (b < 10) {
    consoale.log("while continue loop b = " + b);
    b++;
    if (b  >= 4) {
        continue;
    }
}

console.log("while continue loop b final = " + b);

/* falta for in
    e
    for of
*/

/* CONSIDERAÇÕES:
    Muito bom, entretando senti a falta dos exercícios de for...in e for...of. Teve alguma dificuldade para fazer esses? Caso sim, poderíamos fazer um reforço individual, só me procurar
 */



