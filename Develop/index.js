// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./Develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Please provide a description for your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions for your project"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the usage for your project"
    },
    {
        type: "input",
        name: "license",
        message: "Please provide the proejct license that you would like (MIT or GNU)"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributers"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repository link?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
inquirer
    .prompt(questions)
    .then(function(data){
        const URL = `https://api.github.com/users/${data.username}`;
        axios.get(URL)
        .then(function(response) {
            const gitInfo = {
                gitImage: response.data.avatar_url,
                email: response.data.email,
                profile: response.data.html_url,
                name: response.data.name
            };

            fs.writeFile("README.md", generateMarkdown(data, gitInfo), function(err) {
                if (err) {
                    throw err;
                } else {
                    console.log("README file has been successfully created!")
                };
            })
        })
    })
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

