/**
 * Created by a.boschero.0184 on 18/09/2017.
 */

window.onload = function () {
    /********************
     VETTORI ASSOCIATIVI
     *******************/
    var vect1 = [];  // oppure new Object
    vect1['pippo'] = "descrizione di pippo";
    vect1['pluto'] = "descrizione di pluto";
    vect1['minnie'] = "descrizione di minnie";
    //vect1[3] = "CIAO MONDO!";
    //anche se gli inidici numerici sono riconosciuti sono vivamente sconsigliati
    //alert(vect1[3]);
    //alert(vect1[0] + " " + vect1['pippo']);
    //alert("Key in vect1");
    for(var key in vect1)
        alert(key + " --> " + vect1[key]);
    

    /********************
            OBJECT
     *******************/
    var vect2 = {
    "pippo" : "descrizione di pippo",
    "pluto" : "descrizione di pluto",
    "minnie" : "descrizione di minnie"
    };
    //alert("Key in vect2");
    for(var key in vect2)
        //alert(key + " --> " + vect1[key]);
    
    var autore = "Pirandello";
    var titolo = "Uno nessuno centomila";
    var prezzo = 15;
    var vect3 = {
        "autore" : autore,
        "titolo" : titolo,
        "prezzo" : prezzo
    };
    //serializzo
    var s = JSON.stringify(vect3); // restituisce una stringa
    alert(s);
    //parsifico
    var obj = JSON.parse(s);
    obj["prezzo"] += 1;
    //riserializzo
    s = JSON.stringify(obj);
    alert(s);
};