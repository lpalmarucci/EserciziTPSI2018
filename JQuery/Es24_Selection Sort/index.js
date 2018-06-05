"use strict";
const DIM = 15;


$(document).ready(function () {
    var _ul = $("#wrapper");
    for(var i=0;i<DIM;i++){
        var _li = $("<li></li>");
        _li.addClass("mattoni");
        _li.text((Math.floor(Math.random()*100)+1));
        _li.appendTo(_ul);
    }
    var ultimo = DIM;
    findMax();
    function findMax() {
        var pos, max;
        var _wrapper = $("#wrapper");
        pos = 0;
        max = 0;
        for(var i=0;i<ultimo;i++) {
            var _current = _wrapper.children().eq(i);
            if(parseInt(_current.text())>max) {
                max = parseInt(_current.text());
                pos = i;
            }
        }
        if((ultimo-1)==pos){
            var _ultimo = _wrapper.children().eq(ultimo-1);
            _ultimo.addClass("oscilla");
            _ultimo.effect("shake",2000);
            _ultimo.removeClass("oscilla");
            ///_ultimo.removeClass("oscilla");
            _ultimo.addClass("after");
            ultimo--;
            if(ultimo==0)
                alert("finito");
            else
                findMax();
        }
        else{
            var _ultimo = _wrapper.children().eq(ultimo-1);
            _current = _wrapper.children().eq(pos);
            _ultimo.addClass("oscilla");
            _current.addClass("oscilla");
            _ultimo.effect("shake",2000);
            _current.effect("shake",2000,function () {
                ///alert("OK");
                var text;
                text=_ultimo.text();
                _ultimo.text(_current.text());
                _current.text(text);
                _current.removeClass("oscilla");
                _ultimo.removeClass("oscilla");
                _ultimo.addClass("after")
                ultimo--;
                if(ultimo==0)
                    alert("finito");
                else
                    findMax();
            });
        }

    }
});