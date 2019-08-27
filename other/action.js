// 2 -  Il software deve chiedere all’utente il suo nome e il sesso con
// due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve
// essere azzurro o rosa a seconda del sesso inserito;
//
// *NOTE=* repo con 2 sottocartelle, una per ogni ex;
// come sempre se fate poi versione oltre le richieste base (per es. controlli,
//    create sempre altra sottocartella);
// alla domanda “sesso?” non vale rispondere: “si grazie!”
// (o al massimo potrebbe essere uno dei controlli della versione avanzata)

var chiediNome = prompt("Dimmi il Tuo nome");
var chiediSesso = prompt("Sei un maschio o una femmina???").toLowerCase();
var stampa = document.getElementById('my');


console.log(chiediNome + " " + chiediSesso + " ");

if (chiediSesso === "maschio") {
  var coloreNome = chiediNome.style.color = "blue";
} if (chiediSesso === "femmina") {
  var coloreNome = chiediNome.style.color = "pink";
}

stampa.innerHTML = "Ciao " + coloreNome;
