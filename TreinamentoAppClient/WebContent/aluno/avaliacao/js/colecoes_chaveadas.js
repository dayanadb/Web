// OK - 1) Crie uma coleção do tipo chaveada que não permita duplicidade de elementos
// OK - 2) Crie uma coleção do tipo chaveada que utiliza o par "chave/valor" para iteração

// 1)
function colecoesChaveadasUnica(){
    var meuSet = new Set();
    meuSet.add("Azul");
    meuSet.add("Amarelo");
    meuSet.add("Laranja");
}

// 2)
function colecoesChaveadas(){
    var mapa = new Map();
    mapa.set("Chave 1", "Valor 1");
    mapa.set("Chave 2", "Valor 2");
    mapa.set("Chave 3", "Valor 3");
}
