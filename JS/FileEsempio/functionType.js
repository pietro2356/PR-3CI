/*
    QUI VEDREMO VARI TITPI DI FUNZIONI 
*/

//Funzione denominata
/// Funzione che permette di essere richiamata in un secondo momento all'interno del codice
function area(width, height) {
    return width * height;
}

area(2, 5);

//Funzione anonima: --[Espressione funzionale]--
/// Funzione il cui nome è omesso, perchè essa è ospitata da una variabile:
var area = function(width, height) {
    return width * height;
};

var size = area(2, 5);

//Espressione funzionali a chaimata immedaita (IIFE)
/*Immediatly Invoked Function Expression*/
////NON HANNO UN NOME
////VENGONO ESEGUITE NEL MOMENTO IN CUI L'INTERPRETE LE INCONTRA

var area = (function() {
    var width = 2;
    var height = 5;
    return width * height;
}());
//LE PARANTESI TONDE SUBITO DOPO LA PARENTESI GRAFFA CHIUSA INDICANO ALL'INTERPRETE DI ESEGUIRE SUBITO LA FUNZIONE
//INVECE, LE PARENTESI PRIMA DI "Function" E DOPO LE TONDE FANNO IN MODO CHE TUTTO IL BLOCCO VENGOA TRATTATO COME UN'ESPRESSIONE