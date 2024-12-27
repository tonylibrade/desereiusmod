function processEncoding(encoding) {
  for (const key of Object.keys(encoding)) {
    console.log(`Key: ${key}, Value: ${encoding[key]}`);
    // You can add more processing logic here
  }
}

// Example usage
const encoding = {
  format: 'json',
  version: '1.0',
  author: 'John Doe'
};

processEncoding(encoding);
