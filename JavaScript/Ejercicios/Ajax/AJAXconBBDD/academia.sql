-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-02-2022 a las 17:38:49
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `academia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `dni` varchar(9) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `edad` int(2) UNSIGNED DEFAULT 10,
  `exp_curso` varchar(9) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`dni`, `nombre`, `apellidos`, `edad`, `exp_curso`) VALUES
('14444447J', 'Manuel', 'Liborio Garcia', 31, 'F1911AA'),
('21114447J', 'JAIME', 'Primer Delfin', 21, 'F1211AA'),
('24664447J', 'Mavier', 'Segundo Delfin', 29, 'F2011AA'),
('34422447J', 'JAIME', 'Cuadrado Triangulo', 21, 'F2011AA'),
('34444447J', 'JAIME', 'Otro Cualquiera', 21, 'F1311AA'),
('63344447J', 'JAIME', 'Todos los Santos', 10, 'F2011AA'),
('64111447J', 'Jesus', 'Tatum Psss', 31, 'F1811AA'),
('64224447J', 'Jesus', 'Cerezo Delcampo', 30, 'F1411AA'),
('64444447J', 'Manuel', 'Cerezo Delcampo', 31, 'F1811AA'),
('74433447J', 'Rigoberto', 'Hernandez Hernandez', 25, 'F1211AA'),
('74444444Z', 'DAVID', 'Hernandez Ruiz', 20, 'F1211AA'),
('74444445Y', 'Manuel', 'Jokudo Rincon', 30, 'F1311AA'),
('74444446R', 'DAVID', 'Lisensiado Patron', 20, 'F1311AA'),
('74444447J', 'Esperanza', 'Rodriguez Fernandez', 30, 'F1811AA'),
('74444449J', 'DAVID', 'Rodriguez Fernandez', 20, 'F2011AA'),
('78844447J', 'Daniel', 'Chim Pum', 35, 'F1911AA'),
('84444447J', 'Hercules', 'Sobrado Martinez', 25, 'F1311AA'),
('84499447J', 'Deborah', 'Hombres', 30, 'F1311AA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aulas`
--

CREATE TABLE `aulas` (
  `num` int(2) UNSIGNED NOT NULL,
  `nombre` varchar(20) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `aulas`
--

INSERT INTO `aulas` (`num`, `nombre`) VALUES
(1, 'aula-gallifante'),
(2, 'aula-rimbombante'),
(3, 'aula-friki');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `expediente` varchar(9) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `duracion` int(3) UNSIGNED NOT NULL,
  `numaula` int(2) UNSIGNED NOT NULL,
  `dnip` varchar(9) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`expediente`, `nombre`, `duracion`, `numaula`, `dnip`) VALUES
('F1211AA', 'Desarrollo de aplicaciones con tecnologias web', 580, 1, '55555555J'),
('F1311AA', 'Fotografia Digital', 300, 2, '55555556J'),
('F1411AA', 'Limpieza', 400, 1, '55555556J'),
('F1811AA', 'Carpinteria', 250, 3, '55555555J'),
('F1911AA', 'Hackeo de chats', 300, 2, '55555555J'),
('F2011AA', 'Soldadura y caldereria', 310, 1, '55555556J');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `dni` varchar(9) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(20) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`dni`, `nombre`) VALUES
('55555555J', 'Guillermo'),
('55555556J', 'David'),
('55555557J', 'Jose'),
('72134567F', 'Jaime');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`dni`),
  ADD KEY `exp_curso` (`exp_curso`);

--
-- Indices de la tabla `aulas`
--
ALTER TABLE `aulas`
  ADD PRIMARY KEY (`num`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`expediente`),
  ADD KEY `dnip` (`dnip`),
  ADD KEY `numal` (`numaula`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`dni`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aulas`
--
ALTER TABLE `aulas`
  MODIFY `num` int(2) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD CONSTRAINT `alumnos_ibfk_1` FOREIGN KEY (`exp_curso`) REFERENCES `cursos` (`expediente`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD CONSTRAINT `cursos_ibfk_2` FOREIGN KEY (`dnip`) REFERENCES `profesores` (`dni`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cursos_ibfk_3` FOREIGN KEY (`numaula`) REFERENCES `aulas` (`num`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
