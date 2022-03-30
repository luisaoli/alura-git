console.log("Trabalhando com listas.");

// const salvador = `salvador`;
// const saoPaulo = `São Paulo`;
//para comentar bloco -> seleciona e digita ctrl + K + C, pra descomentar é ctrl + K + U

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listaDeDestinos.push(`Curitiba`); //push para adicionar um item a uma lista

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //para deletar um elemento da lista

console.log(listaDeDestinos); //para exibir a lista toda
console.log(listaDeDestinos[0]); //para exibir um item específico
