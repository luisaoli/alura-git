console.log("\n Trabalhando com loops!")

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listaDeDestinos.push(`Curitiba`); //push para adicionar um item a uma lista

const idadeComprador = 18;
const estaAcompanhado = false;
let passagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;

while(contador < 4){
    if (listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    } 
    contador += 1;
}

console.log("Destino existe: " + destinoExiste);

if (destinoExiste && podeComprar) {
    console.log("Boa viagem!"); 
} else {
    console.log("Desculpe, tivemos um erro!");
}

for(let i = 0; i < 4; i++){
    if (listaDeDestinos[i] == destino){
        console.log("Destino existe");
        destinoExiste = true;
    }
}

// if (idadeComprador >= 18 || estaAcompanhado) {
//     console.log("Boa viagem");
//     listaDeDestinos.splice(1, 1); //para deletar um elemento da lista
//     passagemComprada = true;
// } else {
//     console.log("Comprador não é maior de idade, não posso vender.");
//     passagemComprada = false;
// }

//alt + shift + f para identar

// \n para pular linha dentro de texto
// console.log("Embarque: \n\n");
// if(idadeComprador >= 18 && passagemComprada) {
//     console.log("Boa Viagem");
// } else {
//     console.log("Infelizmente você não pode embarcar.")
// }

// console.log(listaDeDestinos);

