const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');


const db = require('./config').connectionStr
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>{ console.log("数据库连接成功") })
  .catch(err=>{  console.log(err)  }) 

// 处理跨域
app.use(async (ctx, next)=> {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
});



app.use(async ctx => {
  ctx.body = {
    name:'我是koa返回的数据'
  };
});

app.listen(10233,()=>{
  console.log('server is start at 10233')
});