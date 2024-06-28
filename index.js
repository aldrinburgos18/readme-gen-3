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
    validate: (usernameInput) => {
      if (usernameInput) {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your e-mail address: \n",
    validate: function (email) {
      // Regex mail check (return true if valid mail)
      return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
        email
      );
    },
  },
  {
    type: "input",
    name: "projTitle",
    message: "Enter the title of your project: \n",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "link",
    message: "Enter the link to your project's Github repository: \n",
    validate: (linkInput) => {
      if (linkInput) {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "projDescription",
    message: "Please provide a brief description of the project: \n",
    validate: (descInput) => {
      if (descInput) {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Give a brief explanation on how to install your project: (N/A if no installation needed) \n",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "instructions",
    message: "Provide instructions for use: \n",
    validate: (instructionsInput) => {
      if (instructionsInput) {
        return true;
      }
    },
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
    validate: (contributingInput) => {
      if (contributingInput) {
        return true;
      }
    },
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
        validate: (screenshotInput) => {
          if (screenshotInput) {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "scDescription",
        message: "Enter a brief description about this screenshot: \n",
        validate: (screenshotDescriptionInput) => {
          if (screenshotDescriptionInput) {
            return true;
          }
        },
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
