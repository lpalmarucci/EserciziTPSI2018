var _listaBanche;
var _listaFiliali;
var wrapBanche;
var wrapCorrentisti;
var wrapFiliali;
var tabCorrentisti;
$(document).ready(function () {
    wrapBanche=$("#wrapBanche");
    wrapCorrentisti=$("#wrapCorrentisti");
    wrapFiliali=$("#wrapFiliali");
    _listaBanche=$("#lstBanche");
    _listaFiliali=$("#lstFiliali");
    tabCorrentisti=$("#tabCorrentisti");
    inviaRichiesta("elencoBanche.php","GET","",aggiornaBanche)
    
    function aggiornaBanche(responseText) {
        //console.log(responseText);
        var json = JSON.parse(responseText);
        for(var i=0;i<json.length;i++){
            var current=json[i];
            var option=$("<option></option>");
            option.val(current["cBanca"]);
            option.text(current["Nome"]);
            _listaBanche.append(option)
        }
        _listaBanche.prop("selectedIndex",-1);
    }

    _listaBanche.on("change",function () {
        wrapCorrentisti.css("display","none");
        wrapFiliali.css("display","block");
        var codBanca=parseInt($(this).val());
        console.log(codBanca);
        inviaRichiesta("elencoFiliali.php","POST","codBanca="+codBanca,aggiornaFiliali);
    })
    function aggiornaFiliali(responseText) {
        _listaFiliali.html("");
        //console.log(responseText);
        var json = JSON.parse(responseText);
        for(var i=0;i<json.length;i++){
            var current=json[i];
            var option=$("<option></option>");
            option.val(current["cFiliale"]);
            option.text(current["Nome"]);
            _listaFiliali.append(option)
        }
        _listaFiliali.prop("selectedIndex",-1);
    }
    
    _listaFiliali.on("change",function () {
        wrapCorrentisti.css("display","block");
        var codFiliale=parseInt($(this).val());
        inviaRichiesta("elencoCorrentisti.php","POST","codFiliale="+codFiliale,aggiornaCorrentisti);
    })
    function aggiornaCorrentisti(responseText) {
        //console.log(responseText);
        var json = JSON.parse(responseText);
        tabCorrentisti.children("tbody").empty();
        for(var i=0;i<json.length;i++){
            var tr=$("<tr></tr>");
            var record=json[i];
            for(var key in record){
                //KEY --> mi da solo il nome della chiave non il valore
                var td=$("<td></td>");
                td.text(record[key]);
                tr.append(td);
            }
            tabCorrentisti.children("tbody").append(tr);
        }
    }
})