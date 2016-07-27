/**
 * 
 */

function aritmeticos() {
    var a = 12 % 5; //2

    var b = ++a; //3

    var c = --a; //2

    var d = c - a; //0

    var e = d + a; //2

    console.log(a+' '+b+' '+c+' '+d+' '+e);
}
aritmeticos();

function atribuicao() {
    var a = 10;

    var b = 1;

    b+=a;

    b-=a;

    b%=a;

    b/=a;

    b*=a;

    console.log(b);

}
