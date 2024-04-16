const fs = require("fs")
filename=process.argv[2]
filename = filename.toString()
buffer = fs.readFileSync(filename, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    else{
    console.log(data);
    content=buffer.toString()
    newline_array=content.split("\n")
    console.log(newline_array.length-1)
    }});
console.log("Yes")

