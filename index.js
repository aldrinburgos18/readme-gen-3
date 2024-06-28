// TODO: Include packages needed for this application\
import inquirer from "inquirer";
import fs from "fs";

import { generateMarkdown } from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "Enter your Github username: \n",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your e-mail address: \n",
  },
  {
    type: "input",
    name: "projTitle",
    message: "Enter the title of your project: \n",
  },
  {
    type: "input",
    name: "link",
    message: "Enter the link to your project's Github repository: \n",
  },
  {
    type: "input",
    name: "projDescription",
    message: "Please provide a brief description of the project: \n",
  },
  {
    type: "input",
    name: "installation",
    message: "Give a brief explanation on how to install your project: (N/A if no installation needed) \n",
  },
  {
    type: "input",
    name: "instructions",
    message: "Provide instructions for use: \n",
  },
  {
    type: "list",
    name: "license",
    message: "Please select your project's license: \n",
    choices: ["MIT", "lgpl-3.0", "mpl-2.0", "agpl-3.0", "unlicense", "apache-2.0", "gpl-3.0", "N/A"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide contributing guidelines: \n",
  },
  {
    type: "confirm",
    name: "confirmScreenshot",
    message: "Would you like to add some screenshots to your readme?",
    default: false,
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("./dist/readme.md", data, (err) => {
    if (err) throw err;

    console.log("Readme generated sucessfully! Check '/dist' folder.");
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then((projData) => {
    if (projData.confirmScreenshot) {
      return addScreenShot(projData);
    } else {
      return projData;
    }
  });
}

function addScreenShot(data) {
  if (!data.screenshots) {
    data.screenshots = [];
  }

  return inquirer
    .prompt([
      {
        type: "input",
        name: "screenshot",
        message: "Enter your screenshot's relative path without single quotes: (ex. './assets/img/screenshot1.png') \n",
      },
      {
        type: "input",
        name: "scDescription",
        message: "Enter a brief description about this screenshot: \n",
      },
      {
        type: "confirm",
        name: "confirmAddSC",
        message: "Would you like to add another screenshot? \n",
        default: false,
      },
    ])
    .then((scData) => {
      data.screenshots.push({
        screenshot: scData.screenshot,
        description: scData.scDescription,
      });

      if (scData.confirmAddSC) {
        return addScreenShot(data);
      }
      return data;
    });
}

// Function call to initialize app
init()
  .then((data) => generateMarkdown(data))
  .then((markdown) => {
    writeToFile(markdown);
  });
