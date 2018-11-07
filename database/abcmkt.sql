-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 07, 2018 at 05:59 PM
-- Server version: 5.7.9
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `abcmkt`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
CREATE TABLE IF NOT EXISTS `companies` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `naziv` varchar(100) NOT NULL,
  `drzava` varchar(100) NOT NULL,
  `adresa` varchar(100) NOT NULL,
  `grad` varchar(100) NOT NULL,
  `posta` varchar(20) NOT NULL,
  `vrijednost` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefon` varchar(50) NOT NULL,
  `opis` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `naziv`, `drzava`, `adresa`, `grad`, `posta`, `vrijednost`, `email`, `telefon`, `opis`) VALUES
(1, 'Acme Inc.', 'DE', 'Hegelstrasse 12', 'Berlin', '2210', '500M', 'info@acme.de', '49 326 5623', ''),
(2, 'Amazon', 'SAD', 'High Lane 223', 'San Francisco', '22000', '650B', 'admin@amazon.com', '215 232 2564', ''),
(3, 'Strabag AG', 'Austrija', 'Hochstrasse 223', 'Graz', '2143', '250M', 'info@strabag.com', '31 265 2325 124', ''),
(4, 'Infobit doo', 'Hrvatska', 'Labinska 22', 'Rijeka', '23000', '12M', 'support@infobit.hr', '023 2356 542', ''),
(5, 'Google', 'SAD', 'One Oak St 432', 'San Francisco', '29450', '650B', 'admin@google.com', '218 231 2310', ''),
(6, 'Samsung Inc.', 'Koreja', 'Kwon Ta St 43b', 'Seoul', '23212', '354B', 'head@samsung.kr', '342 23 235 2642', ''),
(7, 'Cisco Corp.', 'SAD', '32-rd Ave 3344', 'San Jose', '33220', '125B', 'info@cisco.com', '312 231 2325', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
