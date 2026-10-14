/*
  PROVA EM DUPLA — Sistema Léxico do JavaScript
  Cartão de Embarque

  Integrante 1:
  Integrante 2:
  Data:
*/

const NOME_DA_COMPANHIA = "JS Airlines"

let nomeDoPassageiro = "Nuquiditu da Galera"
let origem = "POA"
let destino = "GIG"
let cidadeDeOrigem = "Porto Alegre"
let cidadeDeDestino = "Rio de Janeiro" // corrigido: fecha com uma aspas simpes e iniciava com uma dupla
let codigoDoVoo = "JS1012";
let dataDoVoo = "20/10/2026" //corrigido: coloquei ; e desci de linha
const classe = "Econômica" //corrigido: foi usado uma palvra proibida
let portao = "B7" //corrigido: não pode inociar com numero
let numeroDaPoltrona = "14C" //Corrigido: não pode coonter espaçamento
let horario_de_embarque = "07:40" //corrigido: nao pode conter -
let H = "08:10" //vamos corrigir
let BagagemDespachada = "1 mala · 23 kg"
let codigodereserva = "XK7P2Q"

// Trecho da viagem: origem → destino (exemplo: POA → GIG)
let trecho_da_viagem = origem // + " → " + destino

let mensagem = "Boa viagem, " + nomeDoPassageiro
("Embarque até " + horarioDeEmbarque).length


document.getElementById("companhia").textContent = NOME_DA_COMPANHIA
document.getElementById("passageiro").textContent = nomeDoPassageiro //correção da nomeclatur 
document.getElementById("origem").textContent = origem
document.getElementById("destino").textContent = destino
document.getElementById("cidadeOrigem").textContent = cidadeDeOrigem
document.getElementById("cidadeDestino").textContent = cidadeDeDestino
document.getElementById("voo").textContent = codigoDoVoo
document.getElementById("data").textContent = dataDoVoo
document.getElementById("classe").textContent = classe
document.getElementById("portao").textContent = portao
// document.getElementById("poltrona").textContent = poltrona
document.getElementById("embarque").textContent = horarioDeEmbarque
document.getElementById("partida").textContent = H
document.getElementById("bagagem").textContent = BagagemDespachada
document.getElementById("reserva").textContent = codigodereserva
document.getElementById("trecho").textContent = trecho_da_viagem
document.getElementById("mensagem").textContent = mensagem


document.getElementByid("status").textContent = "✈ STATUS DO VOO: TUDO CERTO · EMBARQUE AUTORIZADO"
document.getElementById("status").className = "painel painel--ok"