/**
 * Created by a.boschero.0184 on 17/10/2017.
 */

// .ready = .onload
$(document).ready(function () {
    var _lampadina = $('#lampadina');
    var _btnSpegni =  $('#btnSpegni');
    var _btnAccendi = $('#btnAccendi');
    
    _btnAccendi.click(function () {
        _lampadina.fadeIn(2000,function () { //la callback parte finito il tempo
            _lampadina.css("background-color", "#ffa");
            _btnSpegni.show();
            _btnAccendi.hide();
        });
    });
    _lampadina.hide();
    _btnSpegni.hide();
    _btnSpegni.on('click',spegni);
    
    function spegni() {
        _lampadina.fadeOut(2000, function () {
            _lampadina.css("background-color", "#CCC");
            _btnAccendi.show();
            _btnSpegni.hide();
        });
    }
    
    var _contenuto = $('#contenuto');
    _contenuto.hide();

    var contenutoStyle = {
        'width':'600px',
        'border':'1px solid black',
        'margin-left':'140px',
        'margin-top':'10px',
        'padding':'5px'
    };
    _contenuto.css(contenutoStyle);
    
    var _descrizione = $('#descrizione');
    _descrizione.css({
       'width':'160px',
       'height':'40px',
       'text-align':'center', // or textAlign
       'line-height':'40px',  // or lineHeight
       'border-radius':'10px',
       'font-size':'10pt',
       'margin-left':'100px',
       'text-decoration':'underline',
       'background-color':'#AAA'
    });
    _descrizione.mouseover(function () {
        _contenuto.show(600);
    });

    _descrizione.mouseout(function () {
        _contenuto.hide(600);
    })
});