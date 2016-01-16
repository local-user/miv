-- MySQL Script generated by MySQL Workbench
-- Sun 17 Jan 2016 01:54:48 AEDT
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema miv
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema miv
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `miv` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `miv` ;

-- -----------------------------------------------------
-- Table `miv`.`url`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `miv`.`url` ;

CREATE TABLE IF NOT EXISTS `miv`.`url` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `letter` VARCHAR(1) NOT NULL,
  `priority` INT NOT NULL DEFAULT 0,
  `url` VARCHAR(2083) NOT NULL,
  `date_created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `miv`.`msg`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `miv`.`msg` ;

CREATE TABLE IF NOT EXISTS `miv`.`msg` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `code` INT(3) NOT NULL,
  `msg` VARCHAR(256) NOT NULL,
  `date_created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `miv`.`img`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `miv`.`img` ;

CREATE TABLE IF NOT EXISTS `miv`.`img` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_url` INT NOT NULL,
  `filename` VARCHAR(4096) NOT NULL,
  `mime` VARCHAR(255) NOT NULL,
  `path` VARCHAR(4096) NOT NULL,
  `size` INT NOT NULL,
  `date_created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`, `id_url`),
  INDEX `fk_img_url_idx` (`id_url` ASC),
  CONSTRAINT `fk_img_url`
    FOREIGN KEY (`id_url`)
    REFERENCES `miv`.`url` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
