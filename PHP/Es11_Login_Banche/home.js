/**
 * Created by e.marchisio.9874 on 24/04/2018.
 */

var cCorrentista=0;

$(document).ready(function ()
{
    var cookies=document.cookie.split(';');
    console.log(cookies);
    for(var i=0;i<cookies.length;i++)
    {
        var cookie=cookies[i].split('=');//[nome][value]
        if(cookie[0] == "cCorrentista")
            cCorrentista=cookie[1];
    }
    if(cCorrentista!=0)
    {
        //posso passare anche un JSON, $.ajax converte in url-encoded
        inviaRichiesta("elencoFiliali.php", "POST", {'cCorrentista':cCorrentista}, visualizzaElencoFIliali);
    }
    function visualizzaElencoFIliali(json)
    {
        if(json.hasOwnProperty("error") && json["error"] == true) {
            alert("SESSIONE SCADUTA");
            window.location.href="home.php";
            //non termina lo script dopo il redirect --> NON E' BLOCCANTE
        }
        else {
            var _wrapper = $("#optFiliali");
            var _ref = _wrapper.children("div").eq(0);
            var _last = _wrapper.find("a").parent();
            for (var i = 0; i < json.length; i++){
                var _opt = _ref.clone();
                // .find() restituisce figli e nipoti
                _opt.find("input").eq(0).val(json[i]["CodiceFiliale"]);
                _opt.find("span").eq(0).html(json[i]["NomeFiliale"]);
                _last.before(_opt);
            }
            _ref.remove();
            _last.on("click",function () {
               var valRadioChecked = $("input:radio[name=optFiliali]:checked").val();
                //alert(valRadioChecked);
                inviaRichiesta(
                    "elencoMovimenti.php",
                    "POST",
                    {"codFiliale":valRadioChecked,"codCorrentista":cCorrentista},
                    visualizzaElencoMovimenti
                );
            });
        }
    }
    function visualizzaElencoMovimenti(json) {
        //alert(json);
        for (var i = 0; i < json.length; i++){
            var current = json[i];
            alert("cMov: " + current["cMov"] +
                  "  cConto: " + current["cConto"] +
                  "  Importo: " + current["Importo"]);
        }
    }
    
    $("#btnLogOut").on("click",function () {
        
    })
});