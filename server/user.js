//express 可以传入一个中间键，将这个中间件单独成一个文件
const express = require('express');
const Router = express.Router();  // 使用这个路由对象进行挂载
const model = require('./model');
const User = model.getModel('user');
const utils = require('utility');
const _filter = {'pwd':0, '__v':0}
Router.get('/list',function (req, res) {
  // User.remove({},function (err,doc) {
  //   return null
  // })
  User.find({},function(err, doc){
    return res.json(doc);
  })
})
// 更新信息
Router.post('/update',function (req, res) {
  const userId = req.cookies.userid;
  if (!userId) {
    return json.dumps({code:0})
  }
  const body = req.body;
  User.findByIdAndUpdate(userId, body, function (err, doc) {
    const data = Object.assign({},{
      user:doc.user,
      type: doc.type
    },body)
    return res.json({code: 1,data})
  })
})

Router.post('/login', function (req, res) {
  const { user, pwd } = req.body;
  User.findOne({user, pwd:md5Pwd(pwd)}, _filter, function (err, doc) {
    if (!doc) {
      return res.json({code: 0, msg: '用户名或密码错误'})
    }
    res.cookie('userid', doc._id);
    return res.json({code:1, data:doc, msg: '登录成功'})
  })
})
//  用户注册
Router.post('/register',function (req, res) {
  const {user, pwd, type} = req.body;
  console.log(req.body);
  // 新增数据
  // User.create({
  //   user: 'imooc',
  //   age: '2018',
  // },function (err, doc) {
  //   console.log(124)
  //   if (!err) {
  //     console.log(doc)
  //   } else {
  //     console.log(err)
  //   }
  // })

  User.find({user:user}, function (err, doc) {
    if(doc.length) {
      return res.json({doc:doc, code: 2, msg: '已存在该用户'});
    }

    const userModel = new User({user, type, pwd: md5Pwd(pwd)});
    userModel.save(function (err, doc) {
      if (err) {
        return res.json({code: 1, msg: '服务器异常'});
      }
      const {user, type, _id } = doc;
      res.cookie('userid', _id);
      return res.json({code: 1, data:{user, type, _id }})
    })
    // User.create({user, pwd:utils.md5(pwd), type}, function (e, d) {
    //   if (e) {
    //     return res.json({code:1, msg:'服务器异常'});
    //   }
    //   return res.json({code:1, msg:'恭喜你！！！注册成功了'})
    // })
    console.log('注册成功了')
  })
})

Router.get('/info',function (req, res) {
  // 读取 req   写入 res
  const { userid } = req.cookies;
  // 这里开始检查用户有没有cooki 等其他信息
  if (!userid) {
    return res.json({code: 0});
  }
  User.findOne({ _id: userid}, _filter, function (err, doc) {
    if (err) {
      return res.json({code: 0, msg: '服务器异常'});
    }
    if (doc.length) {
      return res.json({code: 1, data: doc});
    }
  })
  return res.json({code:1}); // 成功的code=1
})

// 常用的加密方法
function md5Pwd(pwd) {
  const salt = 'fjaklsdjhfpu#$#^%*(' ;  // 将密码凭借上任意的字符串再进行加密
  return utils.md5(utils.md5(pwd+salt)); // 两成加密
}

module.exports = Router;