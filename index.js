// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs");
const axios = require("axios");
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
        name: "badge",
        message: "Please provide the proejct license that you would like (MIT or GNU)"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributors"
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

            const writeFile = data => {
                fs.writeFile('README.md', data, err => {
                    // if there is an error 
                    if (err) {
                        console.log(err);
                        return;
                    // when the README has been created 
                    } else {
                        console.log("Your README has been successfully created!")
                    }
                })
            }; 
    
// TODO: Create a function to initialize app
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
                    console.log("README file successfully created!")
                };
            })
        })
    })

    function init() {}
// Function call to initialize app
init();

