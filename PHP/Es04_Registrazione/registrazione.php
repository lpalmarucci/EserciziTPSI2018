<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
    foreach ($_GET as $item => $value) {
        if($item =="chkHobbies" || $item == "lstScoperta"){
            echo "<br> $item ->";
            print_r(implode(', ',$value ));
        }
        else{
            echo "<br> $item ->";
            print_r($value);
        }
    }
    /*$hobbies = implode(' ',$_GET["chkHobbies"]);
    $scoperta = implode(' ',$_GET["lstScoperta"]);
    echo "Nome: ". $_GET["txtNome"] .
        "<br>Indirizzo di studio: " . $_GET["rdbIndirizzo"] .
        "<br>Hobbies: " . $hobbies .
        "<br>Città di residenza: " . $_GET["lstCitta"] .
        "<br>Segni particolari: " . $_GET["txtSegni"] .
        "<br>Come hai scoperto la scuola: " . $scoperta;*/
?>
</body>
</html>