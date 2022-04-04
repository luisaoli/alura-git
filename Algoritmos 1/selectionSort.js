const livros = require('./lista-livros');
const menorValor = require('./menorValor');
const troca = require('./troca');

for (let atual = 0; atual < livros.length - 1; atual++){
    let analise = menorValor(livros, atual);
    troca(livros, analise);
}

console.log(livros);
