CREATE DATABASE  IF NOT EXISTS `laiadb`;
USE `laiadb`;

DROP TABLE IF EXISTS `ranking`;
CREATE TABLE `ranking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_Usuari` int NOT NULL,
  `puntuacio` int NOT NULL,
  `id_Pais` int NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id_User` int NOT NULL AUTO_INCREMENT,
  `nomCompleto` varchar(100) DEFAULT NULL,
  `nomUser` varchar(100) NOT NULL,
  `contraseña` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_User`),
  UNIQUE KEY `id_User_UNIQUE` (`id_User`)
);

DROP TABLE IF EXISTS `paises`;
CREATE TABLE `paises` (
	`id_Pais` int NOT NULL unique,
    `nombrePais` VARCHAR(50),
    PRIMARY KEY (`id_Pais`)
);