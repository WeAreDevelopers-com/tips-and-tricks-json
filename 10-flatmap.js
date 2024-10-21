const fs = require("fs");

// Import and parse the sample data
const jsonData = JSON.parse(fs.readFileSync("./data/sample.json", "utf-8"));

// Use flatMap to extract all hobbies into a flat array
const allHobbies = jsonData.flatMap((user) => user.hobbies);

console.log(allHobbies);
// Output: ["football", "cooking", "traveling", "photography", "running", "painting", "cycling", "beer brewing", "hiking"]
