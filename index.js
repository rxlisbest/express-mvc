var express = require('express');
var expressControllers = require('express-controller');
var app = express();
var router = express.Router();
var ejs = require('ejs');

// 全局变量
root = __dirname; // 根目录
config = require('./core/Config'); // 加载config
model = require('./core/Model'); // 加载model

app.get('/', function (req, res) {
    res.send('Hello World!');
});

//路由控制
app.use(router);

//绑定控制器
expressControllers
    .setDirectory( __dirname + '/application/controllers')
    .bind(router);

// 视图配置
app.engine('html', ejs.__express);
app.set('views', __dirname + '/application/views');
app.set('view engine', 'html');

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});