--deletes existing data, but keeps table.
DELETE FROM users;

INSERT INTO users (name, email, age) VALUES
('John Doe', 'johndoe@example.com', 30),
('Jane Smith', 'janesmith@example.com', 25),
('Michael Johnson', 'michaeljohnson@example.com', 35),
('Emily Williams', 'emilywilliams@example.com', 28);