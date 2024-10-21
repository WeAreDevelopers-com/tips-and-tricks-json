const fs = require("fs");

// Import and parse the sample data
const jsonData = JSON.parse(fs.readFileSync("./data/sample.json", "utf-8"));



// Pretty print the data using the stringify method.
// The third parameter handles indentation.
const prettyJson = JSON.stringify(jsonData, null, 2);




console.log(prettyJson);
