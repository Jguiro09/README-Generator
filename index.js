// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your project's title?",
        name: "title",
    }, 
    {
        type: 'input',
        message: "What is your project's description?",
        name: "description",
    },
    {
        type: 'input',
        message: "How do you install your project?",
        name: "install",
    },
    {
        type: "input",
        message: "What can you do with your project?",
        name: "use",
    },
    {
        type: "list",
        message: "What license are you using?",
        name: "license",
        choices: [
            "None",
            "Apache License 2.0",
            "GNU General Public License V3.0",
            "MIT License",
            "BSD 3-Clause"
        ]
    },
    {
        type: "input",
        message: "What are the contribution guidlines?",
        name: "help",
    }, 
    {
        type: "input",
        message: "Test Instructions?",
        name: "test",
    },
    {
        type: "input",
        message: "Please enter your github username",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter your email address",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => 
        writeToFile("README", response),
    );
}

// Function call to initialize app
init();