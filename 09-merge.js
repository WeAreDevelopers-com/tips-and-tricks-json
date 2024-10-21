const fs = require("fs");

// Import and parse the sample data
const jsonData = JSON.parse(fs.readFileSync("./data/sample.json", "utf-8"));

// New data to merge
const newData = {
  name: "New User",
  age: 25,
  address: { city: "Berlin" },
};

// Merge two JSON objects.
// The shallow merge will mean existing values are overwritten by new ones.
const mergedData = { ...jsonData[0], ...newData };
console.log(mergedData); // Merges newData into the first object.
