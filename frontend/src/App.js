import { useEffect, useRef, useState } from 'react';
import './App.css';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';

// const WS_URL = 'ws://localhost:3005';
const WS_URL = 'ws://192.168.1.110:3005';

function App() {

  // const [name, setName] = useState('');

  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);

  const ws = useRef(null);

  useEffect(() => {
    let _ws = new WebSocket(WS_URL);
    _ws.onopen = () => {
      setConnected(true);
      console.log('连接成功');
    };
    _ws.onmessage = (event) => {
      console.log('收到消息', event.data);
      setMessages((messages) => [...messages, JSON.parse(event.data)]);
    };
    _ws.onclose = () => {
      setConnected(false);
      console.log('连接关闭');
    };
    ws.current = _ws;

    return () => {
      setConnected(false);
      _ws.close();
    };
  }, []);

  const sendMessage = (message) => {
    if (!connected) {
      alert('连接已断开');
      return;
    }
    console.log('message to send', message)
    ws.current.send(message);
  };

  return (
    <div className="App">
      <h1>Mofeng's Chat Room</h1>
      {connected
        ? <span style={{ color: 'green' }}>已连接</span>
        : <span style={{ color: 'red' }}>连接失败</span>}
      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;
