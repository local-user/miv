

    /** create - user - miv **/
    CREATE USER 'miv'@'localhost' IDENTIFIED BY '';

    /** grant - access -> miv **/
    GRANT ALL PRIVILEGES ON miv.* TO 'miv'@'localhost';


