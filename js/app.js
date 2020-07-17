var genera = document.getElementById('generare');
var annullare = document.getElementById('annulla');



annullare.addEventListener("click", function() {
 location.reload();
}
);

genera.addEventListener("click", function() {
  var nome = document.getElementById('nec').value;
  var km = document.getElementById('kilo').value;
  var age = document.getElementById('eta').value;
}
);

var prezzo = km * 0.21 ;
var minorenne= prezzo * 0.8;
var scontoOver = prezzo * 0.6;
var totale = prezzo;

if (eta == 'Minorenne') {
 totale = minorenne;
 document.getElementById('sconto-pax').innerHTML = "Tariffa 20%"
}else if (eta == 'Over 65')  {
 totale = scontoOver;
 document.getElementById('sconto-pax').innerHTML = "Tariffa 40%";
}else {
 document.getElementById('sconto-pax').innerHTML = "Tariffa normale";
}


document.getElementById('nome-pax').innerHTML = ;
document.getElementById('carrozza').innerHTML = Math.floor(Math.random()*(10 - 1))+1;
document.getElementById('prezzo').innerHTML = totale.toPrecision(3) + '€';
