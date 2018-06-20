<!doctype html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Registrazione</title>
		<link rel="icon" href="img/icoVallauri.png" type="image/png" />
			
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">		
		<script src="../jquery/jquery-3.2.1.min.js"> </script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"> </script>
		
		<script src="registrazione.js"></script>
		<?php
		if($_SERVER["REQUEST_METHOD"]=="POST"){
			if(isset($_POST["user"])&&isset($_POST["password"]) &&isset($_POST["email"])){
				#1 connessione
				mysqli_report(MYSQLI_REPORT_ERROR|MYSQLI_REPORT_STRICT);
				try
				{
					$dbConn = new mysqli("127.0.0.1",'root','','4b_dischi');
					$dbConn -> set_charset('utf8');
				}
				catch (mysqli_sql_exception $exception)
				{
					error("errore connessione DB", $exception->getMessage());
				}
				#2 lettura parametri
				#serve per evitare la sql injection. sostituisce " ' \ con \" \' \\
				$user=$dbConn->real_escape_string($_POST["user"]);
				$mail=$dbConn->real_escape_string($_POST["email"]);
				$password=md5($dbConn->real_escape_string($_POST["password"]));
				#3 query
				$sql="INSERT INTO utenti (usr,pwd,email) VALUES('$user', '$password','$mail') ";
				try{
					mysqli_query($dbConn, $sql);
				}
				catch (mysqli_sql_exception $exception){
					die("Errore esecuzione query <br> $exception");
					$dbConn->close();
				}
			}
		}
		?>
	</head>
	<body>
		<div class="container">
			<form class="form-group" style="padding-top:5%">
				<div class="row">
					<div class="col-sm-4"></div>
					<div class="col-sm-4">
					
						<h1>Registrati:</h1>
						
						</br>
					
						Cognome:
						<div class="input-group" id="txtCognome">
							<span class="input-group-addon"><i class="fa fa-user fa-fw"></i></span>
							<input class="form-control campo" type="text" placeholder="Cognome">
						</div>
						
						Nome:
						<div class="input-group" id="txtNome">
							<span class="input-group-addon"><i class="fa fa-user fa-fw"></i></span>
							<input class="form-control campo" type="text" placeholder="Nome">
						</div>
						
						Indirizzo:
						<div class="input-group" id="txtIndirizzo">
							<span class="input-group-addon"><i class="fa fa-map-marker fa-fw"></i></span>
							<input class="form-control campo" type="text" placeholder="Indirizzo">
						</div>
						
						Telefono:
						<div class="input-group" id="txtTelefono">
							<span class="input-group-addon"><i class="fa fa-phone fa-fw"></i></span>
							<input class="form-control campo" type="text" placeholder="Telefono">
						</div>
						
						Mail:
						<div class="input-group" id="txtMail">
							<span class="input-group-addon"><i class="fa fa-envelope fa-fw"></i></span>
							<input class="form-control campo" type="text" placeholder="Mail" name="email">
						</div>
						
						Iban:
						<div class="input-group" id="txtIban">
							<span class="input-group-addon"><i class="fa fa-id-card fa-fw"></i></span>
							<input class="form-control campo" type="text" placeholder="Iban">
						</div>
						
						Username:
						<div class="input-group"  id="txtUsername">
							<span class="input-group-addon"><i class="fa fa-user-circle-o fa-fw"></i></span>
							<input class="form-control campo" type="text" placeholder="Username" name="user">
						</div>
						
						Password:
						<div class="input-group" id="txtPassword">
							<span class="input-group-addon"><i class="fa fa-key fa-fw"></i></span>
							<input class="form-control campo" type="password" placeholder="Password" name="password">
						</div>
						
						Conferma password:
						<div class="input-group" id="txtConfermaPassword">
							<span class="input-group-addon"><i class="fa fa-key fa-fw"></i> </span>
							<input class="form-control" type="password" placeholder="Password">
						</div>
						
						</br>
						
					</div>
				</div>
				<div class="row">
					<div class="col-sm-4"></div>
					<div class="col-sm-4"><button id="btnInvia" class="btn btn-lg btn-primary btn-block" type="button">Registrati</button></div>
					<div class="col-sm-4"></div>
				</div>
			</form>
		</div>
	</body>
</html>