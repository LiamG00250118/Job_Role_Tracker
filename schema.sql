DROP DATABASE IF EXISTS manager_hub;
-- Creates the "books_db" database --
CREATE DATABASE manager_hub;
USE manager_hub;

-- Add biography table --


CREATE TABLE biography(

    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    author VARCHAR(250),
    PRIMARY KEY(id)
);