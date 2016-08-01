/*1) declare um bloco try...catch...finally e force um lancamento de exceção dentro da declaração try
2) Declare um bloco if...else if...else*/

function primeiro()
{
    try
    {
        throw new Error("Explodiu");
    }
    catch(err)
    {
        console.log("O que aconteceu? " + err.message )
    }
    finally
    {
        console.log(" Segurança talvez? ")
    }
}

primeiro();

function segundo()
{
    var x = "Azul"

    if( x == "Vermelho")
    {
        console.log("A cor é Vermelha")
    }
    else if(x == "Rosa")
    {
        console.log("A cor é Rosa")
    }
    else
    {
        console.log("A cor é " + x)
    }
}

segundo();
