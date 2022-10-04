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
primary key (fkJogo, fkJogador)
);                       

drop table pontuacao;

select * from usuario;
select * from pontuacao;