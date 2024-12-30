const fs = require('fs');
const path = require('path');

const folderPath = '/Users/wyanhache/Downloads/2024';

// Read files from the folder and write them to a JSON file
fs.readdir(folderPath, (err, files) => {
    if (err) throw err;

    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)); // Filter image files
    fs.writeFileSync('images.json', JSON.stringify(images, null, 2)); // Save to JSON file
    console.log('Image list saved to images.json');
});