// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const questions = require('./questions');
const userInput = require('./answers');

// TODO: Create an array of questions for user input

    //License Type Constructor Function Declaration
    function licenseTypeConstructor(userInput) {
        return new Promise((resolve, reject) => {
        let licenseType = ''; // Initialize the licenseType variable with a default value
        if (userInput.license.name === 'none') {
            licenseType = license.name.none.toLowerCase();
        } else if (userInput.license.name === 'other') {
            licenseType = licenseOther.name.toLowerCase();
        } else {
            licenseType = userInput.license.name.toLowerCase();
        }
        console.log(licenseType);
        resolve (licenseType);
    });
}

 //License Description Function Declaration
 function displayLicenseDescription(licenseType, userInput) {
    const licenseLink = `https://choosealicense.com/licenses/${userInput.license.toLowerCase()}`;
        if (licenseType === license.name.none) {
            return "No license. All rights reserved.";
        } else if (licenseType === license.name.other) {
            return `Licensed under ${userInput.licenseOther}`;
        } else {
               return `Licensed under ${userInput.license}\n ${licenseLink};`
            }
        } 

var questions = [
//Name of App (app-name)
{ 
    type: 'input',
    name: 'appName',
    message: 'Welcome to README-Maker! We save you time in creating your readme documentation so you can spend more time on the important stuff! Let\'s get started. What is the name of your application?',
},
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
        }
},
//Link to deployed application
{
    type: 'input',
    name: 'link',
    message: 'What is your application\'s URL?',
},
//About
{
    type: 'input',
    name: 'about',
    message: 'What is your application about? What probem does it solve? What is its purpose?',
},
//Features
{
    type: 'input',
    name: 'features',
    message: 'What are the main features of your application?',
},
//Media
{
    type: 'input',
    name: 'media',
    message: 'Please provide a link to a screenshot or video of your application:',
},
//Documentation

//Installation
{
    type: 'input',
    name: 'installation',
    message: 'How is your application installed?',
},

//Dependencies
{
    type: 'checkbox',
    name: 'dependenciesCommon',
    message: 'Do you require any of the following dependencies? (You can add anything not shown here in the next question)',
    choices: [
        { name: 'None'},
        { name: 'fs' },
        { name: 'Express' },
        { name: 'React' },
        { name: 'Inquirer' },
        { name: 'Mongoose' },
        { name: 'Axios' },
        { name: 'Sequelize' },
        { name: 'Dotenv' },
        { name: 'bcrypt' },
        { name: 'body-parser' },
        { name: 'jsonwebtoken' },
        { name: 'nodemailer' },
        { name: 'multer' },
    ]
},
{
    type: 'input',
    name: 'dependenciesOther',
    message: 'Please list any other dependencies you have: (type SKIP to skip)',
    validate: function (input) {
        if (input.toLowerCase() === 'skip') {
          return true; // Skip the question
        }
        return input !== '' || 'Please enter a value or "skip"';
        }
},
//Getting Started
{
    type: 'input',
    name: 'usage',
    message: 'What usage instructions do you have for your application?',
},
//Frequently Asked Questions
{
    type: 'editor',
    name: 'faq',
    message: 'What are some frequently asked questions about your application?',
    default: 'Q: \nA: \n\nQ: \nA: \n\nQ: \nA:',
},
//Tests
{
    type: 'input',
    name: 'testFrameworks',
    message: 'What frameworks have been used to test your application? (type SKIP to skip)',
    validate: function (input) {
        if (input.toLowerCase() === 'skip') {
          return true; // Skip the question
        }
        return input !== '' || 'Please enter a value or "skip"';
        }
},
{
    type: 'input',
    name: 'tests',
    message: 'Please provide tests for your application: (type SKIP to skip)',
    when: function(answers) {
        return answers.testFrameworks !== 'SKIP';
    },
    validate: function(value) {
        if (value.length) {
            return true;
        } else {
            return 'Please enter a value or "skip"';
        }
    }
},
//Plans for future development
{
    type: 'input',
    name: 'future',
    message: 'What are your plans for future development?',
},
//Report Issues
{
    type: 'input',
    name: 'issues',
    message: 'How can users report issues?',
},
//How to contribute
{
    type: 'input',
    name: 'contribute',
    message: 'How can other coders contribute to your application?',
},
//License
{
    type: 'list',
    name: 'license',
    message: 'What license are you using for your application?',
    choices: [
        { name: 'MIT', description: 'A permissive license that is short and to the point. It lets people do anything they want as long as they provide appropriate attribution and don\’t hold you liable.' },
        { name: 'GNU', description: 'A copyleft license that ensures the software remains free and open-source, and any modifications or derivatives are also licensed under the GPL' },
        { name: 'Apache', description: 'A permissive license whose main conditions require preservation of copyright and license' },
        { name: 'Unlicense', description: 'A public domain dedication intended to allow reuse of code with minimal restrictions' },
        { name: 'Other' },
        { name: 'None', description: 'No license. Choose this option if you do not want to include a license with your application.' }
    ],
},
{
    type: 'input',
    name: 'licenseOther',
    when: (answers) => answers.license === 'Other', //Only prompts if 'Other' was selected
    message: 'Please enter the name of your custom license:',
},
//Author
//Name
{
    type: 'input',
    name: 'authorName',
    message: 'What is your name?',
},
//GitHub
{
    type: 'input',
    name: 'authorGitHub',
    message: 'What is your GitHub username?',
},
//Email
{
    type: 'input',
    name: 'authorEmail',
    message: 'What is your email address?',
},
//LinkedIn
{
    type: 'input',
    name: 'authorLinkedIn',
    message: 'What is your LinkedIn profile URL?',
},
//Portfolio
{
    type: 'input',
    name: 'authorPortfolio',
    message: 'What is your portfolio URL?',
},
// About Author
{
    type: 'input',
    name: 'authorAbout',
    message: 'What would you like people to know about you?',
},
];

