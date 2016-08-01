/*
OK - 1) Crie um laço que teste uma condição antes de entrar no loop
OK - 2) Dado o objeto {nome: "seu_nome", treinamento: "AWC"}, utilize a estrutura de repetição apropriada para imprimir no console os nomes dos atributos do objeto acima
OK - 3) Crie um laço 'for' que itere nos valores entre 5 e 20, imprimindo no console o valor corrente da iteração
*/

function SerHumano(){
    nome = "";
    treinamento = "";
}

function iteracoes(){
    var flag = true;

    var pessoa = new SerHumano();
    pessoa.nome = "Wesley";
    pessoa.treinamento = "AWC";

    // 1)
    while(flag){
        // 2)
        for(let eu in pessoa){
            console.log(eu);
            flag = false;
        }
    }

    // 3)
    for(let i = 5; i <= 20; i++){
        console.log(i);
    }
}
