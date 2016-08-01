/*1) declare um bloco try...catch...finally e force um lancamento de exceção dentro da declaração try
2) Declare um bloco if...else if...else*/


function numeroPositivo()
{
	var num = 10;
	var divisao = "100";
	var resto = 0;

		try
		{
            if( (num/divisao) > 0)
            {
                resto = num;
                console.log("numero positivo" + resto)
            }
		catch
		{

            console.error("Erro de divisão!");
		}
	}
};


Function testandoIf()
{
    var maior = 100/
    var menor = 10;

    if(maior < menor)
    {
            console.log("Maior é = a" + maior);
    }
    else
    {
       if( maior = menor)
        {
           console.log("Os dois são iguais " + " maior é " + maior +"menor é " + menor)
        }
        else
        {
          console.log("menor é maior que " + "maior " + menor) ;
        }
    }
}
