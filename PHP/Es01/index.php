<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1> Esercizio uno</h1>
<?php
$nome="pippo";
echo "il mio nome &egrave: $nome <br>";
stampaNome1("Matteo16");
stampaNome2();

function stampaNome1($name){
    echo "Il mio nome &egrave: $name <br>";
}
function stampaNome2(){
    global $nome;
    echo "Il mio nome &egrave: $nome <br>";
}
?>
</body>
</html>