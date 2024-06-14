CREATE DATABASE bd_rvmap;
use bd_rvmap;

CREATE TABLE users_rvmap(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL ,
    senha VARCHAR (255) NOT NULL,
    cpf VARCHAR (255) NOT NULL,
    cep VARCHAR (255) NOT NULL
); 

DROP TABLE users_rvmap;

INSERT INTO users_rvmap (nome, email, senha, cpf, cep)
VALUES ('Lorenzo', 'lorenzo@email.com', 'Lr1234@', '056.344.233-09', '93050-590'),
('Gustavo', 'gustavo@email.com', 'Gt1235#', '098.446.413-90', '94050-560');

SELECT * FROM users_rvmap;

CREATE TABLE tables_feadbeecks(
	nome_use VARCHAR(255),
    coment VARCHAR(255) NOT NULL,
    imagem VARCHAR(255) NOT NULL
)