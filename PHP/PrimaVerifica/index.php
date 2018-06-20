<!DOCTYPE html>
<html>
<head> 
    <meta charset="UTF-8"> 
	<script type="application/javascript" src="../jquery/jquery-3.2.1.js"></script>
    <link rel="stylesheet" href="../jquery-ui-1.12.1/jquery-ui.css">
	<script type="application/javascript" src="index.js"> </script>
	<style>
	#txtRicerca {
		font-size:16pt;
	    width:500px; 
		height:30px;
		border: 2px solid black;
	}
	table{
		width:520px; 
		margin:0 auto;
	}
	table th:nth-of-type(1), table td:nth-of-type(1) {
	    width:10%;
		text-align:center;
	    background-color:#AFA;		
	}
	table th:nth-of-type(2), table td:nth-of-type(2){
	    width:30%;
		text-align:center;
		background-color:#EEE;
	}
	table th:nth-of-type(3), table td:nth-of-type(3){
	    width:22%;
		text-align:center;
		background-color:#AFA;
	}
	table th:nth-of-type(4),table td:nth-of-type(4){
	    width:10%;
		text-align:center;
		background-color:#EEE;
	}
	table th:nth-of-type(5), table td:nth-of-type(5){
	    width:28%;
		text-align:center;
		background-color:#AFA;
	}
	
	table input[type=text]{
		width:40px;
	}
	</style>
</head>

<body>
	<br><br><br><br> 
	<h1 style="text-align:center"> Borsa Italiana </h1>
	<form style="margin:0 auto; width:600px" method="get" action="index.php">
		<input type="text" id="txtRicerca" name="ricerca"/>
		<input type="submit" id="btnCerca" value="cerca" class="ui-button" style="height: 30px"/>
	</form> 
	<br>
	
		<table border=1 align='center'>
		<thead>
			<tr>
				<th>id</th>
				<th>titolo</th>
				<th>ultimoContratto</th>
				<th>Cerca</th>
				<th>Acquista</th>
			</tr>
		</thead>
		<tbody>
            <?php
            mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
            try{
                $con = new mysqli('localhost', 'root', '', '4b_Borsa');
                $con->set_charset("utf8");
            }
            catch (mysqli_sql_exception $ex) {
                die ("Errore connessione db: <br>" . $ex->getMessage());
            }
            if(!isset($_GET['ricerca'])){
                try{
                    $sql="SELECT * FROM titoli";
                    $rs=$con->query($sql);
                }
                catch (mysqli_sql_exception $exception){
                    die("Errore query: $exception");
                }
                echo "<form method='post'>";
                //$i=0;
                while ($riga = mysqli_fetch_assoc($rs)){
                    #stampo dentro la tabella
                    $titolo=$riga['titolo'];
                    $id=$riga['id'];
                    $ultimoContratto=$riga['ultimoContratto'];
                    //lente.jpg
                    $idRiga="ID".$id;
                    echo "<tr id='$idRiga'>";
                    echo "<td>$id</td>";
                    echo "<td>$titolo</td>";
                    echo "<td>$ultimoContratto</td>";
                    //echo "<td><a href='dettagli.php' ><img src='lente.jpg' width='25px' id='img'></a></td>";
                    echo "<td><div><img src='lente.jpg' width='25px'></div></td>";
                    echo "<td><input type='text' width='20px'><input type='submit' value='acquista'  class='acquista'> </td>";
                    echo "</tr>";
                }

            }
            else{
                if($_GET['ricerca']===""){
                header("Location:index.php");
                }
                else{
                    $ricerca=$_GET['ricerca'];
                    try{
                        $sql="SELECT * FROM titoli WHERE titolo LIKE '%$ricerca%'";
                        $rs=mysqli_query($con, $sql);
                    }
                    catch (mysqli_sql_exception $exception){
                        die("Errore query: $exception");
                    }
                    $numRighe=mysqli_num_rows($rs);
                    $i=0;
                    echo "<form method='post'>";
                    while ($riga = mysqli_fetch_assoc($rs)){
                        #stampo dentro la tabella
                        $titolo=$riga['titolo'];
                        $id=$riga['id'];
                        $ultimoContratto=$riga['ultimoContratto'];
                        $idRiga="ID$id";
                        //lente.jpg
                        echo "<tr id='$idRiga'>";
                        echo "<td>$id</td>";
                        echo "<td>$titolo</td>";
                        echo "<td>$ultimoContratto</td>";
                        //echo "<td><a href='dettagli.php' ><img src='lente.jpg' width='25px' id='img'></a></td>";
                        echo "<td><div><img src='lente.jpg' width='25px'></div></td>";
                        echo "<td><input type='text' width='20px'><input type='submit' value='acquista' class='acquista'> </td>";
                        echo "</tr>";
                        $i++;
                    }
                    echo "</form>";
                }

            }

            $con->close();
            ?>
		</tbody>
		</table>	
</body>
</html>