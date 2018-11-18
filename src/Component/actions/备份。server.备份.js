const  express = require('express');
const userRouter = require('../../../server/user');   // 1. 引入user.js(所有跟user相关的抽离成一个文件)
// 连接 mongo
const mongoose = require('mongoose');
const DB_URL = 'mongodb://127.0.0.1:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function () {
  console.log('mongodb开启本地服务');
})
//新建app
const app = express();
// 类似于mysql的表， mongo里有文档、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user: {
    type:String,
    require: true
  },
  age:{
    type: Number,
    require: true
  }
}));

// 2. app.use('前缀',)  // 开启一个中间键,如果这个中间键是一个路由的话，先输入前缀，
app.use('/user',userRouter)

app.get('/',function (req,res) {
  res.send('<h1>Hello World!!!</h1>')
})

app.get('/data',function (req,res) {
  res.json({name:'react-demo',type:'webapp'});
})

// 监听服务
app.listen(9093,function () {
  console.log('Node app start at port 9093');
})

// 新增数据
// User.create({
//   user: 'imooc',
//   age: '2018',
// },function (err, doc) {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })

// 删除数据
// User.remove({age:18},function (err,doc) {
//   console.log(doc);
// })

// 修改数据
// User.update({'user':'imooc'},{'$set':{age:20181111}},function (err,doc) {
//   if (!err) {
//     console.log(doc);
//   }else {
//     console.log(err);
//   }
// })


  //查找数据
  // User.find({},function (err, doc) {
  //   res.json(doc);
  // })
  // 过滤查找
  // User.find({'user': 'imooc'},function (err, doc) {
  //   res.json(doc);
  // })
  // 只查找一条 findOne
  // User.findOne({},function (err, doc) {
  //   res.json(doc);
  // })

