/**
 * Created by Administrator on 2017/9/14.
 */
var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Hello World';
});

app.listen(3000);
