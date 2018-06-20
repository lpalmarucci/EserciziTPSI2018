<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login</title>
</head>
<body>
<?php
    if(isset($_FILES["txtFile"])) {
        $fileRicevuti = $_FILES["txtFile"]; //il nome del parametro va scritto senza quadre
        for($i=0;$i<count($fileRicevuti["name"]);$i++)
        {
            $fileName = basename($fileRicevuti["name"][$i]); //nome del file
            $size = $fileRicevuti["size"][$i];
            $MIMEtype = $fileRicevuti["type"][$i];
            $ext = pathinfo($fileName, PATHINFO_EXTENSION);

            if ($size > 1000000)
                die("File troppo grande");

            $targetFile = "upload/$fileName";
            if (move_uploaded_file($fileRicevuti["tmp_name"][$i], $targetFile)) {
                echo("<h1 align='center'>File caricato</h1>");
                echo("<br>");
                echo("<h2 align='center'>Size:$size byte</h2>");
                echo("<br>");
                echo("<h2 align='center'>MIME type:$MIMEtype</h2>");
                echo("<br>");
                echo("<h2 align='center'>Estensione:$ext</h2>");
            } else
                echo("<h1 align='center'>Errori nel caricamento</h1>");
        }
    }
    else {
        echo("<h1 align='center'>Parametri non corretti</h1>");
    }
?>
</body>