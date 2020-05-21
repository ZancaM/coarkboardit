DROP DATABASE IF EXISTS corkboardit;
DROP USER IF EXISTS corkboardit_user;

CREATE USER corkboardit_user WITH CREATEDB;
CREATE DATABASE corkboardit WITH OWNER corkboardit_user;
