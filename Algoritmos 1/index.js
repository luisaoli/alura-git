//obj: encontrar o livro mais barato e o mais caro dentro do array

const livros = require('./lista-livros');

let maisBarato = 0;
let maisCaro = 0;

for (let atual = 0; atual < livros.length; atual++){
    if (livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual;
    }
    if (livros[atual].preco > livros[maisCaro].preco){
        maisCaro = atual;
    }
}

console.log(`O livro mais barato custa ${livros[maisBarato].preco}, o titulo é ${livros[maisBarato].titulo} e o livro mais caro custa ${livros[maisCaro].preco} e o titulo é ${livros[maisCaro].titulo}.`);
