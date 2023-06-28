const fs = require("fs");
// let folderPath = 'C:/Users/tommy/Desktop/New Folder';

let folderPath = fs.readFileSync("folderpath.txt", "utf-8");

let filenamestring = "";
fs.readdirSync(folderPath).forEach((fileName) => {
	filenamestring = filenamestring.concat(fileName, "\n");
});

fs.writeFileSync("filenames.txt", filenamestring);

console.log("Filenames have been written.");
