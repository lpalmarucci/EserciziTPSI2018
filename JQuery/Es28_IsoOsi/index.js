/**
 * Created by a.boschero.0184 on 12/12/2017.
 */

$(document).ready(function () {
    var _wrapper = $("#wrapper");
    var vet = [
        {"ID":"1","Nome":"Applicazione"},
        {"ID":"2","Nome":"Presentazione"},
        {"ID":"3","Nome":"Sessione"},
        {"ID":"4","Nome":"Trasporto"},
        {"ID":"5","Nome":"Rete"},
        {"ID":"6","Nome":"Data Link"},
        {"ID":"7","Nome":"Fisico"}
    ];

    for (var i = 0; i < 7; i++){
        // PEDINE
        var _pedina = $("<div></div>");
        _pedina.addClass("pedina");
        _pedina.css("top",(25 + (60*i)).toString() + "px");

        var pos =Math.floor(Math.random()*(vet.length));
        _pedina.text(vet[pos]["Nome"]);
        _pedina.prop("id","p" + vet[pos]["ID"]);
        vet.splice(pos,1);
        _pedina.appendTo(_wrapper);

        // BERSAGLI
        var _bersaglio = $("<div></div>");
        _bersaglio.addClass("bersaglio");
        _bersaglio.css("top",(25 + (60*i)).toString() + "px");
        _bersaglio.prop("id","b" + (i+1));
        _bersaglio.appendTo(_wrapper);
    }

    var _pedine = $("#wrapper > div.pedina");
    _pedine.draggable({
        "cursor":"move",
        "containment":"#wrapper",
        "revert":"invalid",//true ritorna sempre indietro
        "start":function (event,args) {
            $(event["target"]).addClass("giallo")
            $(event["target"]).draggable("option","revert","invalid");
            ///STESSA COSA
            ///$(this).addClass("giallo");
        },
        "stop":function (event,args) {
            $(this).removeClass("giallo");
            ///STESSA COSA
            $(event["target"]).removeClass("giallo");
        }
    });

    var _bersagli = $("#wrapper > div.bersaglio");
    _bersagli.droppable({
        "accept": ".pedina",
        "activeClass":"verde",
        "hoverClass":"over",
        "drop":function (event,args) {
            console.log(event);
            console.log(args);
            var id,id2;
            id=$(args["draggable"]).prop("id").substr(1);
            id2=$(event["target"]).prop("id").substr(1); //event è un selettore javascript
            if(id==id2)
            {
                var top=$(event["target"]).css("top");
                var left=$(event["target"]).css("left");
                args["draggable"].css({"top":top,"left":left})
                args["draggable"].draggable("disable");
            }
            else{
                $(args["draggable"]).draggable("option","revert",true);
            }
        }
    });
});