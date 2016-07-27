/**
 * 
 */
function a() {
        var a = 1;
        if (a === 1) {
            try {
            throw new Error("Deu boa!");
            } catch(Error) {
                alert("Deu ruim!");
            }
        }
        switch(a) {
            case 0:
                alert(a);
                break;
            case 2:
                alert("desconhecido");
                break;
            default:
                alert("default");
                break;
        }
}

a();

/**
 * CONSIDERAÇÕES:
   Muito bom! Apenas um lembrete: a clausula 'default' sempre será a ultima, logo o break pode ser dispensado pra ela
  */
