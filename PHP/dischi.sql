-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mar 08, 2018 alle 12:54
-- Versione del server: 10.1.30-MariaDB
-- Versione PHP: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_cd`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `exe_5`
--

CREATE TABLE `exe_5` (
  `id` int(11) NOT NULL,
  `Titolo` text COLLATE utf8_unicode_ci,
  `Data` date DEFAULT NULL,
  `Autore` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dump dei dati per la tabella `exe_5`
--

INSERT INTO `exe_5` (`id`, `Titolo`, `Data`, `Autore`) VALUES
(8, 'The MONN', '2017-09-02', 'hhggg'),
(14, 'Lezzo', '2018-01-30', 'Francesco L'),
(15, 'ggg', '2018-02-08', 'bbbvvvv');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `exe_5`
--
ALTER TABLE `exe_5`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Autore` (`Autore`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `exe_5`
--
ALTER TABLE `exe_5`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
