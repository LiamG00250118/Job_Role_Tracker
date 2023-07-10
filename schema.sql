DROP DATABASE IF EXISTS manager_hub;

CREATE DATABASE manager_hub;

USE manager_hub;

CREATE TABLE departments(
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE roles(
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(100),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees(
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

INSERT INTO departments (id, name) VALUES
(1, 'Sales'),
(2, 'Marketing'),
(3, 'Finance'),
(4, 'Human Resources');

INSERT INTO roles (id, title, salary, department_id) VALUES
(1, 'Manager', 5000.00, 1),
(2, 'Salesperson', 3000.00, 1),
(3, 'Marketing Specialist', 4000.00, 2),
(4, 'Accountant', 4500.00, 3),
(5, 'HR Coordinator', 3500.00, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'John', 'Doe', 1, NULL),
(2, 'Jane', 'Smith', 2, 1),
(3, 'Michael', 'Johnson', 3, 1),
(4, 'Emily', 'Davis', 4, 1),
(5, 'Robert', 'Wilson', 5, 1);