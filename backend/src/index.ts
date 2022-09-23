
import { WebSocketServer, WebSocket } from 'ws';
import * as dotenv from 'dotenv'
dotenv.config()

const PORT = parseInt(process.env.PORT) || 3005;

const wss = new WebSocketServer({ port: PORT });

const processMessage = (message) => {
  return JSON.stringify({
    message,
    timestamp: new Date().toLocaleTimeString(),
  })
}

wss.on("connection", (ws) => {
  console.log("连接成功");

  ws.on("message", (_message) => {
    const message = _message.toString();
    console.log("收到消息", message);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(processMessage(message));
      }
    });
  });

  ws.on("close", () => {
    console.log("连接关闭");
  });
});


console.log("server started on port", PORT);