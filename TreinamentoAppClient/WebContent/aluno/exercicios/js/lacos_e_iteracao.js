/*
1) criar um laço for
2) criar um laço do...while
3) criar um laço while
4) usar o break em um laço
5) usar o continue em um laço
6) criar um laço for...in
7) criar um laço for...of
 */

function main(){
    console.log("For");
    for(var i=0; i <= 3;i++){
        console.log("i = " + i);
    }

    console.log("do...while");
    var j = true;
    do{
        console.log("J = " + j);
        j = false;
    }while(j);

    console.log("while");
    var k = true;
    while(k){

        console.log("K = " + k);
        k = false;
    }

    console.log("do...while com break");
    var bre = 1;
    do{
        console.log("bre = " + bre);
        if(bre<2){
            console.log("break");
            break;
        }else{
            bre = 11;
        }
    }while(bre<10);

    console.log("do...while com continue");
    var cont = 1;
    do{
        console.log("cont = " + cont);
        if(cont<2){
            console.log("continue");
            cont++;
            continue;
        }else{
            cont = 11;
            console.log("cont = " + cont);
        }
    }while(cont<10);

    var obj = {name:"Danilo",idade:30}

    for(var anObj in obj){
        console.log(anObj);
    }

    var obj2 = [11,"Danilo"];

    for(var val of obj2){
        console.log(val);
    }

}

main();
