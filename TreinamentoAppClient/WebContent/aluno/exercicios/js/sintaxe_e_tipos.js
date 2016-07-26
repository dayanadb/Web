/* Treinamento Java Script
26/07/2016*/
// Aula de tipos - var, let, const

{ //identifica um bloco
    var nome;
    var linguagem = "Java Script";
    var isEstudante = false;
    var idade = 30;
    var experiencia = new Object();
        //experiencia.linguagem = "Java";
        //experiencia.tempo = 5;

    experiencia = { linguagem : "Java", tempo : 5 };
    console.log(experiencia.linguagem);

    //var novaExp = new experiencia();

    console.log(idade);
}

inicio();

function inicio() {

    if (idade > 20) {
        let valor = 10;
        experiencia.nome = "C++";
        console.log(experiencia.nome);
        console.log (valor);

    }
}



