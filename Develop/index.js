// declare external packages
const fs = require('fs');
// const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//array of questions for user
const questions = [
// project title    
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

// project description
{
    type: 'input',
    name: 'description',
    message: 'Write a brief description of your project.', 
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
          console.log('Please enter a project description!');
          return false;   
        }
    }
  },
// table of contents
{
    type: 'input',
    name: 'table of Contents',
    message: 'Table of Contents',   
    validate: TableOfContentsInput => {
        if (TableOfContentsInput) {
            return true;
        } else {
          console.log('Please provide a Table of Contents.');
          return false;   
        }
    }
  },
// installation instructions
{
    type: 'input',
    name: 'installation',
    message: 'What does the user need to install in order to run this application?',  
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
          console.log('Please enter installation requirements.');
          return false;   
        }
    }
  },
// usage information
{
    type: 'input',
    name: 'usage',
    message: 'Describe how the application is used.',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
          console.log('Please enter how the application is used.');
          return false;   
        }
    }
  },
//contributors
{
    type: 'input',
    name: 'contributing',
    message: 'List contributors to this project',    
    validate: contributingInput => {
        if (contributingInput) {
            return true;
        } else {
          console.log('Please list contributors or write N/A if none.');
          return false;   
        }
    }
  },
// license options
{
    type: 'list',
    name: 'license',
    message: 'Choose the appropriate license for the project: ',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],   
    validate: licenseInput => {
        if (licenseInput) {
            return true;
        } else {
          console.log('Please pick a license.');
          return false;   
        }
    }
  },
// testing information
{
    type: 'input',
    name: 'tests',
    message: 'List any tests written for the application'    
},
// questions- how to contact
{
    type: 'input',
    name:  'questions',
    message: 'What do I do if I have a question?'    
},
// GitHub username
{
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username: ',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
          console.log('Please enter your GitHub username.');
          return false;   
        }
    }
  },
// email address
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email: '   
}
];

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
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
    })
}

// Function call to initialize app
init();
