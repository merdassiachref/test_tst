create database if not exists test;

use test;

drop table `productivite`;

create table if not exists `productivite`(
    n_val varchar(50) PRIMARY KEY NOT NULL,
    val int
);

INSERT INTO
    `productivite` (`n_val`, `val`)
VALUES
    ('valeur1', 50);

INSERT INTO
    `productivite` (`n_val`, `val`)
VALUES
    ('valeur2', 55);

select
    *
from
    `productivite`;