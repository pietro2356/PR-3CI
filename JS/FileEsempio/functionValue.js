/*
    DICHIARARE FUNZIONI CHE RICHIEDONO INFORMAZIONI
*/
function getArea(parametro_1, parametro_2) {
    return parametro_1 * parametro_2;
}
//QUESTA FUNZIONE CI DA COME OUTPUT IL VALORE DELL'AREA IN BASE AI DATI-VALORI 
//CHE NOI APPLICHIAMO AI PARAMETRI


//ADESSO VEDIAMO COME RICHIAMARE QUESTO TIPO DI FUNZIONI.
getArea(3, 5);
//in questo caso abbiamo usato valori diretti.


function getAreaVar(x, y) {
    return x * y;
}

var x = 3;
var y = 5;
getArea(x, y);
//in questo caso abbiamo usato delle varibili per dare dei valori ai parametri.

//DA UNA FUNZIONE POSSIAMO OTTENERE VARI RISULTATI:
function calculateArea(width, height) {
    var area = width * height;
    return area;
}
var area_1 = calculateArea(3, 5);
var area_2 = calculateArea(20, 5);


//ADESSO VEDIAMO COME OTTENERE PIù VALORI DA UNA FUNZIONE:
//Quuesto avviene con l'utilizzo degli array o vettori
function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}
var area_1 = getSize(3, 5, 2)[0];
var volume_1 = getSize(3, 5, 2)[1];
/*
    La variabile area_1 contiene l'area di un rettangolo di dimensioni 3*5.
    L'area è il primo valore dell'array "sizes".

    La variabile volume_1 contiene il volume di una scatola 3*5*2.
    Il volume è il secondo valore contenuto nell'array "sizes".
*/