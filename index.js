// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',

        name: 'title',  

    },{ type: 'input',
        message: 'What is description of your project?',

        name: 'description',


    },{ type: 'input',
        message: 'What are the installation instructions?',

        name: 'usage',

    },{ type: 'input',
        message: 'What are the contribution guidelines?',

        name: 'Contribution guidelines',

    },{ type: 'input',
        message: 'What are the test instructions?',

        name:'test instructions',

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer. prompt(questions)
    .then(data => {
    const markdown = generateMarkdown(data)
    writeToFile('ReadMe.md',markdown)
    console.log ('Completed ReadMe')
    })
}

// Function call to initialize app
init();
