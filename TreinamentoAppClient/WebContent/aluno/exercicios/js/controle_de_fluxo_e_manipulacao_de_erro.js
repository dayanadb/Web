/*
 1) criar um if else
 2) criar uma declaração de bloco switch, com pelo menos a clausula default
 3) de dentro do primeiro bloco if criado, lance uma exceção com throw Error
 4) crie uma declaração de bloco try...catch...finally
 */

function main() {
    var nome ;//= "Danilo";
    var profissao = "Analista";

    try {
        if (nome !== undefined && nome !== null && nome !== "") {
            console.log("Olá " + nome + "!");
        } else {
            throw new Error();
        }
    } catch (err) {
        nome = "Visitante";
        console.log("Olá " + nome + "!");
        console.log("Nome não informado...");
    }finally {

    }

    switch(profissao) {
        case "Analista":
            console.log("Você é analista.");
            break;
        case "Programador":
            console.log("Você é programador.");
            break;
        default:
            console.log("Você não informou a profissão.");
    }

}

main();
