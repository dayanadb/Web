console.log("LAÇO FOR")
for (var a = 0; a < 10; a++) {
    console.log('a = ' + a);
}

console.log("LAÇO DO")
var a_do = 10;
do {
    console.log('a = ' + a_do);
    a_do++;
} while (a_do < 10);

console.log("LAÇO WHILE")
var a_while = 0;
while (a_while < 10) {
    console.log('a = ' + a_while);
    a_while++;
}

console.log("BREAK AND CONTINUE")
for (var a = 0; a < 10; a++) {
    if (a < 5) {
        console.log('a < 5 --> continue');
        continue;
    }
    console.log('a >= 5 --> break');
    break;
}

/* CONSIDERAÇÕES:
    Perfeito! Apenas faltou praticar o for...in e o for...of
*/
