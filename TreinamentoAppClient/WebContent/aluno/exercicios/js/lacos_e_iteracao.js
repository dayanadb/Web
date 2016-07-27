/**
 * 
 */
//Exemplo de For
text += exemplo[0] + "<br>";
text += exemplo[1] + "<br>";
text += exemplo[2] + "<br>";
text += exemplo[3] + "<br>";
text += exemplo[4] + "<br>";
text += exemplo[5] + "<br>";
for (i = 0; i < exemplo.length; i++) {
    text += exemplo[i] + "<br>";
}

//Exemplo de while
while (i < 10) {
    text += "O numero é: " + i;
    i++;
}

//Exemplo de Do while
do {
    text += "O numero é: " + i;
    i++;
}
while (i < 10);

//Exemplo de break e Continue
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "O numero é: " + i + "<br>";
}

for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "O numero é: " + i + "<br>";
}

//Exemplo de For in e For of
var pessoa = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in pessoa) {
    text += pessoa[x];
}
for (x of pessoa) {
    text += pessoa[x];
}
for (x of pessoa) {
    text += pessoa[x];
}
