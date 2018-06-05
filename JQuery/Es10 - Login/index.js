/**
 * Created by Alessandro Boschero on 06/11/2017.
 */

var utenti = [  {"user":"pippo",  "pwd":"pwdPippo1"},
                {"user":"pluto",  "pwd":"pwdPluto2"},
                {"user":"minnie", "pwd":"pwdMinnie3"} ];

$("document").ready(function () {
    var _1input = $("p > input[type=text]");
    var _2input = $("p > input[type=password]");
    var _3input = $("p > input[type=button]");

    _1input.change(function () {
        verifica(_1input.val());
    });
    _1input.mouseover(function () {
        var contenuto;
        contenuto = {  'border':'1px solid blue',
                    'background-color':'#CCF'
        };
        _1input.css(contenuto);
    });
    _1input.mouseout(function () {
        var contenuto;
        contenuto = {   'border':'1px solid #BBB',
                        'background-color':'white'
        };
        _1input.css(contenuto);
    });

    function verifica(val) {
        var x = 0;
        var t;
        for (var i = 0; i < 3; i++){
            t = utenti[i]["user"];
            if(val == t){
               x = 1;
           }
        }
        if (x == 0)
            nonTrovato(_1input, $("#msgUser"));
        else
            trovato(_1input, $("#msgUser"));
    }

    function trovato(pun1,pun2) {
        $(pun1).css("border","1px solid green");
        $(pun1).fadeIn(2000,function () {
            $(pun2).css("color","green").text("OK");
        });
    }

    function nonTrovato(pun1, pun2) {
        pun1.css("border","1px solid red");
        pun1.fadeIn(2000,function () {
            $(pun2).css("color","red").text("Non valido");
        });
    }


    _2input.change(function () {
        if (_2input.val().length >= 8){
            if (controlla(_2input.val())){
                trovato(_2input, $("#msgPwd"));
            }
            else
                nonTrovato(_2input, $("#msgPwd"));
        }
        else {
            nonTrovato(_2input, $("#msgPwd"));
            alert("Password troppo corta");
        }
            
    });
    _2input.mouseover(function () {
        var contenuto;
        contenuto = {   'border':'1px solid blue',
                        'background-color':'#CCF'
        };
        _2input.css(contenuto);
    });
    _2input.mouseout(function () {
        var contenuto;
        contenuto = {   'border':'1px solid #BBB',
                        'background-color':'white'
        };
        _2input.css(contenuto);
    });

    function controlla(password) {
        var num = false;
        var char = false;
        var l = password.length;
        var ch;
        for (var i = 0; i < l; i++){
            ch = password.charCodeAt(i);
            if (((ch >= 65) && (ch <= 90)) || (ch >= 97) && (ch <= 122)) {
                char = true;
            }
            else if ((ch >= 49) && (ch <= 57)){
                num = true;
            }
        }
        if ((char == true) && (num == true)){
            return true;
        }
        else{
            return false;
        }
    }

    _3input.on("click",function () {
        if (uguaglianza(_1input.val(),_2input.val()))
            alert("Il login verra' effettuato");
        else
            alert("User o password errati");
    });

    function uguaglianza(usr,psw) {
        var u, p;
        var ug = false;
        for (var i = 0; i < 3; i++){
            u = utenti[i]["user"];
            p = utenti[i]["pwd"];
            if ((usr == u) && (psw == p)){
                ug = true;
            }
        }
        if (ug)
            return true;
        else
            return false;
    }
});