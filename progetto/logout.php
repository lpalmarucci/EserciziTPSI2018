<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Stramusyc</title>
    <style>
    </style>

    <!--<script type="application/javascript" src="index.js"></script>-->
</head>
<body>
<?php
/**
 * Created by PhpStorm.
 * User: n.gazzera.9926
 * Date: 20/03/2018
 * Time: 10:33
 */
session_start();
//rimuovo tutte le variabili
session_unset();
//distruggo la sessione
session_destroy();
include "index.php";
?>
</body>
</html>
