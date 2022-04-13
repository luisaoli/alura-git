import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Luisa', 'l@l.com', '1995-05-12');
console.log(novoUser.exibirInfos());

// const novoAdmin = new Admin('Bernardo', 'b@b.com', '2022-01-10');
// console.log(novoAdmin.nome);
// novoAdmin.nome = '';
// console.log(novoAdmin.nome);
