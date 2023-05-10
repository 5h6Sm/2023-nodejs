const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(req, res){
    // console.log(req.method);
    console.log(req.url);
    res.setHeader('Content-type','text/html');
    if(req.url=='/'){
    fs.createReadStream(path.join(__dirname, 'html', 'index.html')).pipe(res);
}

});

server.listen(3333);