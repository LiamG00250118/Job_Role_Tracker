const inquirer = require("inquirer");

// : view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

function startPrompts() {
    console.log('Welcome to the Manager Hub');

  inquirer.prompt([
      {
        type: 'list',
        name: "promptAnswer",
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role']
      }
    ])
    .then((answers) => {
      if(answers.promptAnswer == 'View all departments')
      {
        viewDepartments();
      }
      if(answers.promptAnswer == 'View all roles')
      {
        viewRoles();
      }
      if(answers.promptAnswer == 'View all employees')
      {
        viewEmployees();
      }
      if(answers.promptAnswer == 'Add a department')
      {
        addDepartment();
      }
      if(answers.promptAnswer == 'Add a role')
      {
        addRole();
      }
      if(answers.promptAnswer == 'Add an employee')
      {
        addEmployee();
      }
      if(answers.promptAnswer == 'Update employee role')
      {
        updateRole();
      }
    })
}

function viewDepartments() {
    console.log('1');

}
function viewRoles() {
    console.log('2');

}
function viewEmployees() {
    console.log('3');

}
function addDepartment() {
    console.log('4');

}
function addRole() {
    console.log('5');

}
function addEmployee(){
    console.log('6');

}
function updateRole(){
    console.log('7');

}



startPrompts();
