const fs = require("fs");

// Import and parse the sample data
const jsonData = JSON.parse(fs.readFileSync("./data/sample.json", "utf-8"));

// Clone JSON.stringify() serializes the entire object into a JSON string.
// JSON.parse() then deserializes that JSON string back into a brand new object.
const clonedData = JSON.parse(JSON.stringify(jsonData));

// Modify the clone without affecting the original
clonedData[0].address.city = "London";

console.log(clonedData[0].address.city); // London (new cloned object)
console.log(jsonData[0].address.city); // "Milan" (original is unchanged)
