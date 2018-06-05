/**
 * Created by l.palmarucci.0117 on 31/01/2017.
 */
function calcola() {
    var txt1=document.getElementById("txtNumero1");
    var txt2=document.getElementById("txtNumero2");
    var txtRis=document.getElementById('txtRisultato');
    var n1=parseInt(txt1.value);
    var n2=parseInt(txt2.value);
    var ris=n1+n2;
    txtRis.value=ris;
    /*alert(ris);*/
}