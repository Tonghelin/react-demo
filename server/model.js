// 我们将操作数据库的都认为是一个模型的概念
// 连接 mongo
const mongoose = require('mongoose');
const DB_URL = 'mongodb://127.0.0.1:27017';
mongoose.connect(DB_URL);
// mongoose.connect('mongodb://user:password@sample.com:port/dbname', { useNewUrlParser: true })

const models = {
  user: {
    user: { type: String, require: true },
    pwd: {type:String, require: true },
    type: {type: String, require: true},
    avatar: {type: String},
    desc: {type: String}, // 个人简介
    title:{type: String}, // 职位名称
    company:{type: String}, // boss 公司名
    money:{type: String} //薪资
  },
  chat: {

  }
}

// 动态生成
for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name)
  }
}
