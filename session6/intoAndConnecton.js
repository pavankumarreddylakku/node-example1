const WebSocketServer = require('ws').Server;
console.log(WebSocketServer);
const wss = new WebSocketServer({port:3232});
wss.on('connection',(ws) => {
    console.log('connetced');
});