export const generateLicense = (license) => {
  console.log(license);
  switch (license) {
    case "MIT":
      return `![](https://img.shields.io/badge/License-MIT-yellow.svg)  
          A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.  
          *[More Information about this license...](https://opensource.org/licenses/MIT)*`;
    case "lgpl-3.0":
      return `![](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)  
          Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.  
          *[More Information about this license...](https://www.gnu.org/licenses/lgpl-3.0)*`;
    case "mpl-2.0":
      return `![](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)  
          Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.  
          *[More Information about this license...](https://www.mozilla.org/en-US/MPL/2.0/)*`;
    case "agpl-3.0":
      return `![](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)  
          Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.  
          *[More Information about this license...](https://www.gnu.org/licenses/agpl-3.0)*`;
    case "unlicense":
      return `![](https://img.shields.io/badge/license-Unlicense-blue.svg)  
          A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.  
          *[More Information about this license...](http://unlicense.org/)*`;
    case "apache-2.0":
      return `![](https://img.shields.io/badge/License-Apache%202.0-blue.svg)  
          A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.  
          *[More Information about this license...](https://opensource.org/licenses/Apache-2.0)*`;
    case "gpl-3.0":
      return `![](https://img.shields.io/badge/License-GPLv3-blue.svg)  
          This program comes with ABSOLUTELY NO WARRANTY. This is free software, and you are welcome to redistribute it under certain conditions  
          *[More Information about this license...](https://www.gnu.org/licenses/gpl-3.0)*`;
    default:
      return `No license selected.`;
  }
};
