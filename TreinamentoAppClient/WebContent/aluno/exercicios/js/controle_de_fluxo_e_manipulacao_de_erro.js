function verificaNumero(num)
{
	var num2 = 1000;
	var idade = num2 / num;
	if( num2 < num)
	{
		try
		{
			idade = num / idade;
		}
		catch
		{
			console.error("idade não existe");
		}
	}
	else trow
	{
		console.log("fim de jogo")
	}
};
