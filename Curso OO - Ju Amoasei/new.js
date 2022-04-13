function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`;
    }
    
}

function Admin(role) {
    User.call(this,)
}

