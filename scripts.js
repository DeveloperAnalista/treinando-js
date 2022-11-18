


var fruta = "Frutas Varejo";

//vetor ou array
fruta = new Array ("uva", "maça", "pera", "manga", "tomate");


//acrescenta um novo registro no final do vetorfrutas.push("banana");
fruta.push ("banana");


//ordena o conteudo do vetor
fruta.sort();
imprima(fruta[1]);


for(let i = 0; i < fruta.length; i++)
{
	imprima(fruta[i]);
}


for(let i = 0; i< fruta.length; i++)
{
	imprima(fruta[i]);
}


let nome = "Aline Cardoso";

nome = new Array ("Gustavo Almeida", "Joao Guilherme", "Luiz Carlos", "Gabriel Angelo", "Miguel Angelo");

console.log (nome);


imprima(nome[0]);
imprima(nome[nome.length-1]);



imprima(" ");
var fatia =  fruta.slice(0, 4);
console.log(fatia);
fruta.slice(2,"melacia","amora");
for(i = 0; i < fruta.length; i++)
{
	imprima(fruta[i]);
}

imprima(" ");
let precos = [15, 18, 12.5, 20, 21, 19];
precos.sort();
	console.log(precos);
	imprima(precos[0]);
	imprima(precos[precos.length-1]);

	
	
	imprima(" ");
	imprima(fruta.indexOf ("maça"));

	var frutaIndesejada = "uva";
	var posicao = fruta.indexOf(frutaIndesejada);
	if(posicao!= -1)
	{
		fruta.splice(posicao,1);

		console.log(fruta);
	}

	
	







// imprime o texto seguido de 
//  uma quebra de linha
function imprima(texto) {
	document.write(texto + "<br>");
}

// formata números no formato brasileiro
function formataNumero(valor) {
	return new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2 }).format(valor);
}

// formata moedas no formato brasileiro
function formataMoeda(valor) {
	let padraoBR = Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
	return padraoBR.format(valor);
}