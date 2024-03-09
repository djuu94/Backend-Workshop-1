const fs = require('fs');

// Läser talen från en fil
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const numbers = data.split(',').map(Number).sort((a, b) => a - b);

  // Skriver de sorterade talen till en annan fil
  fs.writeFile('output.txt', numbers.join(','), 'utf8', err => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }

    console.log('Sorted numbers have been written to output.txt');
  });
});