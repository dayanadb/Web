/**
 * 
 */

var a = 50;

if(a == 50)
{
    try{
        console.log("Estou aqui");
    }
    catch(erro){
        finally{
            console.log("Acabou");
        }
    }
}
else if(a == 12)
{
    console.log("Estou aqui")
}
else
{
    a = 5 + 5;
}

switch (a > 20)
        case 1: a = 4-8;
        break;

        case 2: try{
                a = 5+8;

        }
        catch(erro){
            console.log("Errou")
        }
default:    console.log("Estou aqui")
