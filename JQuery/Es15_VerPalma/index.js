var articoli = new Array(8);

articoli[0] = new Object({articolo: "Sony a7", codice: "2", prezzo: "250", quantita: 0, 	descrizione: "Lorem ipsum 1 dolor sit amet, consectetur adipiscing elit. Mauris aliquet aliquam quam sit amet volutpat. Curabitur vel fermentum ipsum."});
articoli[1] = new Object({articolo: "Sony a7s  ", codice: "4", prezzo: "300", quantita: 0,
descrizione: "Lorem ipsum 2 dolor sit amet, consectetur adipiscing elit. Mauris aliquet aliquam quam sit amet volutpat. Curabitur vel fermentum ipsum."});
articoli[2] = new Object({articolo: "Sony a5100", codice: "6", prezzo: "350", quantita: 0,
descrizione: "Lorem ipsum 3 dolor sit amet, consectetur adipiscing elit. Mauris aliquet aliquam quam sit amet volutpat. Curabitur vel fermentum ipsum."});
articoli[3] = new Object({articolo: "Blackmagic", codice: "8", prezzo: "400", quantita: 0,descrizione: "Lorem ipsum 4 dolor sit amet, consectetur adipiscing elit. Mauris aliquet aliquam quam sit amet volutpat. Curabitur vel fermentum ipsum."});
articoli[4] = new Object({articolo: "c100", codice: "1", prezzo: "450", quantita: 0,
descrizione: "Lorem ipsum 5 dolor sit amet, consectetur adipiscing elit. Mauris aliquet aliquam quam sit amet volutpat. Curabitur vel fermentum ipsum."});
articoli[5] = new Object({articolo: "c300", codice: "3", prezzo: "500", quantita: 0,
descrizione: "Lorem ipsum 6 dolor sit amet, consectetur adipiscing elit. Mauris aliquet aliquam quam sit amet volutpat. Curabitur vel fermentum ipsum."});
articoli[6] = new Object({articolo: "Nikon D330", codice: "5", prezzo: "550", quantita: 0,
descrizione: "Lorem ipsum 7 dolor sit amet, consectetur adipiscing elit. Mauris aliquet aliquam quam sit amet volutpat. Curabitur vel fermentum ipsum."});
articoli[7] = new Object({articolo: "Nikon D40x", codice: "7", prezzo: "600", quantita: 0,
descrizione: "Lorem ipsum 8 dolor sit amet, consectetur adipiscing elit. Mauris aliquet aliquam quam sit amet volutpat. Curabitur vel fermentum ipsum."});

 
var currentProduct = -1;
var currentCode=-1;
var ind;
var primo=1;
var count;
$(document).ready(function () {
    ind=0;
    count=0;
    var _elencoImg=$("#wrapper > #elencoImmagini");
    for(var i=0;i<articoli.length;i++){
        var _img=$("<img></img>")
        _img.prop("src","img/img"+(i+1)+".jpg")
        _img.addClass("immagine");
        _img.prop("id","ID"+(i+1));                             //HO GIA' INCREMENTATO QUINDI NON LO DEVO PIU' FARE
        _elencoImg.append(_img);
    }
    var _prev=$("<img></img>")
    _prev.prop("src","img/carrello.png");
    //_prev.addClass("immagine")
    $("#wrapper > #preview").append(_prev);

    var _table=$("#tabella");
    var _th=$("<th></th>")
    _th.addClass("th")
    _th.text("Codice");
    var _td=$("<td></td>")
    _td.addClass("td");
    _table.append(_th);

    var _th=$("<th></th>")
    _th.addClass("th")
    _th.text("Articolo");
    var _td=$("<td></td>")
    _td.addClass("td");
    _table.append(_th);

    var _th=$("<th></th>")
    _th.addClass("th")
    _th.text("Prezzo");
    var _td=$("<td></td>")
    _td.addClass("td");
    _table.append(_th);

    var _th=$("<th></th>")
    _th.addClass("th")
    _th.text("Qta");
    var _td=$("<td></td>")
    _td.addClass("td");
    _table.append(_th);

    var _th=$("<th></th>")
    _th.addClass("th")
    _th.text("Elimina");
    var _td=$("<td></td>")
    _td.addClass("td");
    _table.append(_th);

    $("#wrapper > #elencoImmagini > img").mouseover(function () {
        //alert("CIAO")
        var _preview=$("#preview > img");
        var indice=$(this).prop("id").substr(2);
        //alert(indice);
        //_preview.prop("src","")
        _preview.prop("src","img/img"+indice+".jpg")
    })
    //var _p=$("<p></p>");
    //$("#descrizione").append(_p);
    $("#wrapper > #elencoImmagini > img").on("click",function () {
        var indice=$(this).prop("id").substr(2);
        indice--;
        var descrizione=articoli[indice]["descrizione"];
        //alert($("#wrapper > #descrizione").text()
        if($("#wrapper > #descrizione").text()!="") {
            $("#wrapper > #descrizione").fadeOut(1000,function () {
                $("#wrapper > #descrizione").text(descrizione).fadeIn(2000);
            });
        }
        else{
            $("#wrapper > #descrizione").text(descrizione)                                     //.fadeIn() viene applicato ai metodi nascosti
            $("#wrapper > #descrizione").hide();
            $("#wrapper > #descrizione").fadeIn(1000);
        }
    })
    $("#wrapper > #elencoImmagini > img").dblclick(function () {
        aggiungiVoce();
        var indice=$(this).prop("id").substr(2);
        indice--;
        var descrizione=articoli[indice]["descrizione"];
        var codice=articoli[indice]["codice"];
        var articolo=articoli[indice]["articolo"];
        var prezzo=articoli[indice]["prezzo"];
        var qta=articoli[indice]["quantita"];
        for(var i=0;i<4;i++){
            var _punt=$("#tabella > tr:last-child > td").eq(i);
            switch (i){
                case 0:
                    _punt.text(codice);
                    break;
                case 1:
                    _punt.text(articolo);
                    break;
                case 2:
                    _punt.text(prezzo);
                    break;
                case 3:
                    _punt.text(qta);
                    break;
                default:
                    break;
            }
        }
        var btn=$("<input></input>")
        btn.prop("type","button")
        btn.prop("value","Elimina")
        btn.prop("id","ID"+ind)
        btn.prop("class","btn")
        $("#tabella > tr:last-child > td:last-child").append(btn);
        ind++;
        btn.on("click",function (){
            //aggiungiQta($(this))
            var indice=$(this).prop("id").substr(2);
            $("#tabella > tr").eq(indice).remove();
            ind--;
            //alert(indice)
            count=0;
            controlla();
            sistema(count);
        })

    })
})
/*function aggiungiQta(sender) {
    var aus=parseInt().text()
}*/
function controlla() {
    $(".btn").each(function (i,ref) {
        count++;
    })
}
function sistema(count) {
    for(var i=0;i<count;i++)
        $("input[type=button]").eq(i).prop("id","ID"+i);
}
function aggiungiVoce() {
    //creo gli elementi HTML
    var _table=$("#tabella");
    var _tr=$("<tr></tr>");
    _tr.prop("id","ID"+ind);
    _table.append(_tr);
    for(var i=0;i<5;i++){
        var _td=$("<td></td>");
        _td.addClass("td");
        _tr.append(_td);
    }
}