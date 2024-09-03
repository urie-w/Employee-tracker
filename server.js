const inquirer = require('inquirer');
const client = require('./db/connection');
const cTable = require('console.table');

//Main menu
function mainMenu() {
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add Department',
            'Add Role',
            'Add An Employee',
            'Update Employee Role',
            'Exit'
        ]
    }).then(answer => {
        switch (answer.action) {
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Add An Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'Exit':
                client.end();
                break;
                default:
                    console.log('Invalid action: ${answer.action}');
        }
    });
}

//View all departments
function viewAllDepartments() {
    const query = 'SELECT * FROM department';
    client.query(query, (err, res) => {
        if (err) throw err;
        console.table(res.rows);
        mainMenu();
    });
}

//View all roles
function viewAllRoles() {
    const query = `SELECT role.id, role.title, department.name AS department, role.salary
    FROM role
    Left JOIN department ON role.department_id = department.id`;
    client.query(query, (err, res) => {
        if (err) throw err;
        console.table(res.rows);
        mainMenu();
    });
}

//View all employees
function viewAllEmployees() {
    const query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, 
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id`;
    client.query(query, (err, res) => {
        if (err) throw err;
        console.table(res.rows);
        mainMenu();
    });
}

//Add department
function addDepartment() {
    inquirer.prompt({
        name: 'name',
        type: 'input',
        message: 'Enter the name of the department:'
    }).then(answer => {
        const query = 'INSERT INTO department (name) VALUES ($1)';
        client.query = (query, [answer.name], (err, res) => {
            if (err) throw err;
            console.log('Department added successfully!');
            mainMenu();
        })
    });
 }