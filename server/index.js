// import http from 'http'
let user = require('./User')
console.log(`my name is: ${user.userName},and I say: ${user.sayHello()}`)


let http = require('http')
let url = require('url')
let util = require('util')

let server = http.createServer((request,response)=>{
  console.log(request.url)
  response.statusCode = 200
  response.setHeader("Content-Type","text/plain; charset=utf-8")
  // response.end(`my name is: ${user.userName},and I say: ${user.sayHello()}`)
  response.end(util.inspect(url.parse(request.url)))
  response.end(util.inspect(url.parse(request.original(url))))
})

// 开启监听
server.listen(3001,'127.0.0.1', ()=>{
  console.log('server started at: http://127.0.0.1:3001/')
})
