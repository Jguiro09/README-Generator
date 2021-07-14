// TODO: Include packages needed for this application
const util = require('util');
const inquirer = require('inquirer');
const { userInfo } = require('os');

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
        type: "input",
        message: "What license are you using?",
        name: "license"
    },
    {
        type: "input",
        message: "Did anyone help you with your project?",
        name: "help",
    }, 
    {
        type: "input",
        message: "Any tests for your project?",
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

inquirer.prompt(questions)
    .then((response) => 
        console.log("done!")
    );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();