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

function insertRanking($id, $id_Usuari, $puntuacio, $id_Pais){
    $conexion = openBd();

    $sentenciaText = "insert into ranking (id, id_Usuari, puntuacio, id_Pais) values (:id, :id_Usuari, :puntuacio, :id_Pais)";

    $sentencia = $conexion->prepare($sentenciaText);
    $sentencia->bindParam(':id', $id);
    $sentencia->bindParam(':id_Usuari', $id_Usuari);
    $sentencia->bindParam(':puntuacio', $puntuacio);
    $sentencia->bindParam(':id_Pais', $id_Pais);

    $sentencia->execute();

    $conexion=closeBd();
}

function selectRanking(){
    $conexion = openBd();

    $sentenciaText = "select * form ranking";

    $sentencia = $conexion->prepare($sentenciaText);
    $sentencia->execute();

    $resultado = $sentenciaText->fetchAll();

    $conexion=closeBd();

    return $resultado;
}

?>