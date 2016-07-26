/**
 Testando o comentário de multiplas linhas
 */

// Comentário de Linha simples

function teste() {
    var nome = 'John Doe';
    var idade = 30;
    var ativo = false;
    var endereco = {
        rua: 'João Marchesini',
        numero: 139,
        bairro: 'Prado Velho',
        cidade: 'Curitiba',
        estado: 'Paraná',
        cep: '80000-000'
    };

    const cidade = 'Curitiba';

    if (idade > 60) {
        let idoso = true;
        if (idoso) {
            console.log('Tem desconto em ' + cidade);
        }
    }
    else {
        let idoso = false;
        if (idoso) {
            console.log('Não tem desconto');
        }
    }
}
