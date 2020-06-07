var fs=require('fs');
fs.readFileSync("file.txt",(err,data)=>{
    console.log(data.toString());
});
console.log("hello");