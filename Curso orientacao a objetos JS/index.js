import {Cliente} from "./Cliente.js";
// import {ContaCorrente} from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js"; //dois cliques na palavra e ctrl + D pra mudar a referencia em todos os lugares
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

// const cliente1 = new Cliente("Luisa", 11122233309);
// const cliente2 = new Cliente("Bernardo", 22222233309);


//ctrl + b para fechar ou abrir a aba da esquerda
// ctrl + alt para abrir o cursor e poder editar ao mesmo tempo várias linhas 


// const contaCorrenteLuisa = new ContaCorrente(1001, cliente1);
// contaCorrenteLuisa.depositar(500);
// contaCorrenteLuisa.sacar(100);

// const conta2 = new ContaCorrente(102, cliente2);
// contaCorrenteLuisa.transferir(200,conta2);

// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// const contaSalario = new ContaSalario(cliente1);


// console.log(contaCorrenteLuisa);
// console.log(conta2);
// console.log(contaPoupanca);

////////////////////////////////////////////////
//segunda etapa do curso

const diretor = new Diretor("Bernardo", 10000, 12312312312);
const gerente = new Gerente("Luisa", 5000, 12312312321);

const estaLogado = SistemaAutenticacao.login(diretor, 123456)



