-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 27-03-2020 a las 21:54:15
-- Versión del servidor: 10.1.39-MariaDB
-- Versión de PHP: 7.1.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empleados`
--

-------------------------------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `emp_id` int(11) NOT NULL,
  `emp_name` varchar(15) NOT NULL,
  `emp_last_name` varchar(30) NOT NULL,
  `emp_phone` int(10) DEFAULT NULL,
  `emp_email` varchar(100) NOT NULL,
  `emp_direction` varchar(100) NOT NULL
) 

---------------------------------------------------------------------------------
--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`emp_id`, `emp_name`, `emp_last_name`, `emp_phone`, `emp_email`, `emp_direction`) VALUES
(1, 'Luis', 'Montes Moreno', 4426008745, 'Luis.oz@outlook.com', 'Av. de la Luz'),
(2, 'Pablo Jair', 'Ortiz Gomez', 4422009775, 'Pato@outlook.com', 'San Jose de los Olvera'),
(3, 'Mauricio', 'Saldivar Sanchez', 4424899645, 'IO.pack@gmail.com', 'Av. Constituyentes'),
(4, 'Milton', 'Hernandez Ibarra', 4427886678, 'Isai.yet@gmail.com', 'Hercules'),
(5, 'Carlos', 'Cruz Sanchez', 4426825690, 'Uzumaki@gmail.com', 'Candiles'),
(6, 'Viridiana', 'Trenado Sanchez', 4423678977, 'Adita.put@gmail.com', 'El Pueblito'),
(7, 'Denisse', 'Arreola Arreola', 4426076543, 'Cielo@gmail.com', 'Lomas del Mirador'),
(8, 'Paola', 'Hernández Guerrero', 4422869254, 'paola.366@outlook.com', 'Carrillo'),
(9, 'Laura Damaris', 'Maldonado Navarro', 4426005798, 'DamaG.260@outlook.com', 'Plutarco elias Calles'),
(10, 'Claudia', 'Trejo Portillo', 4422567032, 'Neko.032@gmail.com', 'San Rosa de Jáuregui');