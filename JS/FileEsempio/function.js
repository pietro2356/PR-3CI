//creazione di una funzione

function nomeFunzione() {
    //istruzioni della funzione
}
nomeFunzione();

/*
    LE FUNZIONI SERVONO PER RAGGRUPPARE 
    TUTTE LE ISTRUZIONI NECESSARIE 
    AD EFFETTUARE UNA DETERMIANTA OPERAZIONE.
*/
//esempio:

function hello() {
    document.write('Hello Wordl"');
}
/*
    Questa funzione stampa nella nostra
    pagina html la scritta: "Hello World!"
    MA PRIMA BISOGNA RICHIAMARE LA FUNZIONE:
*/
//richiamiamo la funzione hello così:
hello();

//PER RICHIAMARE UNA FUNZIONE BASTA SEMPLICEMENTE SCRIVERE IL NOME DELLA FUNZIONE CON LE PARENTESI TONDE:
nomeFunzione();

//dichiaro la funzione
function GetTime() {
    var data = new Date();
    var ora = data.getHours();
    var giorno = data.getDay();
    var mese = data.getMonth();
    document.write('Oggi è il ' + giorno + ', del mese ' + mese + ' e sono le ore ' + ora);
}
GetTime(); //richiamo la funzione
/*
    QUESTA FUNZIONE RESTITUISCE LA STRINGA: "Oggi è il 6, del mese 1 e sono le ore 15".
*/