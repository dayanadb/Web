/*
 Teste de realização de comentário de bloco
 */
// declaração de variáveis
var $a = 10;
var $b = "teste";
var $c = [10, "teste", false];
var car = {type:"Fiat", model:"500", color:"white"};
teste();
console.log("var $a= " + $a);
console.log("var $b= " + $b);
console.log("var $c= " + $c);
console.log("var car= " + car);

function teste() {
    var _x = "testes";
    let _y = "var de bloco";
    let _z = true;
    let _w = 10.10;
    console.log("var x= " + _x);
    console.log("var y= " + _y);
    console.log("var z= " + _z);
    console.log("var w= " + _w);
}
