console.log('COLECOES INDEXADAS');

//1) Crie uma coleção do tipo indexada, contendo 3 elementos (tipos dos elementos de sua preferência)
var carros = [
    {modelo: 'Opala', fabricante: 'GM'},
    {modelo: 'Passat', fabricante: 'VW'},
    {modelo: 'Corcel', fabricante: 'Ford'}
];

carros.forEach(function(carro) {
    console.log(carro.modelo + ' é fabricado pela ' + carro.fabricante);
});
