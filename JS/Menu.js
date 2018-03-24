$(document).ready(function() {
    $(".head__icon-bar").click(function(event) {
        $(".head__menu").toggleClass('ON');
        event.preventDefault();
    })
});
//SPIEGAZIONE CODICE:
/*
    il metodo Jquery ".ready()" controlla se la pagina è pronta ad essere modificata.
    $(document) crea l'oggetto jquery che rappresenta la pagina.

    Quando la pagina è pronta, viene richiamata la funzione all'iterno delle parentes idel metodo .ready() :
    
    $(document).ready(function() {
        //script
    });

    Tramite il selettore jquery "$(<element>)" selezioniamo l'elemento ".header__icon-bar".
    $(".header__icon-bar")

    Qundo clicchiamo sull'elemento selezionato in precedenza verrà eseguito lo script all'interno della funzione,
    che richiede un parametro "event":

    .click(function(e) {
    
    });


    Tramite il selettore jquery andiamo a selezionare l'elemento.
    $(".header__menu").
    e con il metodo .toggleClass(<class>) andiamo ad aggiungere e rimuovere una classe.

    -La classe che si va ad aggiungere e togliere dovrà essere presente nel file di stile della pagina dello script

    Dato che le tre barrette che permettono di aprire il menù sono dei "link aperti", appena le clicchiamo si ricarichera
    la pagina, Ma noi prima abbiamo inserito il parametro "event" nella funzione, quindi scrivendo quanto segue,
    andiamo semolicemente ad interrompere l'azione predefinita di un'elemento, che in questo caso sarà l'immisione 
    dell'URL da parte delle tre barre che non avendo alcun URL ricaricherà semplicemente la pagina.
    event.preventDefault(); 

*/