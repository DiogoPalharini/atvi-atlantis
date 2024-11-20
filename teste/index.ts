import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

let cliente = new Cliente();
cliente.nome = `Pedro de Alcântara João Carlos Leopoldo Salvador`;
cliente.nomeSocial = `Dom Pedro II`;
cliente.dataCadastro = new Date(1840, 6, 23);
cliente.dataNascimento = new Date(1825, 11, 2);

let endereco = new Endereco();
endereco.rua = `R. do Catete`;
endereco.bairro = `Copacabana`;
endereco.cidade = `Rio de Janeiro`;
endereco.estado = `Rio de Janeiro`;
endereco.pais = `Brasil`;
endereco.codigoPostal = `22220-000`;
cliente.endereco = endereco;

// Adicionando telefones ao cliente
let telefone1 = new Telefone();
telefone1.ddd = "21";
telefone1.numero = "123456789";

let telefone2 = new Telefone();
telefone2.ddd = "21";
telefone2.numero = "987654321";

cliente.telefones.push(telefone1, telefone2);

// Criando um dependente e clonando endereço e telefones
let dependente = new Cliente();
dependente.nome = `Isabel Cristina Leopoldina Augusta Micaela`;
dependente.nomeSocial = `Princesa Isabel`;
dependente.dataCadastro = new Date(1921, 10, 14);
dependente.dataNascimento = new Date(1846, 6, 29);
dependente.endereco = cliente.endereco.clonar() as Endereco;
dependente.telefones = cliente.clonarTelefones();
dependente.titular = cliente;

cliente.dependentes.push(dependente);

console.log(cliente);
console.log(dependente);
