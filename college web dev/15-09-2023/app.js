const http=require('http');
const fs=require('fs');
const home=fs.readFileSync('home.html');
const contact=fs.readFileSync('contact.html');
const service=fs.readFileSync('service.html');
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
  
    if(req.url==='/'{
        res.write(home);
    }
    else if(req.url==='/contact.html'){
        res.write(contact);
    }
    else{
        res.write(service);
    }
    res.end();
    });
