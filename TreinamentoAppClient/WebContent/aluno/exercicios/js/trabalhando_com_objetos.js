/**
 * Trablahndo com objetos
 */

var obj = { nome:"Nome",tag:"tag",func: function(){}};

console.log(obj);

function Pessoa(nome,idade){
    this.nome = nome;
    this.idade = idade;
}

var pessoa = new Pessoa("Lucas",23);

console.log(pessoa);

