

CREATE Database IF NOT EXISTS `4b_automobili`;  
USE `4b_automobili`;


CREATE TABLE IF NOT EXISTS `marche` (
  `idMarca` int NOT NULL DEFAULT 0,
  `nome` varchar(40) DEFAULT NULL
);
ALTER TABLE `marche`
  ADD PRIMARY KEY (`idMarca`);
INSERT INTO `marche` (`idMarca`, `nome`) VALUES
('1', 'FIAT'),
('2', 'AUDI'),
('3', 'MERCEDES'),
('4', 'FORD');


CREATE TABLE IF NOT EXISTS `modelli` (
  `idModello` int NOT NULL DEFAULT 0,
  `nome` varchar(10) DEFAULT NULL,
  `codMarca` int DEFAULT NULL,
  `nPorte` int DEFAULT NULL,
  `cilindrata` int DEFAULT NULL
);
ALTER TABLE `modelli`
 ADD PRIMARY KEY (`idModello`);
INSERT INTO `modelli` (`idModello`, `nome`, `codMarca`, `nPorte`, `cilindrata`) VALUES
('1', 'Panda', '1', 2, 1200),
('2', 'Panda', '1', 4, 1400),
('3', 'Tipo', '1', 4, 1500),
('4', 'Tipo', '1', 4, 1600),
('5', '500', '1', 2, 1400),
('6', '500L', '1', 4, 1600),
('7',  'A4', '2', 4, 1800),
('8',  'A4', '2', 4, 2000),
('9',  'A6', '2', 4, 1800),
('10', 'A6', '2', 4, 2000),
('11', 'classe A', '3', 4, 1600),
('12', 'classe A', '3', 4, 1800),
('13', 'classe B', '3', 4, 1800),
('14', 'classe B', '3', 4, 2000),
('15', 'kuga', '4', 4, 1800),
('16', 'kuga', '4', 4, 2000),
('17', 'cMax', '4', 4, 1800),
('18', 'cMax', '4', 4, 2000);


 
CREATE TABLE IF NOT EXISTS `automobili` (
  `id` int DEFAULT NULL,
  `codModello` int DEFAULT NULL,
  `targa` varchar(8) DEFAULT NULL,
  `colore` varchar(16) DEFAULT NULL,
  `anno` int DEFAULT NULL,
  `prezzo` int DEFAULT NULL,
  `km` int DEFAULT NULL,
  `img` varchar(32) DEFAULT NULL

); 
ALTER TABLE `automobili`
 ADD PRIMARY KEY (`id`);
INSERT INTO `automobili` (`id`, `codModello`, `colore`, `anno`, `prezzo`, `img`, `targa`, `km`) VALUES
(1, 1, 'rosso', 2012, 9500, 'img1.jpg', 'FF777BT', 8000),
(2, 2, 'grigio', 2016, 14500, 'img2.jpg', 'FD575TW', 6000),
(3, 3, 'grigio', 2010, 26000, 'img3.jpg', 'FA875WE', 10000),
(4, 4, 'nero', 2014, 32000, 'img4.jpg', 'FD383YA', 20000),
(5, 5, 'bianco', 2015, 22000, 'img5.jpg', 'FB291FN', 15000),
(6, 6, 'nero', 2015, 47000, 'img6.jpg', 'EZ104AV', 20000),
(7, 7, 'bianco', 2016, 60000, 'img7.jpg', 'FB478NE', 15000),
(8, 8, 'arancione', 2014, 9000, 'img8.jpg', 'DX190SI', 28000),
(9, 9, 'celeste', 2013, 11500, 'img9.jpg', 'JN441AY', 20000),
(10, 10, 'blu', 2014, 15500, 'img10.jpg', 'IC275BX', 10000),
(11, 11, 'grigio', 2016, 17000, 'img11.jpg', 'GG223MO', 8000),
(12, 12, 'marrone', 2016, 28000, 'img12.jpg', 'KA107BK', 15000),
(13, 13, 'giallo', 2015, 18000, 'img13.jpg', 'BX145AN', 8000),
(14, 14, 'bianco', 2013, 14000, 'img14.jpg', 'FB572NE', 30000),
(15, 15, 'viola', 2014, 9000, 'img15.jpg', 'SW718NA', 12000),
(16, 16, 'nero', 2013, 22000, 'img16.jpg', 'EA431VS', 3000),
(17, 17, 'nero', 2016, 35000, 'img17.jpg', 'YN441DC', 20000),
(18, 18, 'blu', 2016, 22000, 'img18.jpg', 'DX210XN', 10000),
(19, 1, 'rosso', 2012, 9500, 'img19.jpg', 'FF777BT', 8000),
(20, 2, 'grigio', 2016, 14500, 'img20.jpg', 'FD575TW', 6000),
(21, 3, 'grigio', 2010, 26000, 'img21.jpg', 'FA875WE', 10000),
(22, 4, 'nero', 2014, 32000, 'img22.jpg', 'FD383YA', 20000),
(23, 5, 'bianco', 2015, 22000, 'img23.jpg', 'FB291FN', 15000),
(24, 6, 'nero', 2015, 47000, 'img24.jpg', 'EZ104AV', 20000),
(25, 7, 'bianco', 2016, 60000, 'img25.jpg', 'FB478NE', 15000),
(26, 8, 'arancione', 2014, 9000, 'img26.jpg', 'DX190SI', 28000),
(27, 9, 'celeste', 2013, 11500, 'img27.jpg', 'JN441AY', 20000),
(28, 10, 'blu', 2014, 15500, 'img28.jpg', 'IC275BX', 10000),
(29, 11, 'grigio', 2016, 17000, 'img29.jpg', 'GG223MO', 8000),
(30, 12, 'marrone', 2016, 28000, 'img30.jpg', 'KA107BK', 15000),
(31, 13, 'giallo', 2015, 18000, 'img31.jpg', 'BX145AN', 8000),
(32, 14, 'bianco', 2013, 14000, 'img32.jpg', 'FB572NE', 30000),
(33, 15, 'viola', 2014, 9000, 'img33.jpg', 'SW718NA', 12000),
(34, 16, 'nero', 2013, 22000, 'img34.jpg', 'EA431VS', 3000),
(35, 17, 'nero', 2016, 35000, 'img35.jpg', 'YN441DC', 20000),
(36, 18, 'blu', 2016, 22000, 'img36.jpg', 'DX210XN', 10000);

