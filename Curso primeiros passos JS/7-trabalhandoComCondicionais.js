console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listaDeDestinos.push(`Curitiba`); //push para adicionar um item a uma lista

const idadeComprador = 15;
const estaAcompanhado = true;
const passagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); //para deletar um elemento da lista
} else if (estaAcompanhado) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Comprador não é maior de idade, não posso vender.");
}

//alt + shift + f para identar

// \n para pular linha dentro de texto
console.log("Embarque: \n\n");
if(idadeComprador >= 18 && passagemComprada) {
    console.log("Boa Viagem");
} else {
    console.log("Infelizmente você não pode embarcar.")
}

console.log(listaDeDestinos);

