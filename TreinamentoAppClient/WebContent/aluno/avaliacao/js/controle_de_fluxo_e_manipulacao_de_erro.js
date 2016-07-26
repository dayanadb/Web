/**
 * 
 */
var a = false
    , b = 10
    , c = "Joao"
    , obj;

function criaIfElse() {
    if (a == true) {
        console.log("ta tranquilo, ta favorável");
    }
    else throw Error();
}

function criaSwitch(i) {
    switch (i) {
    case 0:
        a = i;
    case 1:
        a = i;
    case 2:
        a = i;
    case 3:
        a = i;
    case 4:
        a = i;
    case 5:
        a = i;
    case 6:
        a = i;
    case 7:
        a = i;
    case 8:
        a = i;
    case 9:
        a = i;
    }
    console.log(a);
}

function criaObjeto() {
    obj = {
        nome: "A"
        , idade: 18
        , sexo: "F"
    }
}
try {
    criaIfElse();
}
catch (Error) {
    console.log(Error);
    for (var i = 0; i < 10; i++) {
        criaSwitch(i);
    }
}

criaObjeto();
for (var o in obj){
    console.log(obj[o]);
}
