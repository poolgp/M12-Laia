<?php

require_once('../BD/php_librarys/bd.php');

$estadisticasIndia = selectRanking();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estadísticas India</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>

    <link rel="stylesheet" href="estadisticasIndia.css">
</head>

<body>
    <h1 class="text-center" style="margin: 20px;">Estadísticas India</h1>
    <div class="container">
        <div class="card mt-2">
            <div class="card-header">
                <h4 class="mb-0">INDIA</h4>
            </div>
            <div class="card-body">
                <table class="table table-striped">
                    <tr>
                        <th>id_Usuari</th>
                        <th>puntuacio</th>
                        <th>id_Pais</th>
                    </tr>

                    <?php foreach ($estadisticasIndia as $statsIndia){ ?>
                        <tr>
                            <td><?php echo $statsIndia['id_Usuari']; ?></td>
                            <td><?php echo $statsIndia['puntuacio']; ?></td>
                            <td><?php echo $statsIndia['id_Pais']; ?></td>
                        </tr>
                    <?php } ?>

                </table>
            </div>
        </div>
        <button type="button" class="btn">
            <a href="../Estadisticas/Estadisticas.html" class="text-white"
                style="text-decoration: none;">Estadísticas</a>
        </button>
    </div>
</body>

</html>