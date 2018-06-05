<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h2> Elenco delle variabili PHP</h2>
<h3>Elenco delle variabili server</h3>
<?php
foreach ($_SERVER as $item => $valore)
    echo ("$item : $valore <br>");

echo "<br><br><br><h3>Elenco Variabili dell'applicazione</h3>";
foreach ($GLOBALS as $item => $value){
    print_r($item);
    echo "<br>";
}
echo "<br><br>";
echo phpinfo();
?>
</body>
</html>