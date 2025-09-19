const fs = require("fs");

const readmePath = "readme.txt";

//Reading from the file that blocks execution untill reading is completed
// const data = fs.readFileSync("index.html");

// console.log(data.toString());

// //Reads data from the file : non-blocking
// fs.readFile("index.html", (err, data) => {
//     if (err) {
//         console.log("Couldn't read from the file");
//     }
//     console.log(data.toString());
// });

//console.log("File has been read.");

////Writes to the file
// fs.writeFile(readmePath, "Quick brown fox jumps over the lazy dog.", { flag: "a" }, (err) => {
//     if (err) throw err;
//     console.log("Data is written to the file.");
// });


// if (fs.existsSync(readmePath)) {
//     fs.unlink(readmePath, (err) => {
//         if (err) throw err;
//         console.log("File removed successfully");
//     });
// }
// else
//     console.log("File doesn't exist");

//Directory
if (!fs.existsSync("images")) {
    fs.mkdir("images", err => {
        console.log("Directroy is created.");
    });
}
else {
    fs.rmdir("images", (err) => {
        console.log("Directory removed successfully")
    });
}

