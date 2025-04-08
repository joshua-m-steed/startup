const { WebSocketServer } = require('ws');

function proxyBox(httpServer) {
    const wss = new WebSocketServer({ server: httpServer});

    wss.on('connection', (ws) => {
        ws.isAlive = true;

        ws.on('message', function message(data) {
            wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(data);
                }
            });
        });

        ws.on('pong', () => {
            ws.isAlive = true;
        });
    });

    setInterval(() => {
        wss.clients.forEach(function each(client) {
            // console.log("I'm awake!");
            if(client.isAlive === false)
            {
                return client.terminate();
            }
            client.isAlive = false
            client.ping();
        });
    }, 10000);
}

module.exports = { proxyBox };