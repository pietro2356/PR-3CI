var giorno = new Date(); //crea un nuovo ggetto per la data
var ora = giorno.getHours(); //ottiene l'ora dal sistema
var minuti = giorno.getMinutes();
var messaggio; //variabile che contiene il messaggio da visualizzare
var ore; //     --^

//mostra il saluto appropriato in base all'ora
if (ora > 18) {
    messaggio = 'Buona sera!';
    ore = 'Sono le: ' + ora + ':' + minuti;
} else if (ora > 12) {
    messaggio = 'Buon pomeriggio!';
    ore = 'Sono le: ' + ora + ':' + minuti;
} else if (ora > 0) {
    messaggio = 'Benvenuti!';
    ore = 'Sono le: ' + ora + ':' + minuti;
}

document.write('<h1>' + messaggio + '</h1>'); //scrive il messaggio in un tag "h1"
document.write('<h2>' + ore + '</h2>');
/*  
    OVVIAMENTE 
    ESISTONO 
    I COMMENTI
    SU 
    PIU' 
    RIGHE
*/