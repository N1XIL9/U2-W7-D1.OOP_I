let form = document.getElementById("form");
let tabella = document.getElementById("tabella");
let pulsante = document.getElementById("btn");

let nome = document.getElementById("nome");
let cognome = document.getElementById("cognome");
let dataDiNascita = document.getElementById("dataDiNascita");

class Utente {
  constructor(nome, cognome, data) {
    this.nome = nome;
    this.cognome = cognome;
    this.data = data;
  }

  creazioneRiga(numerocol) {
    let tbody = document.querySelector("tbody");
    let createTr = document.createElement("tr");
    tbody.appendChild(createTr);
    for (let index = 0; index < numerocol; index++) {
      let createTd = document.createElement("td");
      createTr.appendChild(createTd);
    }
  }
}

let utenti = [];

pulsante.addEventListener("click", function () {
  new Utente().creazioneRiga(3);
  nuovoUtente = new Utente(nome.value, cognome.value, dataDiNascita.value);
  utenti.push(nuovoUtente);
  let td = document.querySelectorAll("td");
  let utenteInserito = utenti[utenti.length - 1];
  console.log(utenteInserito);
  td[td.length - 1].innerText = utenteInserito.data;
  td[td.length - 2].innerText = utenteInserito.cognome;
  td[td.length - 3].innerText = utenteInserito.nome;
});
