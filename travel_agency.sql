-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS agencia_viajes;
USE agencia_viajes;

-- Tabla de Clientes
CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    direccion TEXT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Destinos
CREATE TABLE destinos (
    id_destino INT PRIMARY KEY AUTO_INCREMENT,
    ciudad VARCHAR(100) NOT NULL,
    pais VARCHAR(100) NOT NULL,
    descripcion TEXT,
    clima VARCHAR(50),
    temporada_alta ENUM('Primavera', 'Verano', 'Otoño', 'Invierno')
);

-- Tabla de Hoteles
CREATE TABLE hoteles (
    id_hotel INT PRIMARY KEY AUTO_INCREMENT,
    id_destino INT,
    nombre VARCHAR(100) NOT NULL,
    categoria INT CHECK (categoria BETWEEN 1 AND 5),
    direccion TEXT,
    precio_noche DECIMAL(10,2),
    FOREIGN KEY (id_destino) REFERENCES destinos(id_destino)
);

-- Tabla de Paquetes Turísticos
CREATE TABLE paquetes (
    id_paquete INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    id_destino INT,
    id_hotel INT,
    duracion_dias INT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    descripcion TEXT,
    incluye_vuelo BOOLEAN DEFAULT false,
    incluye_transporte BOOLEAN DEFAULT false,
    FOREIGN KEY (id_destino) REFERENCES destinos(id_destino),
    FOREIGN KEY (id_hotel) REFERENCES hoteles(id_hotel)
);

-- Tabla de Reservas
CREATE TABLE reservas (
    id_reserva INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT,
    id_paquete INT,
    fecha_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_viaje DATE NOT NULL,
    num_viajeros INT NOT NULL,
    precio_total DECIMAL(10,2) NOT NULL,
    estado ENUM('Pendiente', 'Confirmada', 'Cancelada') DEFAULT 'Pendiente',
    estado_pago ENUM('Pendiente', 'Pagado', 'Reembolsado') DEFAULT 'Pendiente',
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
    FOREIGN KEY (id_paquete) REFERENCES paquetes(id_paquete)
);

-- Tabla de Actividades
CREATE TABLE actividades (
    id_actividad INT PRIMARY KEY AUTO_INCREMENT,
    id_destino INT,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    duracion_horas DECIMAL(4,2),
    precio DECIMAL(10,2),
    FOREIGN KEY (id_destino) REFERENCES destinos(id_destino)
);

-- Tabla de Reservas de Actividades
CREATE TABLE reservas_actividades (
    id_reserva INT,
    id_actividad INT,
    fecha_actividad DATE,
    num_participantes INT,
    PRIMARY KEY (id_reserva, id_actividad),
    FOREIGN KEY (id_reserva) REFERENCES reservas(id_reserva),
    FOREIGN KEY (id_actividad) REFERENCES actividades(id_actividad)
);

-- Insertar datos de ejemplo
INSERT INTO destinos (ciudad, pais, descripcion, clima, temporada_alta) VALUES
('Barcelona', 'España', 'Ciudad cosmopolita con arquitectura única', 'Mediterráneo', 'Verano'),
('París', 'Francia', 'Ciudad del amor y la luz', 'Templado', 'Primavera'),
('Roma', 'Italia', 'Ciudad histórica con gran patrimonio cultural', 'Mediterráneo', 'Primavera');

INSERT INTO hoteles (id_destino, nombre, categoria, precio_noche) VALUES
(1, 'Hotel Barcelona Plaza', 4, 150.00),
(2, 'Paris Luxury Hotel', 5, 300.00),
(3, 'Roma Classic Resort', 4, 200.00);

INSERT INTO clientes (nombre, apellidos, email, telefono) VALUES
('Juan', 'García', 'juan@email.com', '+34666555444'),
('María', 'López', 'maria@email.com', '+34677888999'),
('Carlos', 'Martínez', 'carlos@email.com', '+34611222333');

INSERT INTO paquetes (nombre, id_destino, id_hotel, duracion_dias, precio, incluye_vuelo) VALUES
('Barcelona Fin de Semana', 1, 1, 3, 500.00, true),
('París Romántico', 2, 2, 5, 1200.00, true),
('Roma Cultural', 3, 3, 4, 900.00, true);
