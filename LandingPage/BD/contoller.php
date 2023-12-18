<?php

session_start();

require_once('../BD/basedades.php');

echo $a=  $_POST['id_User'];
echo $b=  $_POST['puntuacio'];
echo $c=   $_POST['id_Pais'];

//insertRanking($_POST['id_User'], $_POST['puntuacio'], $_POST['id_Pais']);

insertRanking($a, $b, $c);


?>