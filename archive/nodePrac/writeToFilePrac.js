const { writeFile } = require('fs/promises');
const { join } = require('path');

const data = 'Hello World!';
const filePath = join(__dirname, 'output.txt');

async function writeToFile() {
  try {
    await writeFile(filePath, data, 'utf-8');
    console.log('File written successfully');
  } catch (err) {
    console.error('Error writing to file:', err);
  }
}

writeToFile();   