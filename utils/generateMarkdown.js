// Function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  if (license === "GNU AGPLv3") {
    return "[!https://img.shields.io/badge/License-AGPL_v3-blue.svg]"
  }
  if(license === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
  }
  if (license === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]"
  }
  if (license === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]"
  }
  if (license === "Apache 2.0 License") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
  }  
  if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  }
  if (license === "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]"
  }
  if (license === "The Unlicense") {
    return "[![License](https://img.shields.io/badge/License-Unlicense-blue.svg)]"
  }
  if (license === "") {
    return ""
  }
  }

// Function that returns the license link

function renderLicenseLink(license) {
  if (license === "GNU AGPLv3") {
    return "https://www.gnu.org/licenses/agpl-3.0"
  }
  if(license === "GNU GPLv3") {
    return "https://www.gnu.org/licenses/gpl-3.0"
  }
  if (license === "GNU LGPLv3") {
    return "https://www.gnu.org/licenses/lgpl-3.0"
  }
  if (license === "Mozilla Public License 2.0") {
    return "https://opensource.org/licenses/MPL-2.0"
  }
  if (license === "Apache 2.0 License") {
    return "https://opensource.org/licenses/Apache-2.0"
  }  
  if (license === "MIT License") {
    return "https://opensource.org/licenses/MIT"
  }
  if (license === "Boost Software License 1.0") {
    return "https://www.boost.org/LICENSE_1_0.txt"
  }
  if (license === "The Unlicense") {
    return "http://unlicense.org/"
  }
  if (license === "") {
    return ""
  }
}


// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}

  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ### Questions
  To request additional information: 
  Find me on GitHub: [${data.username}]<br /><br />
  Email me with any questions: ${data.email}

  ## License
  This application is covered by the ${data.license} license: ${renderLicenseLink(data.license)}.

`;
}

module.exports = generateMarkdown;
