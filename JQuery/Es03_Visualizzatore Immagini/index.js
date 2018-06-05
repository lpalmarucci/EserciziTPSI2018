/**
 * Created by a.boschero.0184 on 19/10/2017.
 */

$(document).ready(function () {
    var _btnAvanti = $("#btnAvanti");
    var _btnIndietro = $("#btnIndietro");
    var _img = $("#img");
    var pathImg = "img/img";
    var type = ".jpg";
    var i = 1;
    _img.prop("src",pathImg + i + type);

    _btnIndietro.on("click",function () {
        if (i == 1)
            alert("Sei già sulla prima foto");
        else
        {
            i--;
            _img.prop("src",pathImg + i + type);
        }
    });

    _btnAvanti.on("click",function () {
        if (i == 8)
            alert("Sei già sull'ultima foto");
        else
        {
            i++;
            _img.prop("src",pathImg + i + type);
        }
    });
});