function testarIteracao(){
    var flag = true;
    while(flag){
        for(var i = 0; i < 10; i++){
            console.log(i);
            continue;
        }
        flag = false;
    }

    alert("Saindo de testarIteracao");
}
