<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>verifica Palma</title>
    <script src="../jquery/jquery-3.2.1.min.js"></script>
    <script src="index.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"> </script>
    <script src="libreria.js"></script>
</head>
<body>
    <div class="form-group alert alert-info" id="wrapBanche">
        <div class="row">
            <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <label for="lstBanche">Scegli una automobile:</label>
                    <select class="form-control" id="lstAutomobili"></select>
                </div>
            <div class="col-sm-3"></div>
        </div>
    </div>

    <table class="table table-responsive">
        <thead>
            <tr>
                <th>idAuto</th>
                <th>nome modello</th>
                <th>nPorte</th>
                <th>cilindrata</th>
                <th>targa</th>
                <th>colore</th>
                <th>anno</th>
                <th>prezzo</th>
                <th>km</th>
                <th>img</th>
                <th>acquista</th>
            </tr>
        </thead>

        <tbody></tbody>
    </table>
</body>
</html>