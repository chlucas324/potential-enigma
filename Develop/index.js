// declare external packages
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');


const generateMarkdown = require('./utils/generateMarkdown');

//array of questions for user
const promptUser = () => {
    return inquirer.prompt([
{        
    type: 'input',
    name: 'title',
    message: 'What is the title of the project? (Required)',
    validate: titleInput => {
    if (titleInput) {
        return true;
    } else {
      console.log('Please enter a project title!');
      return false;  
    }
  }
},
{
    type: 'input',
    name: 'description',
    message: 'Write a brief description of your project.'   
},
{
    type: 'input',
    name: 'table of Contents',
    message: 'Table of Contents'   
}, 
{
    type: 'input',
    name: 'installation',
    message: 'What does the user need to install in order to run this application?'  
},
{
    type: 'input',
    name: 'usage',
    message: 'Describe how the application is used.'    
},
{
    type: 'input',
    name: 'contributing',
    message: 'List contributors to this project'    
},
{
    type: 'list',
    name: 'license',
    message: 'Choose the appropriate license for the project: ',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']   
},
{
    type: 'input',
    name: 'tests',
    message: 'List any tests written for the application'    
},
{
    type: 'input',
    name:  'questions',
    message: 'What do I do if I have a question?'    
},
{
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username: '    
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email: '   
}
]);
};

//function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Your README.md file has been generated!')
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promptUser)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
    })
}

// Function call to initialize app
init();
