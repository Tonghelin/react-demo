const  express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userRouter = require('./user');   // 1. 引入user.js(所有跟user相关的抽离成一个文件)
// 连接 mongo
//新建app
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());

// 2. app.use('前缀',)  // 开启一个中间键,如果这个中间键是一个路由的话，先输入前缀，
app.use('/user',userRouter)

// 监听服务
app.listen(9093,function () {
  console.log('Node app start at port 9093');
})