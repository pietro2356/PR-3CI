function GetTime() {
    var data = new Date();
    var ora = data.getHours();
    var giorno = data.getDay();
    var mese = data.getMonth();

    document.write('Oggi è il ' + giorno + ', del mese ' + mese + ' e sono le ore ' + ora);
}
GetTime();