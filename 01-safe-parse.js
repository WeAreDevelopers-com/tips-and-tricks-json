const fs = require("fs");

// Import and parse the sample data
const jsonData = fs.readFileSync("./data/sample.json", "utf-8");

// Parse the JSON inside of a try/catch block
try {
  const parsedData = JSON.parse(jsonData);
  console.log("parsedData:", parsedData);
} catch (error) {
  console.error("Invalid JSON:", error.message);
}

// Create inline JSON with errors in for demo purposes
const badJsonString = '{"name": "John", "age": 30'; // Note: Missing closing }

try {
  const badData = JSON.parse(badJsonString);
} catch (error) {
  console.error("Invalid JSON:", error.message); // Invalid JSON: Unexpected end of JSON input
}
