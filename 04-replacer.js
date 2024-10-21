const fs = require("fs");

// Import and parse the sample data
const jsonData = JSON.parse(fs.readFileSync("./data/sample.json", "utf-8"));

// Selectively exclude fields (eg: email) using the 'replacer' function.
// The replacer is the second parameter of the 'stringify' method.
const filteredJson = JSON.stringify(
  jsonData,
  (key, value) => {
    return key === "email" ? undefined : value;
  },
  2
);

console.log(filteredJson); // Excludes email field
