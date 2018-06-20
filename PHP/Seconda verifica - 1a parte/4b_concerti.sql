-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 14, 2018 alle 01:30
-- Versione del server: 10.1.31-MariaDB
-- Versione PHP: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `4b_concerti`
--
CREATE DATABASE IF NOT EXISTS `4b_Concerti` DEFAULT CHARACTER SET latin1 COLLATE latin1_general_ci;
USE `4b_Concerti`;

-- --------------------------------------------------------

--
-- Struttura della tabella `citta`
--

CREATE TABLE `citta` (
  `id` int(11) NOT NULL,
  `citta` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `citta`
--

INSERT INTO `citta` (`id`, `citta`) VALUES
(1, 'Milano'),
(2, 'Torino'),
(3, 'Verona'),
(4, 'Bologna'),
(5, 'Padova'),
(6, 'Firenze'),
(7, 'Roma');

-- --------------------------------------------------------

--
-- Struttura della tabella `concerti`
--

CREATE TABLE `concerti` (
  `id` int(11) NOT NULL,
  `cantante` varchar(20) DEFAULT NULL,
  `data` varchar(20) DEFAULT NULL,
  `codGenere` int(11) DEFAULT NULL,
  `codCitta` int(11) DEFAULT NULL,
  `struttura` varchar(20) DEFAULT NULL,
  `nPosti` int(11) DEFAULT NULL,
  `dettagli` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `concerti`
--

INSERT INTO `concerti` (`id`, `cantante`, `data`, `codGenere`, `codCitta`, `struttura`, `nPosti`, `dettagli`) VALUES
(1, 'pippo', '11/6/2018', 1, 1, 'San Siro', 50000, 'dettagli concerto 1'),
(2, 'pluto', '12/6/2018', 1, 2, 'Allianz Stadium', 40000, 'dettagli concerto 2'),
(3, 'minnie', '13/6/2018', 1, 3, 'Arena', 25000, 'dettagli concerto 3'),
(4, 'jenny', '14/6/2018', 1, 4, 'Dall\'Ara', 35000, 'dettagli concerto 4'),
(5, 'sonny', '15/6/2018', 1, 5, 'Stadio Euganeo', 30000, 'dettagli concerto 5'),
(6, 'fanny', '16/6/2018', 1, 6, 'Artemio Franchi', 40000, 'dettagli concerto 6'),
(7, 'jmmy', '17/6/2018', 1, 7, 'Stadio Olilpico', 50000, 'dettagli concerto 7'),
(8, 'sandy', '18/6/2018', 1, 1, 'Palazzetto di Assago', 20000, 'dettagli concerto 8'),
(9, 'sally', '19/6/2018', 2, 2, 'Allianz Stadium', 40000, 'dettagli concerto 9'),
(10, 'ronny', '20/6/2018', 2, 3, 'Arena', 25000, 'dettagli concerto 10'),
(11, 'daisy', '21/6/2018', 2, 4, 'Dall\'Ara', 35000, 'dettagli concerto 11'),
(12, 'emma', '22/6/2018', 3, 5, 'Stadio Euganeo', 30000, 'dettagli concerto 12'),
(13, 'elly', '23/6/2018', 3, 6, 'Artemio Franchi', 40000, 'dettagli concerto 13'),
(14, 'andy', '24/6/2018', 3, 7, 'Stadio Olilpico', 50000, 'dettagli concerto 14'),
(15, 'conny', '25/6/2018', 4, 1, 'San Siro', 50000, 'dettagli concerto 15'),
(16, 'erry', '26/6/2018', 4, 2, 'Allianz Stadium', 40000, 'dettagli concerto 16');

-- --------------------------------------------------------

--
-- Struttura della tabella `generi`
--

CREATE TABLE `generi` (
  `id` int(11) NOT NULL,
  `genere` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `generi`
--

INSERT INTO `generi` (`id`, `genere`) VALUES
(1, 'Rock'),
(2, 'Jazz'),
(3, 'Pop'),
(4, 'Blues');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `citta`
--
ALTER TABLE `citta`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `concerti`
--
ALTER TABLE `concerti`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `generi`
--
ALTER TABLE `generi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `citta`
--
ALTER TABLE `citta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT per la tabella `concerti`
--
ALTER TABLE `concerti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT per la tabella `generi`
--
ALTER TABLE `generi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
