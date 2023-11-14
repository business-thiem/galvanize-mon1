DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS companies;


CREATE TABLE companies(
    id SERIAL PRIMARY KEY,
    name TEXT,
    location TEXT
);

CREATE TABLE people(
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    location TEXT,
    company_id INTEGER,
    FOREIGN KEY (company_id) REFERENCES companies(id) 
);



INSERT INTO companies (id, name, location) VALUES
(12, 'U.S. Navy', 'Washington'),
(90, 'CS,Inc.', 'London'),
(123, 'Stanford', 'Plao Alto');

INSERT INTO people (id, first_name, location, company_id) VALUES
(13, 'Hopper', 'Dallas', 12),
(48, 'Lovelace', 'New York', NULL),
(99, 'Knuth', 'Seattle', 123)
