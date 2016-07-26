/**
 * 
 */

function validateLogin() {
    var usuario = document.getElementById('usuario');

    if (usuario === null) {
        throw new Error("Campo usuario não definido na tela");
    }

    try {
        usuario.value = 'teste';
    }
    catch(err) {
        conso.log(err.message);
    }
}




/* CONSIDERAÇÕES:

OK, utilizou corretamente o if e o try...catch. Como sugestões, amplie o exercício utilizando mais else if e o finnaly
*/
