
$(document).ready(function () {
    var _wrapper = $("#wrapper");{}
    var max = 0;
    var posMax;
    var lastCell = 14;
    var cellUp;
    var cellDown;
    //var time = 3000;
    var time = 400;
    var aus;

    crea();

    function crea() {
        for (var i = 0; i < 15; i++){
            var _li = $("<li></li>");
            _li.addClass("mattoni");
            _li.text(Math.floor(100*Math.random())+1);
            _li.prop("id","ID"+i);
            _wrapper.append(_li);
        }
        cercaMax();
    }

    function cercaMax() {
        for (var i = 0; i < (lastCell+1); i++){
            if (parseInt($("#ID"+i).text()) > max){
                max = parseInt($("#ID"+i).text());
                posMax = i;
            }
        }
        change();
    }

    function change() {
        cellUp = _wrapper.children("li").eq(posMax);
        cellUp.addClass("oscilla");
        cellDown = _wrapper.children("li").eq(lastCell);
        cellDown.addClass("oscilla");



        if (lastCell == posMax){
            cellDown.effect("shake",{},time);
            cellDown.removeClass("oscilla",time,function () {
                cellDown.css("background-color","#050");
                diminuisci();
            });
        }
        else{
            aus = cellUp.text();
            cellUp.addClass("oscilla",time,function () {
                cellUp.effect("shake",{},time);
                cellUp.removeClass("oscilla",time,function () {
                    cellUp.text(cellDown.text());
                });
            });
            cellDown.addClass("oscilla",time,function () {
                cellDown.effect("shake",{},time);
                cellDown.removeClass("oscilla",time,function () {
                    cellDown.text(aus);
                    cellDown.css("background-color","#050");
                    diminuisci();
                });
            });
        }
    }

    function diminuisci() {
        if (lastCell != 1) {
            lastCell--;
            max = 0;
            cercaMax();
        }
        else {
            $("#ID0").css("background-color","#050");
            alert("TERMINATO");

        }
    }
});