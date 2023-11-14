create database if not exists BD_Cientifiks_joc;

create table if not exists usuaris(
    idJugador int (30) auto_increment,
    nom varchar (30) not null unique,
    contrasenya varchar(255) not null
);

