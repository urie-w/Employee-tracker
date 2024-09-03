const express = require('express');
const inquirer = require('inquirer');
const connection = require('./db/connection');
const cTable = require('console.table');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// To view all employees
function viewAllEmployees() {
    const query = 'SELECT * FROM employee.id, employee.first_name,  employee.last_name, employee.role_id, employee.manager_id FROM employee';

    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

// function to add employee
 function   addEmployee() {
    const newEmployee = [
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the employees first name?',
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is the employees last name?'
    },
    {
        type: 'input',
        name: 'role_id',
        message: 'What is the employees role id?'
    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'What is the employees manager id?'
    }
    ]
 }