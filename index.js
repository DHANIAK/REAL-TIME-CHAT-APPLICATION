const ws = require('ws')
const server=new ws.Server({port:'3000'})

server.on('connection',Socket=>{
    Socket.on('message',message=>{
        console.log(message)
        Socket.send('${message}')
    })
})