/**
 * 
 */
var i;
console.log("i:");
for (i = 0; i < 10; i++) {
    console.log(i);
}
var a = 0;
console.log("a:")
do {
    console.log(a);
    a++;
} while (a < 5);
var c = 0;
console.log("c:")
while (c < 5) {
    console.log(c);
    c++;
}
var d;
console.log("d:");
for (d = 0; d < 10; d++) {
    console.log(d);
    if (d >= 5) {
        console.log("Pula");
        d++;
        continue;
    }
}
var e;
console.log("e:");
for (e = 0; e < 10; e++) {
    console.log(e);
    if (e == 5) {
        console.log("break em 5");
        break;
    }
}
var person = {
    nome: "Marco "
    , sobrename: "Scheid "
    , idade: 25
};
var text = "";
var x;
for (x in person) {
    text += person[x];
    console.log(text);
}
var arr = ["fred", "tom", "bob"];
for (let g of arr) {
    console.log(g);
}
