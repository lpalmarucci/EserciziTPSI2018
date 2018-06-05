"use strict";
var dim=10;
$(document).ready(function () {
    var _wrapper=$("#wrapper");
    for(var i=0;i<dim;i++)
    {
        for(var j=0;j<dim;j++)
        {
            var _cella=$("<div class='pulsante rosso'></div>");
            _cella.prop("i",i);
            _cella.prop("j",j);
            _cella.text(i+","+j)
            _cella.prop("id","ID"+i.toString()+"-"+j.toString());
            _cella.on("click",function () {
                var text=$(this).text();
                var color;
                var bcolor;
                var somma;
                var aus=text.split(',');
                if(text .indexOf(',')!=-1)
                {
                    somma=parseInt(aus[0])+parseInt(aus[1]);
                    $(this).text(somma);
                    /*color=$(this).css("color");
                    bcolor=$(this).css("background-color");
                    $(this).css({"color":bcolor,
                        "background-color":color})*/
                    $(this).removeClass("rosso");
                    $(this).addClass("grigio");
                }
                else{
                    var testo=$(this).prop("id").substr(2);
                    var vet=testo.split('-')
                    $(this).text(vet[0]+","+vet[1]);
                    $(this).removeClass("grigio");
                    $(this).addClass("rosso");

                    /*MIO MODO. UTILIZZO LA PROPRIETA' i E j*/

                    /*var i=$(this).prop("i")
                    var j=$(this).prop("j");
                    $(this).text(i+","+j);
                    $(this).removeClass("grigio");
                    $(this).addClass("rosso");*/
                }

            })
            _wrapper.append(_cella);

        }
    }
});
function inverti() {
    
}
function nascondi() {
    
}
function somma() {
    
}
function stampa() {
    
}