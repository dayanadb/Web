/**
 *  For
    do...while
    while
    for in
    for of
 */

for(var i=0; i<=10; i++){
    var valor = 0;
    valor += i;
    console.log("FOR: " + valor);
}

var i = 0;
do{
   var nome = "Dayana"  + i;
   console.log("DO: " + nome);
   i++;
}while(i<=5)

var i = 0;
while(i<=5){
   var nome = "Dayana"  + i;
   console.log("While: " + nome);
   i++;
}

var experiencia = { linguagem : "Java", tempo : 5 };

for (var a in experiencia){
    console.log(a);
}


