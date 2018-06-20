-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Creato il: Apr 24, 2018 alle 10:14
-- Versione del server: 10.1.13-MariaDB
-- Versione PHP: 7.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `4b_banche`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `correntisti`
--

CREATE TABLE `correntisti` (
  `cCorrentista` int(11) NOT NULL,
  `Nome` varchar(40) NOT NULL,
  `cComune` int(11) NOT NULL,
  `Telefono` varchar(10) NOT NULL,
  `Pwd` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `correntisti`
--

INSERT INTO `correntisti` (`cCorrentista`, `Nome`, `cComune`, `Telefono`, `Pwd`) VALUES
(1, 'Rossi', 1, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(2, 'Verdi', 2, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(3, 'Abbà', 3, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(4, 'Cerrato', 4, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(5, 'Allegri', 5, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(6, 'Berutti', 6, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(7, 'Isaia', 7, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(8, 'Cerutti', 8, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(9, 'Airale', 9, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(10, 'Serra', 10, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(11, 'Demaria', 11, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(12, 'Vettori', 12, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(13, 'Parola', 13, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(14, 'Ferri', 14, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(15, 'Barbero', 15, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(16, 'Bertolino', 16, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(17, 'Allemandi', 17, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(18, 'Gilli', 18, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(19, 'Garello', 19, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(20, 'Oddenino', 20, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(21, 'Marengo', 21, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(22, 'Morielli', 7, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(23, 'Appendino', 7, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99'),
(24, 'Barberis', 18, '0172696469', '5f4dcc3b5aa765d61d8327deb882cf99');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `correntisti`
--
ALTER TABLE `correntisti`
  ADD PRIMARY KEY (`cCorrentista`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `correntisti`
--
ALTER TABLE `correntisti`
  MODIFY `cCorrentista` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
