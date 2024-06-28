import { generateLicense } from "./generateLicense.js";

function renderScreenShot(data) {
  return `## Screenshots
    ${data
      .map(({ screenshot, description }) => {
        return `
${description}
![${description}](${screenshot})
`;
      })
      .join("\r\n")}
    `;
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(data) {
  return `
  # ${data.projTitle}
  ## Description
  ${data.projDescription}  
    
  **Link to deployed application:** [${data.link}](${data.link})
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage) ${data.screenshots ? "\n  - [Screenshots](#screenshots)" : ""}
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [License](#license)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.instructions}
  ${data.confirmScreenshot ? renderScreenShot(data.screenshots) : ""}
  ## Contributing
  ${data.contributing}
  
  ## Questions
  If you have any additional questions, please feel free to contact me at:  
  E-mail: ${data.email}  
  Github: [${data.username}](https://github.com/${data.username})
  
  ## License
  ${generateLicense(data.license)}
  `;
}
