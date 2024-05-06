import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer.prompt([
   {message : "what is the url of site of which  u want to generate a Qr",name: "URL"  }
  ])
then((answers) => {
 console.log(answers);   
  })

.catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  
/*var qr_svg = qr.image(inquirer, { type: 'png' });
console.log(qr_svg);
 
fs.writeFile("message.txt",inquirer, (err) => {
    if (err) throw 'err';
    console.log("qr code is here")
})