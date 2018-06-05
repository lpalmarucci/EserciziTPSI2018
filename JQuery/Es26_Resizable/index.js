"use strict";
$(document).ready(function () {
    var _abilita=$("#btnAbilita");
    var _disabilita=$("#btnDisabilita");
    var _box=$("#box");

    _abilita.removeClass("ui-state-default")
    _abilita.addClass("ui-state-disabled")
    _abilita.off("click");
    _box.resizable({
                    /*PROPRIETA'*/
                    "aspectRatio":"true",
                    "maxWidth":200,
                    "maxHeight":200,
                    "minWidth":152,
                    "minHeight":152,
                    "animate":true,
                    //"ghost":true,
                    /*EVENTI*/
                    "start":function (events,args) {
                        console.log("Sono partito");
                        //console.log(events);
                        //console.log(args);
                    },
                    "stop":function (events,args) {
                        console.log("Ho finito");
                    },
                    "resize":function (events,args) {
                        var _p=_box.children("p");
                        _p.text(+args.size.width +
                            " - "+args.size.height);
                    }});

    _disabilita.on("click",disabilita)
    function disabilita() {
        _abilita.addClass("ui-state-default");
        _abilita.removeClass("ui-state-disabled");
        _abilita.on("click",abilita);

        _disabilita.removeClass("ui-state-default");
        _disabilita.addClass("ui-state-disabled");
        _disabilita.off("click");
        _box.resizable("disable")
    }
    function abilita() {
        _disabilita.addClass("ui-state-default");
        _disabilita.removeClass("ui-state-disabled");
        _disabilita.on("click",disabilita);

        _abilita.removeClass("ui-state-default");
        _abilita.addClass("ui-state-disabled");
        _abilita.off("click");
        _box.resizable("enable");
    }
});