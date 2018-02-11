/*
    VISSIBILITA' DELLE VARIABILI (SCOPE)
*/

//VARIBILI LOCALI:
function area() {
    var x = 3;
    var y = 4;
    return x * y;
}
//Le varibili locali sono varibili create all'interno di funzioni e quindi non accessibili dall'esterno.
//SI PARLA DI VARIABILE 'LOCALE' O 'A LIVELLO DI FUNZIONE' E SI DICE CHE HA UNA VISIBILITA' 'LOCALE' O 'A LIVELLO DI FUNZIONE'
/*Due funzioni differenti possono utilizzare varibili avente lo stesso nome senza entrare in conflitto*/
//ES:
function area() {
    var x = 2;
    var y = 2;
    return x * y;
}

function somma() {
    var x = 4;
    var y = 5;
    return x + y;
}
//in questo caso le varibili non entrano in conflitto perchè si trovano in contesti diversi.


//VARIBILI GLOBALI
//Sono varibili dichiarate all'esterno di funzioni, pertatto richiamabili da qualsiasi parte del codice.
var x = 3;
var y = 5;
//Le varabili locali vengono conservate in memoria per tutta la durata dell apgina web.
//Esse incrementano il richio che sorgano conflitti tra i nomi di esse.
/*E' BUONA PRATICA UTILIZZARE, QUANDO POSSIBILE, VARIBILI DI TIPO 'LOCALE'*/
//ES:
function plotSize() {
    var width = 3;
    var height = 2;
    return width * height;
}
var mex = plotSize();

function gardenSize() {
    var width = 2;
    var height = 6;
    return width * height;
}
var mex = gardenSize();
//IN QUESTO CASO LE VARIBILI LOCALI NON VANNO IN CONFLITTO PUR AVENDO LO STESSO NOME
//OPPOSTO SUCCEDE PER LE VARIABILI GLOBALI CHE INCORRONO IN UN CONFLITTO PERCHE' AVENTI LO STESSO NOME "mex".