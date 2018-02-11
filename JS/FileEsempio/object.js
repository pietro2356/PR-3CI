/*
    COS'E' UN'OGGETTO E COME COSTRUIRLO.
*/
/*
    RAGGRUTTPANO UN'INSIEME DI VARIABILI E DI FUNZIONI PER CREARE UN MODELLO DI UN'ENTITA' PRESENTE NEL MONDO REALE.
    NEGLI OGGETTI LE VARIABILI VENGONO CHIAMATE PROPRIETA'.
    NEGLI OGGETTI LE FUNZIONI VENGONO CHIAMATE METODI.
*/
//ES:
var hotel = {
    //proprietà
    name: 'hotel',
    rooms: 40,
    booked: 25,
    gym: true,
    swimmingpool: false,
    typeRooms: ['single', 'double'],
    //metodi
    aviableCheck: function() {
        return this.rooms - this.booked;
    }
}