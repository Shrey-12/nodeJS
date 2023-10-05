const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.write('Welcome Ananto');
        // you can cheat by doing res.end('hello there')
    }
    else if (req.url === '/anant'){
        res.write('Youre not welcome');
    }
    else{
        res.end(`<h1>SHU go awaaaaay</h1>
        <a href"/">back to home</a>
        `);
    }
    res.end();
})

server.listen(5000);