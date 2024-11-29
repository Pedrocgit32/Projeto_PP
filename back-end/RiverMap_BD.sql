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

INSERT INTO users_rvmap (nome, email, senha, cpf, cep)
VALUES ('Lorenzo', 'lorenzo@email.com', 'Lr1234@', '056.344.233-09', '93050-590'),
('Gustavo', 'gustavo@email.com', 'Gt1235#', '098.446.413-90', '94050-560');

SELECT * FROM users_rvmap;

CREATE TABLE feedbacks(
	id int not null auto_increment primary key,
    file varchar(255) not null,
	id_user int not null,
    comment VARCHAR(255) NOT NULL,
    created_at timestamp default current_timestamp,
    foreign key (id_user) references users_rvmap(id)
    latitude DECIMAL(9, 6) NOT NULL,
	longitude DECIMAL(9, 6) NOT NULL
);


select * from feedbacks;
