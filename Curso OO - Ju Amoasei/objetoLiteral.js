const user = {
    nome: "Luisa",
    email: "luisa@luisa.com",
    nascimento: "2022/04/12",
    role: "estudante",
    ativo: "true",
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Bernardo",
    email: "b@b.com",
    role: "admin",
    criarCurso() {
        console.log('curso criado!');
    }
}
