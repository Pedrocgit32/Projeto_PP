CREATE DATABASE bd_rvmap;
use bd_rvmap;

CREATE TABLE users_rvmap(
	nome VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL ,
    senha VARCHAR (255) NOT NULL,
    telefone VARCHAR (255) NOT NULL,
    cpf VARCHAR (255) PRIMARY KEY NOT NULL,
    cep VARCHAR (255) NOT NULL
); 

DROP TABLE users_rvmap;

INSERT INTO users_rvmap (nome, email, senha, telefone, cpf, cep)
VALUES ('Lorenzo', 'lorenzo@email.com', 'Lr1234@', '5198765087', '056.344.233-09', '93050-590'),
('Gustavo', 'gustavo@email.com', 'Gt1235#', '51995763241', '098.446.413-90', '94050-560');

SELECT * FROM users_rvmap;

CREATE TABLE 