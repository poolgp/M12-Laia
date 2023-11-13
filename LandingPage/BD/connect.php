<?php

function openBd()
{
    $servername = "localhost";
    $username = "root";
    $password = "mysql";

    $conexion = new PDO("mysql:host=$servername;dbname=BD_Cientifiks_joc", $username, $password);

    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $conexion->exec("set names utf8");

    return $conexion;
}

function closeBd()
{
    return null;
}

?>