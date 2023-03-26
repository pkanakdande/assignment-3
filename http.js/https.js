const http=require("http")
const fs=require("fs")

fs.writeFileSync("index.html","<h1>Hello World</h1><p>this is Alexi</p>")

const read=fs.readFileSync("index.html","utf-8")

let server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end(read)
    }
})

server.listen(5000,()=>{
    console.log("server run")
})
