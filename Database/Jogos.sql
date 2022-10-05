create database Jogos;
use Jogos;
drop database Jogos;

create table Usuario (
id int primary key auto_increment,
nome varchar(45),
email varchar(45) unique,
senha varchar(45)
) auto_increment = 10;

create table jogo(
idJogo int primary key,
nomeJogo VARCHAR(45)
);

insert into jogo values(1, "Conversao"),
					   (2, "Node"),
					   (3, "Cruzadinha");
                       
create table pontuacao(
fkJogo int,
fkJogador int,
foreign key (fkJogo) references jogo(idJogo),
foreign key (fkJogador) references Usuario(id),
pontos int,
horario datetime,
primary key (fkJogo, fkJogador, horario)
);                       

insert into Usuario value(10, "Guilherme", "guilherme@email.com", 123);
insert into pontuacao values(1, 10, 50, now());
insert into pontuacao values(1, 10, 50, now());
insert into pontuacao values(2, 10, 50, now());
insert into pontuacao values(1, 10, 70, now());
drop table pontuacao;

select * from usuario;
select * from pontuacao;
select pontos, max(horario) from pontuacao where fkJogador = 10;