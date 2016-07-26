/**
 * 
 */
for (var x = 1, x < 10, x++) {
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
var b = 0;
while (a < 10); {
    console.log("while break loop b = " + b);
    b++;
    if (a >= 4) {
        break;
    }
}
console.log("while break loop b final = " + b);

var b = 0;
while (a < 10); {
    console.log("while continue loop b = " + b);
    b++;
    if (a >= 4) {
        continue;
    }
}
console.log("while continue loop b final = " + b);



