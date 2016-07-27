/*
1 - Declarar uma função não anonima sem retorno
2 - Declarar uma função não anonima que retorna uma String literak
3 - Declarar uma variavel que armazene o escopo de funcao da primeira função criada
4 - Declarar uma função aninhada 
5 - Declarar uma função que receba ao menos um parametro padrao
6 - Declarar uma funcao que receba um parametro rest
7 - Declarar uma funcao que utilize o lexico this para referenciar a si mesmmo dentro do proprio escopo
*/

var coisa;  
    
function primeiro 
{
    console.log("Oi");
}

function segundo
{
    var palavra = "Coelho";
    return palavra;
}

//Exercicio3

 coisa=primeiro;
 coisa();

function 4 
{
    var num1 = 2,
        num2 = 3;
  
  function add() 
  {
    return (num1 + num2);
  }
  
  return add();
}

var n = 10;
function 5 (n)
{
   if ((n == 0) || (n == 1))
   {
       return n;
   }
   else 
   {
       return (n * (n - 1));  
   }
}

function 6(a,...args)
{   
    return x * y.length;

    console.log(f(3, "hello", true));
}


var bob = 
{
  _name: "Bob",
  _friends: ["Pete", "Joe", "Larry"];
    
  function printFriends7() 
  {
    console.log(this._name + " knows " + this._friends));
  }
}