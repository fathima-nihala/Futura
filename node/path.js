//path module
//interact with file
// Import the path module
var path=require('path')

// Define a file path
const a='C:\Windows\System32\cmd.exe'


// Get the base name of the file (the file name with extension)
console.log(path.basename(a))

// Get the directory name of the file (the path without the file name)
//const b=path.basename(a)
console.log(path.dirname(a))

// Parse the file path into an object with properties
console.log(path.parse(a))

