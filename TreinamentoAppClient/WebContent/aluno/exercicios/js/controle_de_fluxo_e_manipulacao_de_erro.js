/**
 * 
 */
var a = 50;
<<<<<<< HEAD

if(a == 50)
{
    try{
        if()
=======
if (a == 50) {
    try {
>>>>>>> origin/ivanmoleta
        console.log("Estou aqui");
    }
    catch (erro) {
        finally {
            console.log("Acabou");
        }
    }
}
else if (a == 12) {
    console.log("Estou aqui")
}
else {
    a = 5 + 5;
}
<<<<<<< HEAD

switch (a > 20){
        +case 1:
     a = 4 - 8;
     break;
 case 2:
     try {
         a = 5 + 8;
     }
     catch (erro) {
         console.log("Errou")
     }
 default:
     console.log("Estou aqui")

}
=======
switch (a > 20)
case 1:
    a = 4 - 8;
    break;
case 2:
    try {
        a = 5 + 8;
    }
    catch (erro) {
        console.log("Errou")
    }
default:
    console.log("Estou aqui")

/**
 * CONSIDERAÇÕES:
    A instrução switch deve ser encapsulada com {}. Exemplo: switch (a){} (todos os cases devem estar dentro das chaves). O switch testará o valor dentro das clausulas case, desta forma, não testamos booleanos dentro do ().

    No mais, está muito bom!
  */
>>>>>>> origin/ivanmoleta
