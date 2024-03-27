var http = require("http"); //node module
var fs = require("fs");
 var server = http.createServer((req,res)=> {
    console.log(req.url);


    if (req.url === "/") 
    {
        fs.readFile("index.html",(err,html) =>{
            res.write(html);
            res.end();

        })  ;
    }
    else if (req.url === "/urunler" ) {
             fs.readFile("product.html" ,(err,html) =>{
                res.write(html);
                res.end();

            });
            }
             else{
                fs.readFile("errors.html" , (err,html)=>{
                    res.write(html);  
                     res.end();
                })
    }
 
 })
 server.listen(3000,()=>{
    console.log("Başladı");
 })