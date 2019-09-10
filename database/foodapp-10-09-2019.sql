-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 25, 2018 at 02:26 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foodapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `fd_address`
--

CREATE TABLE `fd_address` (
  `addressId` int(11) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `address` longtext NOT NULL,
  `pincode` int(11) NOT NULL,
  `currentLat` varchar(255) NOT NULL,
  `currentLong` varchar(255) NOT NULL,
  `status` enum('A','D') NOT NULL COMMENT 'A: Active, D: Deactive',
  `createdDate` datetime NOT NULL,
  `updatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `fd_daily_menu`
--

CREATE TABLE `fd_daily_menu` (
  `dailyMenuId` int(11) NOT NULL,
  `serviceProviderId` int(11) NOT NULL,
  `serviceId` int(11) NOT NULL,
  `menuItemId` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `date` date NOT NULL,
  `status` enum('A','D') NOT NULL DEFAULT 'A' COMMENT 'A: Active, D: Deactive',
  `createdDate` datetime NOT NULL,
  `updatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `fd_menu_item`
--

CREATE TABLE `fd_menu_item` (
  `menuItemId` int(11) NOT NULL,
  `itemCategoryId` int(11) NOT NULL,
  `itemName` varchar(255) NOT NULL,
  `itemPhoto` varchar(255) NOT NULL,
  `status` enum('A','D') NOT NULL DEFAULT 'A' COMMENT 'A: Active, D: Deactive',
  `isCategory` enum('M','S') NOT NULL DEFAULT 'M' COMMENT 'M: Main Category, S: Sub Category',
  `createdDate` datetime NOT NULL,
  `updatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `fd_order`
--

CREATE TABLE `fd_order` (
  `orderId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `serviceProviderId` int(11) NOT NULL,
  `addressId` int(11) NOT NULL,
  `date` date NOT NULL,
  `status` enum('P','C','D') NOT NULL COMMENT 'P: Pending For Confirm, C: ''Confirm'', D: ''Deliver''',
  `paymentStatus` enum('R','P') NOT NULL COMMENT 'P: Pending, R: Recived',
  `createdDate` datetime NOT NULL,
  `updatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `fd_services`
--

CREATE TABLE `fd_services` (
  `serviceId` int(11) NOT NULL,
  `serviceName` varchar(255) NOT NULL,
  `status` enum('A','D') NOT NULL DEFAULT 'A' COMMENT 'A: Active, D: Deactive',
  `createdDate` datetime NOT NULL,
  `updatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `fd_service_price`
--

CREATE TABLE `fd_service_price` (
  `servicePriceId` int(11) NOT NULL,
  `serviceProviderId` int(11) NOT NULL,
  `price` varchar(255) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `status` enum('A','D') NOT NULL COMMENT 'A: Active, D: Deactive',
  `createdDate` datetime NOT NULL,
  `updatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `fd_service_provider`
--

CREATE TABLE `fd_service_provider` (
  `serviceProviderId` int(11) NOT NULL,
  `serviceId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `status` enum('A','D') NOT NULL DEFAULT 'A' COMMENT 'A: Active, D: Deactive',
  `description` longtext NOT NULL,
  `createdDate` datetime NOT NULL,
  `updatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `fd_users`
--

CREATE TABLE `fd_users` (
  `userId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `profileImg` varchar(255) NOT NULL,
  `addressId` int(11) NOT NULL,
  `deliveryRange` int(11) NOT NULL,
  `status` enum('A','D') NOT NULL DEFAULT 'A',
  `userType` enum('A','U','P') NOT NULL,
  `deviceId` varchar(255) NOT NULL,
  `lastLogin` datetime NOT NULL,
  `createdDate` datetime NOT NULL,
  `updatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fd_users`
--

INSERT INTO `fd_users` (`userId`, `name`, `password`, `email`, `phoneNumber`, `profileImg`, `addressId`, `deliveryRange`, `status`, `userType`, `deviceId`, `lastLogin`, `createdDate`, `updatedDate`) VALUES
(1, 'Jayesh', '$2y$10$A5rJ0v1tX/NIT0SmkOW8kOBwOZz1kdOI6bf/CUiRoY87LUHNht6Uq', 'jayesh@gmail.com', '9624360502', '', 1, 5, 'A', 'P', '', '2018-09-20 00:00:00', '2018-09-20 00:00:00', '2018-09-20 19:59:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fd_address`
--
ALTER TABLE `fd_address`
  ADD PRIMARY KEY (`addressId`);

--
-- Indexes for table `fd_daily_menu`
--
ALTER TABLE `fd_daily_menu`
  ADD PRIMARY KEY (`dailyMenuId`);

--
-- Indexes for table `fd_menu_item`
--
ALTER TABLE `fd_menu_item`
  ADD PRIMARY KEY (`menuItemId`);

--
-- Indexes for table `fd_order`
--
ALTER TABLE `fd_order`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `fd_services`
--
ALTER TABLE `fd_services`
  ADD PRIMARY KEY (`serviceId`);

--
-- Indexes for table `fd_service_price`
--
ALTER TABLE `fd_service_price`
  ADD PRIMARY KEY (`servicePriceId`);

--
-- Indexes for table `fd_service_provider`
--
ALTER TABLE `fd_service_provider`
  ADD PRIMARY KEY (`serviceProviderId`);

--
-- Indexes for table `fd_users`
--
ALTER TABLE `fd_users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fd_address`
--
ALTER TABLE `fd_address`
  MODIFY `addressId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fd_daily_menu`
--
ALTER TABLE `fd_daily_menu`
  MODIFY `dailyMenuId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fd_menu_item`
--
ALTER TABLE `fd_menu_item`
  MODIFY `menuItemId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fd_order`
--
ALTER TABLE `fd_order`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fd_services`
--
ALTER TABLE `fd_services`
  MODIFY `serviceId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fd_service_price`
--
ALTER TABLE `fd_service_price`
  MODIFY `servicePriceId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fd_service_provider`
--
ALTER TABLE `fd_service_provider`
  MODIFY `serviceProviderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fd_users`
--
ALTER TABLE `fd_users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
