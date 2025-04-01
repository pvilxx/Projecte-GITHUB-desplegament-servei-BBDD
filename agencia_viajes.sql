CREATE DATABASE IF NOT EXISTS agencia_viajes;
USE agencia_viajes;

CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    direccion TEXT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE destinos (
    id_destino INT PRIMARY KEY AUTO_INCREMENT,
    ciudad VARCHAR(100) NOT NULL,
    pais VARCHAR(100) NOT NULL,
    descripcion TEXT,
    clima VARCHAR(50),
    temporada_alta ENUM('Primavera', 'Verano', 'Otoño', 'Invierno')
);

