const fs = require('fs');
const url = 'https://podcast.ucsd.edu/watch/sp23/cse150b_a00'; // Replace with the URL of the page you want to fetch
fetch(url)
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const track = doc.querySelector('track');
    
    if (track) {
      const src = track.getAttribute('src');
      console.log(src);
    } else {
      console.log('No <track> tag found on the page.');
    }
  })
  .catch(error => console.error(error));



fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  
  const lines = data.split('\n');
  let concatenatedText = '';
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/^\d/)) { // Check if the line starts with a number
      const parts = lines[i].split(' --> '); // Split the line into start and end timestamps
      
      // Loop over the remaining lines until the next numbered line and concatenate the text
      for (let j = i + 1; j < lines.length && !lines[j].match(/^\d/); j++) {
        concatenatedText += lines[j].trim() + ' ';
      }
    }
  }
  
//   console.log(concatenatedText);
});