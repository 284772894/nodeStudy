/*
*
* node 模拟http请求
*  更多参考 https://nodejs.org/docs/latest-v0.12.x/api/http.html#http_class_http_clientrequest
*
* */
var http = require('http');
function testPost(){
    var querystring = require('querystring');
    var contents = querystring.stringify({
        format:'json',
        ip:'218.4.255.255'
    });
    var options = {
        //http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=218.4.255.255
        host: 'int.dpool.sina.com.cn',
        port: '80',
        gzip:true,
        path: '/iplookup/iplookup.php',
        method: 'POST',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
        }
    };
    var req = http.request(options, function(response) {
        response.setEncoding('utf8');
        //console.log("Got response: " + response.statusCode);
        response.on('data', function (data) {
            console.log(data);
        }).on('end', function(){
            //console.log(response.headers);
        }).on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });
    });
    req.write(contents);
    req.end();
}
/*
http.get(options, callback) http 模块还提供了一个更加简便的方法用于处
理GET请求：http.get。它是 http.request 的简化版，唯一的区别在于http.get
自动将请求方法设为了 GET 请求，同时不需要手动调用 req.end()。
*/
function testGet(){
    var i = 0;
    while(i < 3){
        setTimeout(function(){
            http.get('http://www.weather.com.cn/adat/sk/101010100.html', function(res) {
                res.setEncoding('utf8');
                res.on('data', function (data) {
                    console.log(data);
                }).on('error', function(){
                    console.log('problem with request: ' + e.message);
                });
            });
        },1000);

        i++;
    }
}
testGet();
testPost();




