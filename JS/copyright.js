function GetCopyright() {
    document.write('<h4> &copy; Copyright Rocchio Pietro 2018/2019 </h4>');
}

function GetTime() {
    var data = new Date();
    var ora = data.getHours();
    var giorno = data.getDay();
    var mese = data.getMonth();

    document.write('Oggi è il ' + giorno + ' del mese ' + mese + ' e sono le ore ' + ora);
}
GetCopyright();
GetTime();