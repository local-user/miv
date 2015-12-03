/** | create - table - miv **/




    -- MySQL Script generated by MySQL Workbench
    -- Thu 03 Dec 2015 14:07:01 AEDT
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
      `url` VARCHAR(2083) NOT NULL,
      `date_created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB;


    SET SQL_MODE=@OLD_SQL_MODE;
    SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
    SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;




/** create - table - miv | **/