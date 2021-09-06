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
for(var i = 0; i < 5; i++){
    var numeriRandom = getRndInteger(1, 50);
    console.log(numeriRandom);
    numeriCpuCasuali.push(numeriRandom);
}

console.log(numeriCpuCasuali);

// 2. Faccio vedere  Un alert() che espone 5 numeri generati casualmente.

alert(numeriCpuCasuali);

//3.  Da li parte un timer di 30 secondi.
//3a. chido all'utente per 5 volte inserire il numero
var arrNumeriUtente = [];
setTimeout(Timer30s, 3000);
function Timer30s() {
    for( var i = 0; i < 5; i++){
        var numeriUtente = parseInt(prompt("Inserisci i numeri che hai memorizzato"));
        if (numeriCpuCasuali.includes(numeriUtente) == true) {
            alert("questo numero hai memorizzato correttamente: " + numeriUtente);
            arrNumeriUtente.push(numeriUtente);
            document.getElementById("numeri").innerHTML += arrNumeriUtente[i] + " ";
        }
    }
}
console.log(arrNumeriUtente);




