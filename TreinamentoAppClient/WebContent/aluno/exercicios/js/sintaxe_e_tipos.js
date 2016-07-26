/**
 Aula do dia 26/07
 */
//Por Rafael Batista da Silva
var g;
window.addEventListener('load', function () {
    var dialog = document.getElementById('referencias');
    document.getElementById('showDialog').onclick = function () {
        dialog.show();
    };
    document.getElementById('exit').onclick = function () {
        dialog.close();
    };
})


var l;
g = 10;
l = g;
if (l === g) {
    const constante = 1;
    let block = 2;
    console.log(constante);
    console.log(block);
}
