
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Log Out</title>
    <?php
    session_start();//se voglio fare una qualunque cosa sulla session, devo fare session_start();
    session_unset();//rimuove tutte le variabili associate alla sessione
    session_destroy();//rimuove l'oggetto session
    ?>
    <style>
        body{
            background-color: #454545;
        }
    </style>
</head>
<body>
    <h1 style="text-align: center">Log out avvenuto con successo</h1>
</body>
</html>