var http = require('http');
var port = 8800;
const mysql=require('mysql');
const connetion=mysql.createConnection({
    host:'sqld.duapp.com' ,
    user:'Wbiokeo',
    password:'c010!71286'
});

connetion.connect();

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var body = ' \
        <html> \
            <head> \
                <meta charset="utf-8"> \
                <title>Welcome to BAE</title> \
            </head> \
            <body> \
                <h4>Welcome to Baidu App Engine!</h4> \
                <h2>欢迎开启BAE之旅fffffffffffffffffffffffff！</h2> \
                <br> \
                <br> \
                <ul>以下链接可能对您有用：</ul> \
                <ul><a href="https://bce.baidu.com/doc/BAE/QuickGuide.html" target="_blank">入门指南</a></ul> \
                <ul><a href="http://developer.baidu.com/forum/topic/list?boardId=66" target="_blank">论坛</a></ul> \
                <ul><a href="http://www.baeblog.com/" target="_blank">技术博客</a></ul> \
                <ul><a href="http://weibo.com/baiduappengine" target="_blank">微博</a></ul> \
                <ul><a href="https://bce.baidu.com/doc/BAE/FAQ.html" target="_blank">常见问题</a></ul> \
            </body> \
        </html> \
    ';
    res.write('<h1>HHHHHHHHHHH</h1>')
    res.write(body);
    res.end();
}).listen(port);
