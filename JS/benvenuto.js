var giorno = new Date(); //crea un nuovo ggetto per la data
var ora = giorno.getHours(); //ottiene l'ora dal sistema
var messaggio; //variabile che contiene il messaggio da visualizzare

//mostra il saluto appropriato in base all'ora
if (ora > 18) {
    messaggio = 'Buona sera!';
} else if (ora > 12) {
    messaggio = 'Buon pomeriggio!';
} else if (ora > 0) {
    messaggio = 'Benvenuti!';
}

document.write('<h1>' + messaggio + '</h1>'); //scrive il messaggio in un tag "h1"
/*  
    OVVIAMENTE 
    ESISTONO 
    I COMMENTI
    SU 
    PIU' 
    RIGHE
*/