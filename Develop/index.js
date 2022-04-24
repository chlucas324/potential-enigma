const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of the project?',
    name: 'Title'
},
{
    type: 'input',
    message: 'Write a brief description of your project.',
    name: 'Description'
},
{
    type: 'input',
    message: 'Table of Contents',
    name: 'Table of Contents'
}, 
{
    type: 'input',
    message: 'What does the user need to install in order to run this application?',
    name: 'Installation'
},
{
    type: 'input',
    message: 'Describe how the application is used.',
    name: 'Usage'
},
{
    type: 'input',
    message: 'List contributors to this project',
    name: 'contributing'
},
{
    type: 'list',
    message: 'Choose the appropriate license for the project: ',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    name: 'license'
},
{
    type: 'input',
    message: 'List any tests written for the application',
    name: 'tests'
},
{
    type: 'input',
    message: 'What do I do if I have a question?',
    name:  'questions'
}



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
