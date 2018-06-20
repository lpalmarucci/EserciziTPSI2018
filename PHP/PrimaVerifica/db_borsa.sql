-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mar 09, 2018 alle 18:43
-- Versione del server: 10.1.30-MariaDB
-- Versione PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_borsa`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `titoli`
--

CREATE TABLE `titoli` (
  `id` int(11) NOT NULL,
  `titolo` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `ultimoContratto` double NOT NULL,
  `denaro` double NOT NULL,
  `lettera` double NOT NULL,
  `volumi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dump dei dati per la tabella `titoli`
--

INSERT INTO `titoli` (`id`, `titolo`, `ultimoContratto`, `denaro`, `lettera`, `volumi`) VALUES
(1, 'fiat 2020', 95.5, 94, 95.2, 200000),
(2, 'fiat 2019', 101, 99.5, 102.2, 350000),
(5, 'fiat 2021', 87.9, 87, 88.1, 500000),
(6, 'unicredit 2018', 90.6, 90.3, 90.9, 1000000),
(7, 'unicredit 2020', 92.35, 92.05, 94.2, 207000),
(8, 'poste italiane 2021', 102.4, 101.9, 102.9, 57000),
(9, 'poste italiane 2020', 100, 99.5, 100.5, 320000),
(10, 'UBI 2020', 88.5, 88, 88.9, 135000);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `titoli`
--
ALTER TABLE `titoli`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `titoli`
--
ALTER TABLE `titoli`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
