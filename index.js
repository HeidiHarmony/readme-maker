// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

function initializify() {
    console.log('Initializing Node.js application...');
  }
  
  // Call the initializeApp function to initialize your application
  initializify();
  
// TODO: Create an array of questions for user input
var questions = [];

inquirer
    .prompt ([
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
            },
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
        type: 'editor',
        name: 'tests',
        message: 'What else does the user need to know about testing? Possible topics include: test set up, structue, how to run, coverage, results, etc.',
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
    //About Author
    {
        type: 'input',
        name: 'authorAbout',
        message: 'What would you like people to know about you?',
    },
    ])

    function licenseTypeConstructor(answers) {
        if (answers.license !== license.name.other) {
            licenseType = answers.license.toLowerCase();
        } else {
            licenseType = answers.licenseOther.toLowerCase();
        }
    
        return licenseType;
    }

    licenseTypeConstructor(answers);

    // function to write the README file
    inquirer
    .then((answers) => {
        const readme = generateReadme(answers);
        const outputDir = 'readme-maker-output';
        fs.mkdirSync(outputDir, { recursive: true });
        fs.writeFile(`${outputDir}/README.md`, readme, (err) => {
            if (err) throw err;
            console.log('Your README file has been created successfully!');
        }); // Remove the extra closing parenthesis here
    })

    // function to generate the README file
        function generateReadme(answers) {
            const licenseBadge = `![License](https://img.shields.io/badge/license-${licenseType}-blue.svg)`;
                        `${answers.appName}\n
                        ${answers.tagline}\n
                        ${licenseBadge}\n
                        ## Description\n
                        ### About\n
                        ${answers.about}\n
                        ### Features\n
                        ${answers.features}\n
                        ### Watch ${answers['app-name']} in Action\n
                        ![Media](${answers.media})\n
                        ## Documentation\n
                        ### Installation\n
                        ${answers.installation}\n
                        ### Dependencies\n
                        ${answers.dependenciesCommon.join(', ')}
                        ${answers.dependenciesOther}\n
                        ### Usage: Getting Started\n
                        ${answers.usage}\n
                        ### Frequently Asked Questions\n
                        ${answers.faq.trim()}\n
                        If you have other questions, please contact me on github or by email.\n
                        https://github.com/${answers.authorGitHub} or ${answers.authorEmail}\n
                        ### Tests\n
                        ${answers.testFrameworks}
                        ${answers.tests}\n
                        ## Plans for Future Development\n
                        ${answers.future}\n
                        ## Report Issues\n
                        ${answers.issues}\n
                        ## How to Contribute\n
                        ${answers.contribute}\n
                        ## License\n
                        ${displayLicenseDescription(answers)}\n
                        ## Author\n
                        ### Name\n
                        ${answers.authorName}\n
                        ### GitHub\n
                        ${answers.authorGitHub}\n
                        ### Email\n
                        ${answers.authorEmail}\n
                        ### LinkedIn\n
                        ${answers.authorLinkedIn}\n
                        ### Portfolio\n
                        ${answers.authorPortfolio}\n
                        ### About Author\n
                        ${answers.authorAbout.trim()}\n
                        `;
                    }
                    
            function generateToC(answers) {
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

    //License Description Function

    function displayLicenseDescription(answers) {
        let description = '';
        const licenseLink = `https://choosealicense.com/licenses/${answers.license.toLowerCase()}`;
            switch (answers.license) {
                case 'MIT':
                    return "MIT License\nA short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.\n" + licenseLink;
                case 'GNU':
                    return "GNU License\nA copyleft license that requires anyone who distributes your code or a derivative work to make the source available under the same terms.\n" + licenseLink;
                case 'Apache':
                    return "Apache License\nA permissive license whose main conditions require preservation of copyright and license.\n" + licenseLink;
                case 'Unlicense':
                    return "Unlicense\nA public domain dedication intended to allow reuse of code with minimal restrictions.\n" + licenseLink;
                case 'Other':
                    return `Other: ${answers.licenseOther}`;
                case 'None': 
                    return "No license. All rights reserved.";
        }
            return description + licenseLink;
    }
    

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
