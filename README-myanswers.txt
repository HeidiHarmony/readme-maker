# README-Maker

We save you time in creating your readme documentation so you can spend more time on the important stuff


## About

- What is it? README-Maker is a simple command line application that assembles a professional README.md document by answering a few standard questions
- 
- Why use README-Maker?
- Save time with README-Maker! You won’t need to save a separate template document, refer to other readmes, figure out how to add a badge, or even remember everything you want to include in your readme! README-Maker is like a wizard, guiding you step by step, and then whips up your document in seconds.
- 
- How README-Maker Works
- README-Maker merges the answers you provide with terminal prompts to compile a readme that is ready to use. You may add to the generated file to your heart's content (I recommend brushing up on proper Markdown syntax or utilize problem checking in your IDE so your readme is polished and professional.)
- What I learned along the way
    Because many of my past projects I had to submit due to time constraints before they were really ready to present, I wanted to make this project as complete as possible. In so doing I really stretched myself to understand the flow of the program and what information needed to be calculated and passed from function to function. In so doing I had to make myself a flow chart, particularly to conceptualize how to collect the license information that could be from a list of choices or provided by the user, and then appropriately use and manipulate those values for various possible circumstances. 
    
    Hours upon hours were spent pouring over this code with my friends Xpert, Copilot, and ChatGPT, along with one tutoring session with Patrick Meehan. It felt like every time I fixed one thing, I broke another, and was constantly troubleshooting errors and never getting to the actual file creation. One thing I would do differently, now that I have learned from this experience, is I would create an external file for my inquirer questions, and create a second file with a short list of questions for debugging.

    One final thing worth stating about using Copilot is actually a warning. I have heard people discourage use of it because you aren't demonstrating your own proficiency with the syntax if you let Copilot enter it for you. While I agree that is true to a certain extent, I also would caution other developers to be very cautious using it because sometimes if you accept Copilot's suggested fix, even if what you can see looks correct, if you don't scroll down all the way and carefully compare the existing code to the fix, you might find yourself with duplicate code chunks you never would have added of your own accord, and you might also lose code chunks that you never, ever would have deleted intentionally and have to figure out how to recover them.


## Features

- What makes README-Maker stand out
Get up and running quickly! With the ability to skip some questions, README-Maker is flexible and can fit any project.

### Watch README-Maker in Action

## Documentation

### Installation

First, Node.js needs to be downloaded and installed on your computer. Get Node at: (https://nodejs.org/en/download). Then install the Inquirer module inside of README-Maker's root directory from the command line by typing 'npm install inquirer'.

### Dependencies

Inquirer, FS

### Getting Started
Once you have performed the necessary installation, gather your thoughts and files. 
Make sure you have saved a screenshot or video file of your application in the root directory. It is recommended to keep some notes throughout work on your project about things you want to include as they come to mind, which will save you time later. Once your readme has been generated, don't forget to move it out of the output folder and into your root directory to make it easy to locate for your users.

## Frequently Asked Questions

Q: What if I have something to add to the readme that isn't in one of the prompts?
A: The easiest way to address this is to add your information into the readme once it has been generated. More customization options will be available in future updates.
Q: What if I want my license badge to be a different color?
A: In the generated readme, you can see that the badge is actually generated online using the license information you provide. At the end of the file name where it says '-blue' you can change that to be whatever color you like. See (https://shields.io/badges) for more information and customization options.
Q: What if I want to financially support the developer as she goes through coding bootcamp as a single working mom?
A: If you love README-Maker and want to help me continue to develop this application to its fullest, any financial contributions would be welcome! I have both Paypal and Venmo

## Future Development

- The ability to add multiple media files from the command line
- Let the user customize their own headings and have the names reflect in the table of contents
- let the user add an additional section to their readme
- With this beta product created, my next task would be to set up testing using Jest. During my manual testing, I only entered answers for the things I thought were the most complicated scenarios to see if the data was handled correctly. I would like to feed it some additional scenarios without having to go through multiple rounds of answering the same long list of questions every time.

## Report Issues
The best way to report an issue is through github directly by adding a new issue. Alternatively, you may email me and include README-Maker in the subject line.

## How to Contribute
Contributors welcome! Fork the README-Maker repo and add your feature ideas. If you want to collaborate directly on the project, please email me to begin a dialogue.

## License
MIT

## About the Author
Heidi Harmony Carrier

github
Heidi Harmony
tenibrae@gmail.com

<hr>

Future development: modify the inquirer prompt to allow the user to indicate how many choices they need and provide the file names as answers for each choice

const inquirer = require('inquirer');

// Prompt to ask the user for the number of choices
inquirer.prompt({
    type: 'input',
    name: 'numChoices',
    message: 'How many choices do you need to provide file names for?',
}).then((answers) => {
    const numChoices = parseInt(answers.numChoices);

    // Dynamically generate prompts based on the number of choices
    const prompts = [];
    for (let i = 0; i < numChoices; i++) {
        prompts.push({
            type: 'input',
            name: `choice${i + 1}`,
            message: `Enter the file name for choice ${i + 1}:`,
        });
    }

    // Ask the user for file names for each choice
    inquirer.prompt(prompts).then((fileAnswers) => {
        console.log('File names for each choice:');
        console.log(fileAnswers);
    });
});

<hr>