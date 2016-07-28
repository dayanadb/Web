window.addEventListener('load', function(){

    var bt2 = document.getElementById('bt2');
    bt2.addEventListener('click', maior10);

})

function diaSemanaF(dia){ //função aninhada

    function x(){
        switch (dia) {
        case 0:
            dia = alert("Domingo");
            break;
        case 1:
            dia = alert("Segunda-feira");
            break;
        case 2:
            dia = alert("Terça-feira");
            break;
        case 3:
            dia = alert("Quarta-feira");
            break;
        case 4:
            dia = alert("Quinta-feira");
            break;
        case 5:
            dia = alert("Sexta-feira");
            break;
        case 6:
            dia = alert("Sábado");
            break;
        default:
            dia = alert("Erro");
        }

    }
    x(); //função do tipo closure

}

function literal(){ //retorna String literal
    return ("string literal");

}

function foo(){ //função não anônima sem retorno
    alert("Foo");
}


var foo = function() { // variável que armazena escopo da função
    alert("Foo");
}

function f(x) { //função com argumento padrão
    x = x || 10;
    return x;
}

function fun1(...theArgs) { //função que recebe parâmetro rest
  console.log(theArgs.length);
}


function sum(){ //função que utiliza o léxico this
  return this.a + this.b + this.c;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average(){
    return (this.a + this.b + this.c) / 3;
  }
};

console.log(o.average, o.sum);
