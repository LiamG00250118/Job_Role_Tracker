const inquirer = require("inquirer");
const mysql = require('mysql2');

//create connection with sql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Airpr0963!',
    database: 'manager_hub'
  });
//function starts the initial prompts
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
//function to view the departments saved in database
function viewDepartments() {
    connection.query('SELECT * FROM departments', (error, results) => {
        if (error) throw error;
      
        console.log('\n Departments:');
        console.log(results);
      });

    startPrompts();
}
//function to view the roles saved in database
function viewRoles() {
    connection.query('SELECT * FROM roles', (error, results) => {
        if (error) throw error;
      
        console.log('\n Roles:');
        console.log(results);
      });

    startPrompts();

}
//function to view the employees saved in database
function viewEmployees() {
    connection.query('SELECT * FROM employees', (error, results) => {
        if (error) throw error;
      
        console.log('\n Employees:');
        console.log(results);
      });

    startPrompts();

}
//function to add departments to database
function addDepartment() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'departmentID',
        message: 'Enter ID for department',
      },
      {
        type: 'input',
        name: 'departmentName',
        message: 'Enter Name for Department',
      },
    ]).then((answers) => {
      const departmentID = answers.departmentID;
      const departmentName = answers.departmentName;
  
      connection.query('INSERT INTO departments (id, name) VALUES (?, ?)', [departmentID, departmentName], (error, results) => {
        if (error) throw error;
        console.log('Department added successfully!');
        startPrompts();
      });
    });
  }

//function to add role to database
  function addRole() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'roleID',
        message: 'Enter ID for role',
      },
      {
        type: 'input',
        name: 'roleTitle',
        message: 'Enter title for role',
      },
      {
        type: 'input',
        name: 'roleSalary',
        message: 'Enter salary for role',
      },
      {
        type: 'input',
        name: 'departmentID',
        message: 'Enter department ID for the role',
      },
    ]).then((answers) => {
      const roleID = answers.roleID;
      const roleTitle = answers.roleTitle;
      const roleSalary = answers.roleSalary;
      const departmentID = answers.departmentID;
  
      connection.query('INSERT INTO roles (id, title, salary, department_id) VALUES (?, ?, ?, ?)', [roleID, roleTitle, roleSalary, departmentID], (error, results) => {
        if (error) throw error;
        console.log('Role added successfully!');
        startPrompts();
      });
    });
}

//function to add employee to database
function addEmployee() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'employeeID',
        message: 'Enter ID for employee',
      },
      {
        type: 'input',
        name: 'firstName',
        message: 'Enter first name',
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter last name',
      },
      {
        type: 'input',
        name: 'roleID',
        message: 'Enter role ID for the employee',
      },
      {
        type: 'input',
        name: 'managerID',
        message: 'Enter manager ID for the employee',
      },
    ]).then((answers) => {
      const employeeID = answers.employeeID;
      const firstName = answers.firstName;
      const lastName = answers.lastName;
      const roleID = answers.roleID;
      const managerID = answers.managerID;
  
      connection.query('INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?)', [employeeID, firstName, lastName, roleID, managerID], (error, results) => {
        if (error) throw error;
        console.log('Employee added successfully!');
        startPrompts();
      });
    });
  }
//function to update the role of current employee
  function updateRole() {
    connection.query('SELECT * FROM employees', (error, results) => {
      if (error) throw error;
  
      
      inquirer.prompt([
        {
          type: 'list',
          name: 'employeeID',
          message: 'Select the employee to update their role:',
          choices: results.map((employee) => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id,
          })),
        },
        {
          type: 'input',
          name: 'newRoleID',
          message: 'Enter the new role ID for the employee:',
        },
      ]).then((answers) => {
        const employeeID = answers.employeeID;
        const newRoleID = answers.newRoleID;
  
        
        connection.query('UPDATE employees SET role_id = ? WHERE id = ?', [newRoleID, employeeID], (error, results) => {
          if (error) throw error;
          console.log('Employee role updated successfully!');
          startPrompts();
        });
      });
    });
  }

//starts the code with function call
startPrompts();
