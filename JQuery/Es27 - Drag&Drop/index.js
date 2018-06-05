/**
 * Created by a.boschero.0184 on 07/12/2017.
 */

$(document).ready(function () {
    var _box = $("#box");
    var _bersagli = $(".bersaglio");
    var _btn = $("#btnAvvia");

    _box.draggable({
        stack:_bersagli,
        //stack:".bersaglio"
        cursor:"pointer",
        start:function () {
            $(this).draggable("option","revert","invalid");
        }
    });

    _bersagli.droppable({
        drop:function (event,args) {
            //if (_bersagli.index($(this)) == 2)
            if (_bersagli.index($(event.target)) == 2) {
                //_box.draggable("disable");
                args.draggable.draggable("disable");
                $(this).children("p").css("background-color","green").text("Corretto");
                _box.css("visibility","hidden");
            }
            else {
                $(event.target).children("p").css("background-color","red").text("Errato");
                args.draggable.draggable("option","revert",true);
            }
        }
    });

    _btn.on("click",function () {
       window.location.reload();
    });
});