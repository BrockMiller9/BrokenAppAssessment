const axios = require("axios");
const fs = require("fs/promises");
const process = require("process");

// get the filename from the command line argument
const filename = process.argv[2];

// check if the filename is provided
if (!filename) {
  console.error("Please provide a filename");
  process.exit(1);
}

// define an async function to handle the logic
async function main() {
  try {
    // read the file contents
    const data = await fs.readFile(filename, "utf8");

    // split the data by line breaks
    const urls = data.split("\n");

    // loop through each url
    for (let url of urls) {
      // trim any whitespace
      url = url.trim();

      // skip empty lines
      if (!url) continue;

      // get the hostname from the url
      const hostname = new URL(url).hostname;

      // make a GET request to the url using axios
      const response = await axios.get(url);

      // get the html from the response data
      const html = response.data;

      // write the html to a new file using the hostname as the filename
      await fs.writeFile(hostname, html);

      // log a success message
      console.log(`Saved ${url} to ${hostname}`);
    }
  } catch (error) {
    // handle any errors
    console.error(error);
  }
}

// call the main function
main();
