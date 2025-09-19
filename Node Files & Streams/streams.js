const fs = require("fs");
const readmePath = "readme.txt";

const writeStream = fs.createWriteStream("readme-copy.txt");

const readStream = fs.createReadStream(readmePath);

readStream.on("open", () => console.log(`Read Stream opened.`));

readStream.on("end", () => console.log("Stream reading completed!"));

readStream.on("close", () => console.log(`Reading stream closed.`));

// readStream.on("data", (chunk) => {
//     console.log("\nData Chunk Arrived\n");
//     //console.log(chunk.toString());
//     //writeStream.write(chunk);
// });

/// Using pipes with streams
//readStream.pipe(writeStream);


//Handling Backpressure manually, although node handles it automatically.
readStream.on("data", (chunk) => {
    if (!writeStream.write(chunk)) {
        readStream.pause();
        writeStream.once("drain", () => {
            console.log(`draining ...`);
            readStream.resume();
        });
    }
});

//When reading is finished, end writeStream.
readStream.on("end", () => {
    writeStream.end();
});