var num = 100;

for(i = 0; num < 100; i++)
{
	//todo
}

do
{
	console.log(num);
}
while(num< 100)


while(num < 100 )
{
	console.log(num);
}

var pessoa = {nome:"Aldo", sobrenome:"Leonardo", idade:43};

var teste = "";
var i;
for (i in pessoa)
{
    teste += pessoa[i];
	console.log(teste);
}

for (i of pessoa)
{
    teste += pessoa[i];
	console.log(teste);
}


