<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <h1 style="text-align: center">Benvenuto nel sito</h1>
    <div style="margin: 0 auto;width: 500px;">
        <?php
        $max=-1;
        $itemMax;
        $ok=true;
        if(!(isset($_GET['numero1']) && $_GET['numero1']!="" && is_numeric($_GET['numero1']))){
            $ok=false;
        }
        else if(!(isset($_GET['numero2']) && $_GET['numero2']!="" && is_numeric($_GET['numero3']))){
            $ok=false;
        }
        else if(!(isset($_GET['numero3']) && $_GET['numero3']!="" && is_numeric($_GET['numero3']))){
            $ok=false;
        }
        if($ok){
            foreach ($_GET as $item => $value){
                if($max<$value){
                    $max=$value;
                    $itemMax=$item;
                }
            }
            echo "Il numero massimo è <strong>$itemMax</strong><br>Il suo valore è <strong>$max</strong><br>";
        }
        else{
            echo "<h4><strong>Errore nella richiesta al server!Controllare la compilazione dei dati!</strong></h4>";
        }
        echo "<input type='button' onclick='window.location.href=\"index.html\"' value='Indietro''>";
        ?>
    </div>
</body>
</html>