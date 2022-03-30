//Classe abstrata - nao pode ser instanciada

export class Conta{

    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata.")
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }


    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }


    //Método abstrato
    sacar(valor){
        throw new Error("O método Sacar da conta é abstrato");
    }

    _sacar(){
        const valorSacado = taxa * valor;

        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
            }

        return 0;
    }

    depositar(valor){
        if (valor <= 0) {
            return; // early return quando faço primeiro as validações que não quero que levem pra execução do método pq o return age como um break no método
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}