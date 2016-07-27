/* Função não anônima sem retorno */

function bemVindo(){
    alert("Bem vindo(a) as Olimpiadas 2016!");
}

/* Função não anônima com retorno String */

function localizacaoOlimpiadas(){
    var pais = "Brasil";
    var estado = "RJ";
    var cidade = "Rio de Janeiro";

    return pais + ", " + estado + " - " + cidade;
}

/* Variável com armazenamento da definição da função */
function favorito(){
    var favoritoFutebol = favoritoFutebol();

    function favoritoFutebol(pais){
        var paisFavorito = "";
        switch (pais) {
            case 0:
                paisFavorito = "Azerbaijão";
                break;
            case 1:
                paisFavorito = "Antigua e Barbuda";
                break;
            default:
                paisFavorito = "Não tem favorito!"
                break;
        }

        alert(paisFavorito);
    }
}

/* Função Aninhada */

function retornarStatus(){
    var status = "";

    function verificarFalhas(){
        var falhas = true;
        return falhas;
    }

    if(verificarFalhas()){
        status = "Fazer Vista Grossa";
    }

    return status;
}

/* Função com ao menos um parâmetro */

function encontrarFavorito(){
    favoritoFutebol(0);
}

/* Função com um parâmetro rest */

function ordenarPaises(...paises){
    var listaPaises = paises.sort();
    return listaPaises;
}

/* Função com this */

function Pais(){
    this.nome = "";
    this.idioma = "";
    this.atletas = 0;
}

function carregarPais(){
    var pais1 = new Pais();
    pais1.nome = "Brasil";
    pais1.idioma = "pt-BR";
    pais1.atletas = 5;

    var pais2 = new Pais();
    pais2.nome = "Azerbaijão";
    pais2.idioma = "az";
    pais2.atletas = 1;

    var listaPaisesOrdenados = ordenarPaises(pais1,pais2);
    var dadosPais = "";

    for(let pais of listaPaisesOrdenados){
        dadosPais = pais.nome + " - " + pais.idioma + " - " + pais.atletas;
        alert(dadosPais);
        dadosPais = "";
    }
}


