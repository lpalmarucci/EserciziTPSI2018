/**
 * Created by a.boschero.0184 on 04/02/2017.
 */

/** ISTANZA = rappresentazione in memoria della classe 
 * METODI STATICI = metodi che dipendono dalla classe e possono essere usati senza istanziare la classe
 * METODI D'ISTANZA = metodi che non dipendono dalla classe e non possno essere usati senza instanziare la classe**/

var ns;
var nt;

function start() {
    ns = Math.floor(100 * Math.random())+1; /** numero random tra 1 e 100 **/
        /**Math.floor((B-A+1)*Math.random())+A; **/
    alert(ns);
    nt=0;
}

function esegui() {
    var vinto=false;
    nt++;
    /** Puntatore alla TextBox **/
    var txtInput = document.getElementById("n1");
    var txtDiv = document.getElementById("txtMsg" );
    var btn=document.getElementById("btnEsegui")
    /** Contenuto TextBox --> .value **/
    var n=parseInt(txtInput.value);
    if (n>ns)
        txtDiv.innerText="Alto";
    else {
        if (n < ns) {
            txtDiv.innerText="basso";
        }
        else{
            txtDiv.innerText="Vinto in "+ nt-1 +" t";
            vinto=true;
        }

    }
    if((nt==10)&&(!vinto)){
        alert("Hai perso!")
        /*btn.removeEventListener("click");*/ /*Non me lo disattiva ma non mi fa più niente*/
        btn.disabled = true;
    }

}