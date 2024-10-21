const fs = require("fs");

// Import and parse the sample data
// Transform properties at the same time using the reviver function
const jsonData = JSON.parse(
  fs.readFileSync("./data/sample.json", "utf-8"),
  (key, value) => {
    if (key === "date") {
      return new Date(value);
    }
    return value;
  }
);

// Find a single date to check it has been converted correctly
console.log(jsonData[0].transactions[0].date instanceof Date);
