$(document).ready(function () {
   /* var video = inviaRichiesta("assets/ajax/richiediVideo.php", "POST", {
    });

    video.fail(function (jqXHR, test_status) {
        alert("Error: " + jqXHR.status + " - " + jqXHR.responseText);
    });

    video.done(function (data) {
        var divVideo =$("#video");

        //var descrizione = $("<p></p><br>");
        //descrizione.text(data['data'][0]["titolo"]+" "+data['data'][0]["autore"]);
        //divVideo.append(descrizione);
        var iframe = $("<iframe style=\"float:left;\" width=\"500\"; height=\"290\"; ></iframe>");
        iframe.prop("src",data['data'][0]["video"]);
        divVideo.append(iframe);

        //testo
        var divtesto1=$("#testo");
        divVideo.append(divtesto1);
        var titoloVideo=$("<h4></h4>");
        titoloVideo.text(data['data'][0]["titolo"]);
        divtesto1.append(titoloVideo);
        var divTesto2=$("<div style=\"width: 490px; overflow: auto; height: 237px; padding:0 30px; margin-bottom:30px; \"></div>");
        divtesto1.append(divTesto2);
        var pTesto=$("<p style=\"font-size: 10pt;\">"+data['data'][1]["testo"]+"</p>");
        divTesto2.append(pTesto);


        /* <?php
                    //echo "$autore - $titolo<br>";
                    echo'<iframe style="float:left;" width="500"; height="290"; src="';
                    echo 'https://www.youtube.com/embed/'.$idyt.'?autoplay=1"></iframe></div>';

                    //testo

                    echo '<div style="margin: 10px; margin-top:170px;">';//1
                    echo '<h4>$titolo</h4>';
                    echo'<div style="width: 490px; overflow: auto; height: 237px; padding:0 30px; margin-bottom:30px; ">';//2

                    echo'<p style="font-size: 10pt;">$testo</p>
                    </div>';//1
                ?>
    })*/



    $(".link").on("click",function () {
        $(this).children("input").prop("name","id");
        $("form").prop("method","get");
        $("form").prop("action","generic.php");
        $("form").submit();
        });


    $("#btnRicerca").on("click", function () {
        var ok = true;
        if($("#txtRicerca").val()===""){
            ok = false;
            alert("Valore mancante");
        }
        var ricerca=$("#txtRicerca").val();
        var genere=$("#genere").prop("value");

        if(ok) {
            var form = $("#ricerca");
            form.prop("method", "post");
            form.prop("action", "ricerca.php?txtRicerca=" + ricerca + "&txtGenere=" + genere);
            form.submit();
        }
    });


    //caricamento section 2
    $(".genere").each(function () {
        var wee=$(this);
        var genere = inviaRichiesta("assets/ajax/richiediGenere.php", "POST", {
            "genere" : $(this).prop("id")
        });

        genere.fail(function (jqXHR, test_status) {
            alert("Error: " + jqXHR.status + " - " + jqXHR.responseText);
        });

        genere.done(function (data) {
            for (var i = 0; i < 6; i++) {
                var div1 =  $("<div align=\"center\" class=\"video col\" style=\"overflow: hidden; background-size: cover;\"></div>");
                wee.append(div1);

               var div2 = $("<div class=\"image\" style=\"overflow: hidden; background-size: cover;\"></div>");
                var div3 = $("<div class='arrow'></div>");
                var div4 = $("<div class='icon fa-play'></div>");
                var div5=$("<div class='link' value='ciao' name='registrazione'></div>");

                div5.prop("id", data['data'][i]["ID"]);
                div5.prop("value", data['data'][i]["ID"]);
                var img= $("<img src='' width=\"250px\" alt=''/>");
                var input=$("<input type=\"hidden\" >");
                input.prop("value", data['data'][i]["ID"]);
                img.prop("src", "http://i.ytimg.com/vi/"+data['data'][i]["IDYT"]+"/maxresdefault.jpg");
                var titolo=$("<h5></h5>");
                var autore=$("<h6>autore</h6>");
                div5.append(input);
                div5.click(generic);
                div1.append(div2);
                div2.append(img);
                div2.append(div3);
                div3.append(div4);
                div1.append(div5);
                titolo.text(data['data'][i]["titolo"]);
                autore.text(data['data'][i]["autore"]);
                div1.append(titolo);
                div1.append(autore);
            }
        })

    })
});

//form video singolo
function generic() {
    $(this).children("input").prop("name","id");

    $("form").prop("method","get");
    $("form").prop("action","generic.php");
    $("form").submit();
}

function inviaRichiesta(url, method, parameters) {
    var request = $.ajax({
        url: url, //default: currentPage
        type: method.toUpperCase(),
        data: parameters,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        async: true, // default
        timeout: 5000
    });
    return request;
}
