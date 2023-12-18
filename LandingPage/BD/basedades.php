<?php

function openBd()
{
    $servername = "localhost";
    $username = "root";
    $password = "mysql";

    $conexion = new PDO("mysql:host=$servername;dbname=laiadb", $username, $password);

    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $conexion->exec("set names utf8");

    return $conexion;
}

function closeBd()
{
    return null;
}

function insertRanking($id_User, $puntuacio, $id_Pais)
{

    $conexion = openBD();

    $sentenciaText = "insert into ranking (id_Usuari,puntuacio,id_Pais) values (:id_User, :puntuacio, :id_Pais)";

    $sentencia = $conexion->prepare($sentenciaText);
    $sentencia->bindParam(':id_User', $id_User);
    $sentencia->bindParam(':puntuacio', $puntuacio);
    $sentencia->bindParam(':id_Pais', $id_Pais);
    $sentencia->execute();

    $conexion = closeBD();
}