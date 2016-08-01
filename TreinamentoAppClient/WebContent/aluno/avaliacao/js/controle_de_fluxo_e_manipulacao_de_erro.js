/* 1) declare um bloco try...catch...finally e force um lancamento de exceção dentro da declaração try */
function a() {
        var a = 1;
        if (a === 1) {
            try {
            throw new Error("Deu boa!");
            } catch(Error) {
                alert("Deu ruim!");
            } finally {
                alert("Mas deu boa!");
            }
        }
}


/* 2) Declare um bloco if...else if...else */

if (1 > 4) {
    console.log(1);
}else if(2 > 4) {
    console.log(2);
}else if(3 > 4) {
    console.log(3);
}else if(4 === 4) {
    console.log(4);
}
