// *NOME REPO=* js-simon-sexcolor
// *DESCRIZIONE=*
// 1 -  Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri
// che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati;

var casual, trentaSec, indovinati;
var lista = [];

trentaSec = 5 * 1000;
indovinati = 0;

for (var i = 0; i < 5; i++) {
  casual = Math.floor(Math.random() * 10) + 1;
  lista.push(casual);
  alert(casual);
}
  console.log(lista);

setTimeout(numInsert, trentaSec);
function numInsert() {
for (var i = 0; i < 5; i++) {
  var check = parseInt(prompt("Inserisci i numeri che hai visto precedentemente"));
  if (lista.includes(check)) {
    indovinati++;
    console.log("Punteggio è " + indovinati + " e numero indovinato è " + check);
  }
}
}
