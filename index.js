// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input

    //License Type Constructor Function Declaration
    function licenseTypeConstructor(userInput) {
        return new Promise((resolve, reject) => {
            let licenseType = userInput.license;
            if (userInput.license === 'None') {
                licenseType = 'None';
                resolve(licenseType);
            } else if (userInput.license === 'Other') {
                licenseType = userInput.licenseOther;
                resolve(licenseType);
            } else {
                resolve(licenseType);
            }
            reject('An error occurred while defining the license type');
        });
    }

 //License Description Function Declaration
function displayLicenseDescription(licenseType) {
    let licenseInfo = '';
    if (licenseType === 'None') {
        licenseInfo = 'No license. All rights reserved.';
        } else if (licenseType === "Other") {
            licenseInfo = `Licensed under ${licenseType}`;
        } else {
            licenseInfo = `Licensed under [${licenseType}](https://choosealicense.com/licenses/${licenseType})`;
        }
        return licenseInfo;
    }

// FUNCTION DECLARATION: README GENERATOR
    function generateReadme(userInput, licenseType, licenseInfo) {

        const licenseBadge = "https://img.shields.io/badge/License-" + licenseType + "-blue.svg"

        var includeTestFrameworks = false;
        var readmeTesting = '';
        
        if (userInput.testFrameworks() !== '') {
            includeTestFrameworks = true;
            readmeTesting = `\n### Tests\n${userInput.testFrameworks}\n${userInput.tests}\n`;
        }
        
        console.log('Include Test Frameworks:', includeTestFrameworks, 'Include this testing info in readme:', readmeTesting);
        
        var commonDependencies = userInput.dependenciesCommon;
        var otherDependencies = userInput.dependenciesOther;
        
        if (commonDependencies === 'None') {
            commonDependencies = '';
        } else {
            commonDependencies = userInput.dependenciesCommon.join(', ');
        }
        
        if (otherDependencies.toLowerCase() !== '') {
            otherDependencies = userInput.dependenciesOther;
        } else {
            otherDependencies = null;
        }
        
        console.log('Common Dependencies:', commonDependencies);
        console.log('Other Dependencies:', otherDependencies);
        
        var allDependencies = '';
        if (otherDependencies !== null) {
            allDependencies = {commonDependencies, otherDependencies};
        } else {
            allDependencies = `\n### Dependencies\n\n${commonDependencies}\n`;
        }

        if (commonDependencies === '' && otherDependencies === null) {
            allDependencies = '';
        }
        

        console.log('Common Dependencies:', commonDependencies, 
        'Other Dependencies:', otherDependencies, 
        'All Dependencies:', allDependencies);


        var tagline = userInput.tagline;
        if (tagline !== '') {

        tagline = `\n${tagline}\n`;
        
        
    //The templtate literal for the README file
    return `# ${userInput.appName}${tagline}

![License Badge](${licenseBadge})
${generateToC()}

Find this app at ${userInput.link}

## Description

### About

${userInput.about}

### Features

${userInput.features}

### Check out ${userInput.appName} in Action

![Screenshot/Demo](${userInput.media})

## Documentation

### Installation

${userInput.installation}${allDependencies}

### Usage: Getting Started

${userInput.usage}

## Frequently Asked Questions

${userInput.faq.trim()}${readmeTesting}
## Plans for Future Development

${userInput.future}

## Report Issues

${userInput.issues}

## How to Contribute

${userInput.contribute}

## License

${licenseInfo}

## About the Author

### Name

${userInput.authorName}

### GitHub

${userInput.authorGitHub}

### Email

${userInput.authorEmail}

### LinkedIn

${userInput.authorLinkedIn}

### Portfolio

${userInput.authorPortfolio}

### About Author

${userInput.authorAbout}
`;
        } 

//Table of Contents Function Declaration                
function generateToC(includeTestFrameworks) {
    let testSection = '';
    if (includeTestFrameworks === true) {
        testSection = '\n[Tests](#tests)\n';
    }
    console.log('Test Section:', testSection);
    return `
## Table of Contents

[About](#about)  
[Features](#features)  
[Installation](#installation)  
[Dependencies](#dependencies)  
[Getting Started](#usage-getting-started)  
[Frequently Asked Questions](#frequently-asked-questions)${testSection}  
[Plans for Future Development](#plans-for-future-development)  
[Report Issues](#report-issues)  
[How to Contribute](#how-to-contribute)  
[License](#license)  
[About the Author](#about-the-author)`;
    }


var promptsToUser = [
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
    validate: (input) => {
        if (input.toLowerCase() === '') {
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
    type: 'editor',
    name: 'about',
    message: 'What is your application about? What probem does it solve? What is its purpose?',
},
//Features
{
    type: 'editor',
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
        if (input.toLowerCase() === '') {
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
    default: 'Q:\nA:\nQ:\nA:\nQ:\nA:',
},
//Tests
{
    type: 'input',
    name: 'testFrameworks',
    message: 'What frameworks have been used to test your application? (type SKIP to skip)',
    validate: function(input) {
        if (input.toLowerCase() === '') {
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
        return answers.testFrameworks.toLowerCase() !== 'skip';
    },
    validate: function(value) {
        if (value.length || value.toLowerCase() === '') {
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
        { name: 'MIT' },
        { name: 'GNU' },
        { name: 'Apache' },
        { name: 'Unlicense' },
        { name: 'Other' },
        { name: 'None' }
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
    .prompt(promptsToUser)

// FUNCTION CALL with a callback function as an argument to write the README file
.then((answers) => {
    const userInput = answers;
    console.log('User input has been collected:', userInput);

    for (const key in userInput) {
        if (typeof userInput[key] === 'string' && userInput[key].toLowerCase() === 'skip') {
            userInput[key] = ''; // Reassigns the value of skip to an empty string
        }
        console.log(`${key}: ${userInput[key]}`);
    }

    return licenseTypeConstructor(userInput)

.then((licenseType) => {
        console.log('The license type is:', licenseType);
        const licenseInfo = displayLicenseDescription(licenseType, userInput);
        const readme = generateReadme(userInput, licenseType, licenseInfo);
        
        return { readme };
    });
})

.then(({ readme }) => {
    fs.writeFile(`README.md`, readme, (err) => {
        if (err) {
            console.error('An error occurred while writing the file:', err);
        } else {
            console.log('Your README file has been written successfully!');
        }
    });
}).catch((error) => {
    console.error('An error occurred:', error);
});}