/**
 * 
 */
var a;
if (a === 1) {}
else {
    throw err;
    a = 1;
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
