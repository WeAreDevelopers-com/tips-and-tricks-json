// Example arrays
const keys = ["name", "age", "city", "occupation"];
const values = ["Alice", 28, "London", "Engineer"];

// Function to dynamically generate JSON from two arrays (keys and values)
function generateJSON(keys, values) {
  const result = {};

  // Loop through the keys array, and for each key, assign the corresponding value from the values array
  keys.forEach((key, index) => {
    result[key] = values[index];
  });

  return result;
}

// Generate the JSON object from the arrays
const jsonObject = generateJSON(keys, values);
console.log(jsonObject);
