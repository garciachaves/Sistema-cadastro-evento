let dataEvento = 26/12/2021;
let dataAtual  = 22/12/2021;
if(dataEvento<=dataAtual) {
    console.log("Data do evento nao pode ser anterior ou igual a data atual");
} else {
    console.log("Data permitida");
} 
//verifica a idade do participante
let idadeParticipante = 23;
let limiteIdade = 18;
if(idadeParticipante >= limiteIdade) {
    console.log("Cadastro permitido");
} else {
    console.log("Cadastro negado. O participante deverá ser maior de", limiteIdade, "anos");
}
//lista os participantes e palestrantes
let listaParticipantes = ["Mayra","Lucas","Luciele","Aryam","Vitoria","Lucio"];
let limiteParticipantes = 100;
let listaPalestrante = ["Severino", "Josefa"]
console.log("Lista de participantes:", listaParticipantes);
console.log("Lista de palestrantes:", listaPalestrante)
//verifica quantidade de participantes
if(listaParticipantes.length > limiteParticipantes) {
    console.log("O evento não poderá exceder", limiteParticipantes, "participantes");
} else {
    console.log("Participantes cadastrados.", "Total de", listaParticipantes.length, "participantes.");
} 
