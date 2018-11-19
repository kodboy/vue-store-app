// import http from 'http'
let user = require('./User')
console.log(`my name is: ${user.userName},and I say: ${user.sayHello()}`)


let http = require('http');

let server = http.createServer((request,response)=>{
  response.statusCode = 200
  response.setHeader("Content-Type","text/plain; charset=utf-8")
  response.end(`my name is: ${user.userName},and I say: ${user.sayHello()}`)
})

// 开启监听
server.listen(3001,'127.0.0.1', ()=>{
  console.log('server started at: http://127.0.0.1:3001/')
})
