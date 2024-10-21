// Create simple sample data object
const sampleJson = {
  name: "John",
  age: 30,
  city: "New York",
};

// Function to convert JSON to query string
function jsonToQueryString(json) {
  return Object.keys(json)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(json[key]))
    .join("&");
}

// Call function on sample JSON
const queryString = jsonToQueryString(sampleJson);
console.log(queryString);
