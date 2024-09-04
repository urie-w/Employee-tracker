INSERT INTO department (name)
VALUES
('Sales'),
('Tech Support'),
('Management'),
('Finance'),
('Legal'),
('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Software Engineer', 170000, 2),
('Cyber Security', 180000, 2),
('Account Manager', 160000, 3),
('Accountant', 125000, 4),
('Legal Team Lead', 250000, 5),
('Lawyer', 190000, 5),
('HR Director', 150000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Will', 'Doe', 1, 20),
('John', 'Douge', 2, 1),
('Jane', 'Alena', 2, 1),
('Mike', 'Den', 2, 1),
('Nyfile', 'Jets', 2, 1),
('Cythia', 'Matts', 3, 20),
('Alex', 'Jones', 4, 6),
('Angel', 'Sambrano', 4, 6),
('Jackie', 'Dexter', 4, 6),
('Jill', 'Doe', 5, 20),
('Angie', 'Lu', 6, 10),
('Theodore', 'Smiths', 6, 10),
('Bob', 'Winx', 6, 10),
('Xia', 'Liang', 7, 20),
('Mike', 'Diego', 8, 14),
('Nile', 'Emitt', 8, 14),
('Alex', 'Delfy', 8, 14),
('Allan', 'Bravo', 9, 20),
('Jackie', 'Hillagan', 9, 20),
('Juliana', 'Kelg', 9, NULL);