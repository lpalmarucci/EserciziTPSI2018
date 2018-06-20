<?php
$json=array();
$json["ris"]="ok";
if(isset($_FILES["txtFile"])) {
    $fileRicevuti = $_FILES["txtFile"]; //il nome del parametro va scritto senza quadre
    for($i=0;$i<count($fileRicevuti["name"]);$i++)
    {
        $fileName = basename($fileRicevuti["name"][$i]); //nome del file
        $size = $fileRicevuti["size"][$i];
        $MIMEtype = $fileRicevuti["type"][$i];
        $ext = pathinfo($fileName, PATHINFO_EXTENSION);
        if ($size > 1000000)
            $json["ris"]="file troppo grande";
        else {
            $targetFile = "upload/$fileName";
            if (!move_uploaded_file($fileRicevuti["tmp_name"][$i], $targetFile)) {
                $json["ris"] = "caricamento fallito";
            }
        }
    }
}
else {
    $json["ris"]="variabile txtFile non settata";
}

echo(json_encode($json));
?>