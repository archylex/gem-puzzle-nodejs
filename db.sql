CREATE DATABASE gempuzzle;
USE gempuzzle;

CREATE TABLE rating(
  id serial PRIMARY KEY,
  name VARCHAR(125) NOT NULL,
  size VARCHAR(4) NOT NULL,
  time INT NOT NULL,
  steps INT NOT NULL,
  date TIMESTAMP NOT NULL
);
