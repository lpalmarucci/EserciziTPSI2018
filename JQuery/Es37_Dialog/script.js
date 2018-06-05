"use strict";
$(document).ready(function () {
    var dialog1=$("#dialog");
    dialog1.dialog({
        width:300,
        height:230,
        autoOpen:false,
        show:{
            effect:"blind",
            duration:1000
        },
        hide:{
            effect:"explode",
            duration:1000
        }
    })
    
    var apri=$("#apri");
    apri.button().on("click",function () {
        dialog1.dialog("open");
    })
    //quella modale blocca l'iterazione
    var dialog2=$("#dialogModale");
    dialog2.dialog({
        modal:true,
        width:300,
        height:230,
        autoOpen:false,
        show:{
            effect:"blind",
            duration:1000
        },
        hide:{
            effect:"explode",
            duration:1000
        }
    })
    var apriModale=$("#apriModale");
    apriModale.button().on("click",function () {
        dialog2.dialog("open")
    })

    /*DIALOG 3*/
    var dialog3=$("#dialogOkAnnulla");
    dialog3.dialog({
        width:300,
        height:230,
        autoOpen:false,
        show:{
            effect:"blind",
            duration:1000
        },
        hide:{
            effect:"explode",
            duration:1000
        },
        buttons:{
            Ok:function () {
                alert("Premuto pulsante OK");
                $(this).dialog("close");
            },
            Annulla:function () {
                alert("Operazione annullata");
                $(this).dialog("close")
            }
        }
    })
    var apriOkAnnulla=$("#apriOkAnnulla");
    apriOkAnnulla.button().on("click",function () {
        dialog3.dialog("open")
    })
});