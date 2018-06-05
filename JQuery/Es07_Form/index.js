"use strict";
/*le funzioni richiamate dall'HREF devono essere esterne
* al document.ready*/
function visualizza(n) {
    var selettore="";
    switch(n){
        case 1:
            selettore=$("input[type=text]");
            break;
        case 2:
            //label.children(select) perché è l'unica dentro
            //label
            //selettore=$("label").children("select");

            //prendi tutti i select e seleziona quello con
            //indice zero
            //selettore=$("select").eq(0);

            //seleziono i select con caratteristica
            //primo del suo tipo
            //selettore=$("select:nth-of-type(1)").eq(0);

            //seleziono i select all'interno di label
            //con caratteristica primo del suo tipo
            //selettore=$("label select:nth-of-type(1)");

            //seleziono il select figlio al primo posto
            //selettore=$("fieldset label:nth-of-type(2) > select option")
            selettore=$("select:nth-child(1)");
            break;
        case 3:
            selettore=$("input[type=checkbox]");
            //restituisce on sul secondo perché non ha value
            break;
        case 4:
            selettore=$("input[type=checkbox]:checked");
            break;
        case 5:
            selettore=$("input[type=checkbox]:not(:checked)");
            break;
        case 6:
            selettore=$("input[type=radio]:checked");
            break;
        case 7:
            selettore=$("input[type=radio]:not(:checked)");
            break;
        case 8:
            //selettore=$("select").eq(1);
            //.eq(1) perché il primo è 0;
            //jquery partono da 0,
            //i css partono da 1.
            selettore=$("fieldset > select:last-child option:selected");
            //selettore=$("fieldset > select option:selected");
            break;
    }
    selettore.each(function (i,ref) {
        alert($(ref).val());
    });
}
function imposta(n) {
    switch(n){
        case 1:
            $("input[type=text]").val("Hello World!");
            //.text è diverso da .val
            //.text è il contenuto di due tag
            //<p>TEXT/p> -- <input type="text" value=".val">
            break;
        case 2:
            /*<option selected="selected">nessun valore</option>
			<option value="1">uno</option>
			<option value="2">due</option>
			<option value="3">tre</option>*/

            //$("select").eq(0).val('3');
            //.val nel caso sopra modifica la voce selezionata

            $("label > select option[value=3]").prop("selected",true);
            break;
        case 3:
            //$("input[type=checkbox]").prop("checked",false);
            //^-->Viene usato per deselezionare tutti i checkbox

            //$("input[type=checkbox]").val(['opzione 1','opzione 2','opzione 3']);
            //opzione due non si può selezionare perché manca il value nel due

            $("input[type=checkbox]").eq(2).prop("checked",true);
            //utilizzo di .eq per selezionare il checkbox interessato
            break;
        case 4:
            //$("input[type=radio]").val("si");

            $("input[type=radio]").eq(0).prop("checked",true);
            break;
        case 5:
            $("fieldset > select option").prop("selected",false);

            //$("fieldset > select").val(['nessun valore','uno','tre']);

            /*$("fieldset > select option").each(function (i,ref) {
                $(ref).prop("selected",true);
            });*/

            //$("fieldset > select option:first-child,fieldset > select option:last-child").prop("selected",true);
            //^-->Con questo metodo non li deseleziona tutti
            break;
    }
}