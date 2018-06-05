<?php


//espresso in secondi
define("TIMEOUT", 50000);

session_start();
//prima creo la sessione e poi la imposto
setcookie(session_name(), session_id(), 0,"/");


if(!isset($_SESSION["userID"])){
    header("Location:error.php?titolo=non sei loggato&error=devi fare il Login!");
    exit();
}

if(!((isset($_SESSION["ultimoaccesso"]))&&((time()-$_SESSION["ultimoaccesso"])<TIMEOUT))){
    //$ciao=(time()-$_SESSION["ultimoaccesso"]);
    header("Location:error.php?titolo=Sessione scaduta&error=rifare il Login!");
    exit();
}

$_SESSION["ultimoaccesso"]=time();
?>
