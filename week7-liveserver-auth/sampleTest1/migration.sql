DROP TABLE IF EXISTS person;
DROP TABLE IF EXISTS company;

CREATE TABLE company(
    id SERIAL NOT NULL,
    name VARCHAR NOT NULL
);

CREATE TABLE person(
    id SERIAL NOT NULL,
    fname VARCHAR NOT NULL,
    cid INT NOT NULL
);


INSERT INTO company (name) VALUES
('ABC Corporation'),
('XYZ Inc'),
('QWE Industries'),
('MNO Group'),
('PQR Ltd');

INSERT INTO person (fname, cid) VALUES
('John', 1),
('Alice', 2),
('Bob', 1),
('Carol', 3),
('David', 2);

