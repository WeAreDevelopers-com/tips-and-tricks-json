

function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
}

console.log(isValidJSON('{"name": "Alice"}')); // true
console.log(isValidJSON("Invalid JSON string")); // false


