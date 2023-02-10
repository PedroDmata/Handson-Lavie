CREATE DATABASE clinica;

use clinica;

CREATE TABLE psicologo (
	id INT PRIMARY KEY auto_increment,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL,
    senha VARCHAR(200) NOT NULL,
    apresentacao VARCHAR(500) NOT NULL
);
CREATE TABLE paciente (
	id INT PRIMARY KEY auto_increment,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL,
    idade date NOT NULL
);
CREATE TABLE atendimento (
	id INT PRIMARY KEY auto_increment,
  	data_atendimento DATETIME NOT NULL,
  	observacao VARCHAR(500) NOT NULL,
  	psicologo_id INT NOT NULL,
    paciente_id INT NOT NULL,
    CONSTRAINT FK_Psicologo FOREIGN KEY (psicologo_id) REFERENCES psicologo(id),
	CONSTRAINT FK_Paciente FOREIGN KEY (paciente_id) REFERENCES paciente(id)
);

