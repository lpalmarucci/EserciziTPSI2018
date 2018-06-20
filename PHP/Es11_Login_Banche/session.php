<?php
    //costante per il timeout di validità della sessione
    define("TIMEOUT", 30);

    //session_set_cookie_params(time()+3600, "/", "localhost", false, true);
    //devo controllare la sessione
    session_start();
    setcookie(session_name(), session_id(), time()+3600, "/");
    if(!isset($_SESSION["userId"]))
    {
        header("Location:error.php?titolo=non sei loggato!&error=devi fare il login!");
        exit();
    }
    if(!(isset($_SESSION["ultimoAccesso"]) && ((time() - $_SESSION["ultimoAccesso"]) < TIMEOUT))) {
        header("Location:error.php?titolo=sessione scaduta!&error=rifare il login!");
        exit();
    }
    //devo aggiornare l'ultimo accesso, in modo da avere 30 secondi in più
    $_SESSION["ultimoAccesso"]=time();
?>