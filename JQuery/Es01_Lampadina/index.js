/**
 * Created by l.palmarucci.0117 on 12/10/2017.
 */
$(document).ready(function () {
   $('#btnAccendi').on('click',function () {
       $('.lampadina').addClass('accesa');
   });
    $('#btnSpegni').on('click',spegni);
    function spegni() {
        $('.lampadina').removeClass('accesa');
    };
    var _descrizione = $('#descrizione');
    var _contenuto = $('#contenuto');
    var contenutoStyle={
        "width":"600px",
        "margin-left":"140px",
        "border":"1px solid black",
        "margin-top":"10px",
        "padding":"5px"
    };
    _contenuto.css(contenutoStyle)
    _contenuto.hide();
    _descrizione.css({
        width:'160px',
        'height':'40px',
        textAlign:'center',
        lineHeight:'40px',
        borderRadius:'10px',
        'font-size':'10pt',
        marginLeft:'100px',
        textDecoration:'underline',
        'background-color':'#AAA'
    });
    _descrizione.mouseover(function () {
        _contenuto.show(600);
    })
    _descrizione.mouseout(function () {
        _contenuto.hide(600);
    })

});