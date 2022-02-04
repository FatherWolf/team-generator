const generateTeam = require("./src/generateteam");
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const employee = [];

const manager = () => {
  inquirer.prompt([
    {
      message: "Enter Team Manager's name:",
      name: "name",
    },
    {
      message: "Enter your employee ID:",
      name: "id",
    },
    {
      message: "Enter your email address:",
      name: "email",
    },
    {
      message: "Enter your Office number:",
      name: "office",
    },
  ])
    .then(({ name, id, email, office }) => {
      const manager = new Manager(name, id, email, office);
      employee.push(manager)
      nEmployee();
    })
}

const nEmployee = () => {
  inquirer.prompt([
    {
      message: "New Employee?",
      type: "list",
      name: "employee",
      choices:
        ["add Engineer", "add Intern", "done?"]
    }
  ])
    .then(({ employee }) => {
      switch (employee) {
        case "add Engineer":
          addEngineer();
          break;
        case "add Intern":
          addIntern();
          break;
        default: writeFile();
          break;
      }
    })
}

const addEngineer = () => {
  inquirer.prompt([
    {
      message: "What is the engineers name ?",
      name: "name",
    },
    {
      message: "Enter your employee ID:",
      name: "id",
    },
    {
      message: "Enter your email address:",
      name: "email",
    },
    {
      message: "What is their Github?",
      name: "github",
    },
  ])
    .then(({ name, id, email, github }) => {
      const engineer = new Engineer(name, id, email, github);
      employee.push(engineer)
      nEmployee();
    })
}

const addIntern = () => {
  inquirer.prompt([
    {
      message: "What is the interns name ?",
      name: "name",
    },
    {
      message: "Enter your employee ID:",
      name: "id",
    },
    {
      message: "Enter your email address:",
      name: "email",
    },
    {
      message: "What school do they go to?",
      name: "school",
    }
  ])
    .then(({ name, id, email, school }) => {
      const intern = new Intern(name, id, email, school);
      employee.push(intern)
      nEmployee();
    })
}

const writeFile = str => {
  fs.writeFile('./dist/index.html', generateTeam(employee), err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('Page created successfully')
    }
  })
}

const init = () => {
  manager()
}

init()







// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
