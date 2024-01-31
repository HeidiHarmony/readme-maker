// TODO: Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
var questions = [];

inquirer
    .prompt ([
    //Name of App (app-name)
    { 
        type: 'input',
        name: 'app-name',
        message: 'Welcome to README-Maker! We save you time in creating your readme documentation so you can spend more time on the important stuff! Let\'s get started. What is the name of your application?',
   }
   //Tagline (tagline)
   {
        type: 'input',
        name: 'tagline',
        message: 'What is your application\'s tagline or flavor text? (type SKIP to skip):',
        validate: function (input) {
            if (input.toLowerCase() === 'skip') {
              return true; // Skip the question
            }
            return input !== '' || 'Please enter a value or "skip"';
          },
    },
    //Link to deployed application
    {
        type: 'input',
        name: 'link',
        message: 'What is your application\'s URL?',
    }
    //About
    {
        type: 'input',
        name: 'link',
        message: 'What is your application\'s URL?',
    }
])
    .then(answers => {
        // something here?
        console.log(answers);
    })


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
