const http=require('http');

const server=http.createServer((req,res)=>{

    res.setHeader('Content-Type','text/html');
    res.statusCode=200;
    res.write('hello world'); 

})
server.listen(3000);