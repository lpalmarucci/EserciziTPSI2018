<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
  <div id="output">
      <?php
        echo "<span>Nome dell'utente: ".$_GET['txtNome']."</span><br>";
        echo "<span>Indirizzo di studio: ".$_GET['rdbIndirizzo']."</span><br>";
        $hobbies=$_GET['chkHobbies'];
        $aus=count($hobbies);
        echo "<span>Hobbies: ";
        foreach($hobbies as $item){
            echo "$item - ";
        }
        echo "</span><br>";
        $citta=['Fossano','Cuneo','Torino','Alba'];
        $indiceCitta=$_GET['lstCitta'];
        echo "<span>Città di provenienza: ".$citta[$indiceCitta-1]."</span><br>";
        echo "<span>Segni particolari: ";
        $txtSegni=$_GET['txtSegni'];
        echo $txtSegni;
        echo "</span><br>";

        #come ci ha scoperti
//        $scoperta=['Giornali','Amici','Web','Altro'];
//        $indiceScoperta=$_GET['lstScoperta'];
//        echo "<span>come ci ha scoperti?: ".$scoperta[$indiceScoperta-1]."</span><br>";
      ?>
  </div>
</body>
</html>
