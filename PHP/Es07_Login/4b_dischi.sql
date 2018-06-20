-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Creato il: Mar 26, 2018 alle 09:50
-- Versione del server: 10.1.13-MariaDB
-- Versione PHP: 7.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `4b_dischi`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `dischi`
--

CREATE TABLE `dischi` (
  `id` int(11) NOT NULL,
  `autore` varchar(64) NOT NULL,
  `titolo` varchar(64) NOT NULL,
  `anno` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `dischi`
--

INSERT INTO `dischi` (`id`, `autore`, `titolo`, `anno`) VALUES
(1, 'Zucchero', 'Baila Morena', '1999'),
(2, 'Sfera Ebbasta', 'Roc$star', '2018'),
(6, 'pink floyd', 'the wall', '1987'),
(7, 'pink floyd', 'the dark side of the moon', NULL),
(9, 'Annalisa', 'Bye Bye', '2018'),
(10, 'Annalisa', 'Bye Bye', '2018'),
(11, 'Vasco Rossi', 'c''è chi dice no', '1987'),
(13, 'Sfera', 'XDVR', '2015'),
(14, 'Paolo Xhelali', 'Pasta zizzia', '2018');

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

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `id` int(11) NOT NULL,
  `usr` varchar(32) NOT NULL,
  `pwd` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`id`, `usr`, `pwd`, `email`) VALUES
(1, 'pippo', '0c88028bf3aa6a6a143ed846f2be1ea4', 'pippo@vallauri.edu'),
(2, 'pluto', 'c6009f08fc5fc6385f1ea1f5840e179f', 'pluto@vallauri.edu'),
(3, 'minnie', 'c6c0329bba537835e48e2be9a8e9c8f7', 'minnie@vallauri.edu');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `dischi`
--
ALTER TABLE `dischi`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `exe_5`
--
ALTER TABLE `exe_5`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Autore` (`Autore`);

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `dischi`
--
ALTER TABLE `dischi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT per la tabella `exe_5`
--
ALTER TABLE `exe_5`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT per la tabella `utenti`
--
ALTER TABLE `utenti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
