const fs = require("fs");
// let folderPath = 'C:/Users/tommy/Desktop/New Folder';

let folderPath = fs.readFileSync("folderpath.txt", "utf-8");

let filenames = [];
filenames = fs.readFileSync("filenames.txt", "utf-8").split("\n");

let counter = 0;

fs.readdirSync(folderPath).forEach((fileName) => {
	let oldPath = folderPath + "/" + fileName;
	let newPath = folderPath + "/" + filenames[counter];
	fs.renameSync(oldPath, newPath);
	counter++;
});

console.log("Filenames have been changed.");
