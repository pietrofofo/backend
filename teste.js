//1.Declare 5 variaveis pra representar uma viagem (destino, nome do viajante, cidade de origem, duração em dias e meio de (transporte)
// 2.Organizar uma forma de imprimir esse valores com interpolação ou saída invividual.

const destino = "Foz do Iguaçu";
const nomeViajante = "Samuel";
const cidadeOrigem = "Curitiba";
let duração = 8;
let transporte = "Carro";

console.log(`O viajante ${nomeViajante} deseja visitar de ${destino}, de {transporte} em um percurso de ${duração} horas `)

//3.Crie duas variavei númericas com o custo da passagem, hospedagem e alimentação
//4.Imprimir uma soma dos valores


let hospedagem = 600;
let alimentação = 300;

let total = hospedagem + alimentação;


console.log("O total dos gastos será: R$" + total");
    