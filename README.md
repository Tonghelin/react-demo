## 本地测试前后端联调  
### 使用express + mongodb 开发web后台接口  
* Express开发web接口  
* 非关系型数据库mongodb  
* 使用nodejs的mongoose模块链接和操作mongodb  

### Express
>    npm install express --save
* 在项目下新建server文件夹
    server.js 文件配置
```
    const  express = require('express');
    //新建app
    const app = express();
    
    const mongoose = require('mongoose');
    // 连接 mongo
    const DB_URL = 'mongodb://127.0.0.1:27017';
    mongoose.connect(DB_URL);
    mongoose.connection.on('connected',function () {
      console.log('111111111111111111111111111111111');
    })
    
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
    }))
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
    
    
    app.get('/',function (req,res) {
      res.send('<h1>Hello World!!!</h1>')
    })
    
    app.get('/data',function (req,res) {
      res.json({name:'react-demo',type:'webapp'});
    
      //查找数据
      // User.find({},function (err, doc) {
      //   res.json(doc);
      // })
      // 过滤查找
      // User.find({'user': 'imooc'},function (err, doc) {
      //   res.json(doc);
      // })
      // 只查One找一条 findOne
      // User.find({},function (err, doc) {
      //   res.json(doc);
      // })
    })
    
    app.listen(9093,function () {
      console.log('Node app start at port 9093');
    })
```

* 如何启动服务？ cmd进入到server文件夹    
    > node server.js   
    * 使用nodemon 自动监听修改    
        >npm install nodemon -g  
        nodemon server.js  

* express 几个知识点  
    * app.get
    * app.post
    * app.use
    * res.send
    * res.json
    * res.sendfile  
    
### [Mongodb](https://www.mongodb.com/download-center/community)
   Mongodb 直接下载.msi安装包安装即可,下载时可以选择.zip或者.msi  
   
### 结合mongoose的使用
> npm install mongoose --save    

#### mongoose基础使用  
* Connect 链接数据库
* 定义文档模型,Schema 和 model 新建模型
* 一个数据库文档对应一个模型,通过模型对数据库进行操作

#### mongoose 文档类型
* String,Number等数据结构
* 增删改
    * create
    * remove
    * update
* 查
    * find
    * findOne
    
### Express 和 mongodb 结合
* mongodb 独立函数工具
* express使用body-parser 支持post参数
* 使用cookie-parser存储登录信息cookie

### 前后端联调
> npm install axios --save  
  //安装完需要重新启动项目 npm run start
* package.json下配置(和babel统一级),转发统一端口  
> "proxy":"http://localhost:9093",

#### axios如何使用呢? 
```
    axios.get('/data')
      .then(
        (res) => {
          console.log('axios.get',res)
        }
      ).catch(
      (err) => {
        console.log(err)
      }
    )
```

#### 使用axios拦截器  
* 配合antd-mobile 使用(记得引入样式)
``` 
import axios from 'axios'
import { Toast } from 'antd-mobile'

// 拦截请求
axios.interceptors.request.use(function(config){
    Toast.loading('加载中...', 0);
    return config;
}

// 拦截响应
axios.interceptors.response.use(function(config){
    Toast.hide();
    return config;
}
// 配置完成需要在其他文件引入使用
```



