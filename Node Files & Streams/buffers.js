
///Buffers

const buffer1 = Buffer.alloc(10);
buffer1.write("Hi Aamir!");
const buffer2 = new Buffer("Hello Aamir!!");
const buffer3 = Buffer.from([10, 30, 40, 90, 34]);

console.log(buffer1.toString());
console.log(buffer2.toString());

let content = "";
for (let i = 0; i < buffer3.length; i++) {
    content += `${buffer3[i]} `;
}
console.log(content);

console.log("Buffer 3 end reading");

//Display the integer value from buffer
console.log(buffer3.readUInt8(0));
console.log(buffer3.readUInt8(1));
console.log(buffer3.readUInt8(2));

buffer1.copy(buffer2);

console.log("Buffer 2 reading starts");

for (let i = 0; i < buffer2.length; i++) {
    console.log(buffer2[i].toString());
}

console.log("Buffer 2 reading ends");

const buff4 = Buffer.alloc(27);
let char = 65;
for (let index = 0; index < 26; index++) {
    buff4[index] = char + index;
}

console.log(buff4.toString("ascii", 0, 26));


console.log("Buffer4 ends");