// FUNCTION CALL: QUESTIONS
inquirer
    .prompt(questions)

// FUNCTION CALL with a callback function as an argument to write the README file
    .then((answers) => {
        const userInput = answers;
        const outputDir = 'readme-maker-output';

        licenseTypeConstructor(userInput)
        .then((licenseType) => {
            const readme = generateReadme(userInput, licenseType);
        
        fs.mkdirSync(outputDir, { recursive: true });
        fs.writeFile(`${outputDir}/README.md`, readme, (err) => {
            if (err) throw err;
            console.log('Your README file has been created successfully!');
        });
    })
    .catch((error) => {
        console.log('An error occurred:', error);
    });
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log('Prompt couldn\'t be rendered in the current environment');
        } else {   
            console.log('An error occurred:', error);
        }
    });

    // README generation function Declaration
        function generateReadme(userInput, licenseType) {
            const licenseBadge = `![License](https://img.shields.io/badge/license-${licenseType}-blue.svg)`;
                return `${userInput.appName}\n
                        ${userInput.tagline}\n
                        ${licenseBadge}\n
                        ## Description\n
                        ${generateToC(userInput)}\n
                        ### About\n
                        ${userInput.about}\n
                        ### Features\n
                        ${userInput.features}\n
                        ### Watch ${userInput.appName} in Action\n
                        ![Media](${userInput.media})\n
                        ## Documentation\n
                        ### Installation\n
                        ${userInput.installation}\n
                        ### Dependencies\n
                        ${userInput.dependenciesCommon.join(', ')}
                        ${userInput.dependenciesOther}\n
                        ### Usage: Getting Started\n
                        ${userInput.usage}\n
                        ### Frequently Asked Questions\n
                        ${userInput.faq.trim()}\n
                        If you have other questions, please contact me on github or by email.\n
                        https://github.com/${userInput.authorGitHub} or ${userInput.authorEmail}\n
                        ### Tests\n
                        ${userInput.testFrameworks}
                        ${userInput.tests}\n
                        ## Plans for Future Development\n
                        ${userInput.future}\n
                        ## Report Issues\n
                        ${userInput.issues}\n
                        ## How to Contribute\n
                        ${userInput.contribute}\n
                        ## License\n
                        ${displayLicenseDescription(licenseType, userInput)}\n
                        ## Author\n
                        ### Name\n
                        ${userInput.authorName}\n
                        ### GitHub\n
                        ${userInput.authorGitHub}\n
                        ### Email\n
                        ${userInput.authorEmail}\n
                        ### LinkedIn\n
                        ${userInput.authorLinkedIn}\n
                        ### Portfolio\n
                        ${userInput.authorPortfolio}\n
                        ### About Author\n
                        ${userInput.authorAbout.trim()}\n
                        `;
                    }
    //Table of Contents Function Declaration                
          function generateToC(userInput) {
                return `## Table of Contents\n
                1. [About](#about)
                2. [Features](#features)
                3. [Media](#media)
                4. [Documentation](#documentation)
                    1. [Installation](#installation)
                    2. [Dependencies](#dependencies)
                    3. [Getting Started](#usage)
                    4. [Frequently Asked Questions](#faq)
                    5. [Tests](#tests)
                5. [Plans for Future Development](#future)
                6. [Report Issues](#issues)
                    7. [How to Contribute](#contribute)
                    8. [License](#license)
                    9. [Author](#author)`;
                }
