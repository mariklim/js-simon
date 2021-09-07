// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// FUNZIONI

function getRndInteger(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

// PROGRAMMA PRINCIPALE


// 1.genero 5 numeri casuali tramite un ciclo, li salvo in una arr


var numeriCpuCasuali = [];

// per la versione con numeri duplicati si usa ciclo FOR:

// for(var i = 0; i < 5; i++){
//     var numeriRandom = getRndInteger(1, 50);
//     console.log(numeriRandom);
//     numeriCpuCasuali.push(numeriRandom);
// }


// per la versione senza numeri duplicati si usa ciclo WHILE:

while(numeriCpuCasuali.length < 5) {
	var numeriRandom = getRndInteger(1, 50);

	if (numeriCpuCasuali.includes(numeriRandom) == false ) {
		numeriCpuCasuali.push(numeriRandom);
	}	
}

console.log(numeriCpuCasuali);

// 2. Faccio vedere  Un alert() che espone 5 numeri generati casualmente.

alert("Guarda questi numeri e memorizza, dopo una pausa di 30 secondi devi inserire i numeri che hai memorizzato " + numeriCpuCasuali);

//3.  Da li parte un timer di 30 secondi.
//3a. chido all'utente per 5 volte inserire il numero
var arrNumeriUtente = [];
setTimeout(Timer30s, 3000);
function Timer30s() {
    for( var i = 0; i < 5; i++){
        var numeriUtente = parseInt(prompt("Inserisci i numeri che hai memorizzato"));
        if (numeriCpuCasuali.includes(numeriUtente) == true) {
            arrNumeriUtente.push(numeriUtente);
            document.getElementById("numeri").innerHTML += arrNumeriUtente[i] + " ";
            document.getElementById("numero-totale").innerHTML = arrNumeriUtente.length
        }
    }
}
console.log(arrNumeriUtente);




