const fs = require('fs');
const request = require('request');

const args = process.argv;

const urlInput = args[2];
const localFilePathIn = args[3];


const pageFetchAndSave = function(URL, filePath) {

  // use for making the http request & wait for the response
  request(URL, (error1, response, body) => {
    if (error1) {
      console.log(`Returned the following error: ${error1}`);
    }
    
    // if error -> console.log error message, return
      
    fs.writeFile(filePath, body, error2 => {
      if (error2) {
        console.log(`Returned the following error: ${error2}`);
        return;
      }
      // file written successfully
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    });
  });
};



if (!urlInput || !localFilePathIn) {
  console.log("Bad input, please try again with two arguments:  [URL]  [local file path]");
} else {
  pageFetchAndSave(urlInput, localFilePathIn);
}

