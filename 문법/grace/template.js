const http = require('http');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const index = {
    food1 : '내가 만든 쿠키',
    food2 : '미역국',
    food3 : '음료수'
};
const food = ['내가 만든 쿠키', '미역국', '음료수'];

const server = http.createServer(function(req, res){
    // console.log(req.method);
    console.log(req.url);
    res.setHeader('Content-type','text/html');
    if(req.url=='/'){
        // fs.createReadStream(path.join(__dirname, 'html', 'index.html')).pipe(res);
        //renderfile(ejs대상경로, ejs에 넘겨줄 데이터, 이후에 실행할 callback함수)
        ejs.renderFile(path.join(__dirname, 'template', 'index.ejs'),
        {food} //ejs 인자 전달\
        //데이터를 넘겨받은 ejs 코드(data)를 클라이언트에게 보낸다.
    ). then((data)=> res.end(data));
        // function(err, data){
        //     res.end(data);
        // }

    }else if(req.url=='/food'){
        fs.createReadStream(path.join(__dirname, 'html', 'food.html')).pipe(res);
    }else{
        fs.createReadStream(path.join(__dirname, 'html', '404.html')).pipe(res);

    }
});

server.listen(3333);