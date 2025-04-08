import React from "react";
import ReactDOM from 'react-dom/client';
import './notes.css';

export function Notes({ webSocket }) {
    const [name, setName] = React.useState('');

    return (
        <main id="chat-box" className="chat-box">  
            <Name updateName={setName} />
            <Message name={name} webSocket={webSocket} />
            <Records webSocket={webSocket} />
            <button></button>
        </main>
    );
}

// Holds box and variables for Name
function Name({ updateName }) {
    return (
        <div>
            <div className="name">
                <fieldset id='name-controls'>
                    <legend>Choose Name</legend>
                    <input onChange={(e) => updateName(e.target.value)} id='my-name' type='text' />
                </fieldset>
            </div>
        </div>
    );
}

// Holds box for message
function Message({ name, webSocket}) {
    const [message, setMessage] = React.useState('');

    // Sends message upon 'ENTER'
    function doneMessage(e) {
        if(e.key === 'Enter') {
            sendMsg();
        }
    }

    // Sends message to ws and resets variable
    function sendMsg() {
        webSocket.sendMessage(name, message);
        setMessage('');
    }

    const disabled = name === '' || !webSocket.connected;
    return (
        <div>
            <fieldset id='chat-controls'>
                <legend>Message</legend>
                <input disabled={disabled} onKeyDown={(e) => doneMessage(e)} value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button disabled={disabled || !message} onClick={sendMsg}>Send</button>
            </fieldset>
        </div>
    );
}

    function Records({ webSocket }) {
        const [msgs, setMsgs] = React.useState([]);
        React.useEffect(() => {
            webSocket.addObserver((msg) => {
                setMsgs((prevMessages) => [...prevMessages, msg])
            });
        }, [webSocket]);

        const msgElmnts = msgs.map((msg, index) => (
            <div key={index}>
                <span className={msg.event}>{msg.from}</span> {msg.msg}
            </div>
        ));

        return (
            <main>
                <div id='chat-text'>{msgElmnts}</div>
            </main>
        );
    }

export class ChatClient {
    observers = [];
    connected = false;

    constructor() {
        //Setting HTTP protocol
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        
        this.socket.onopen = (event) => {
            this.notifyObservers('system', 'websocket', 'connected');
            this.connected = true;
        };

        this.socket.onmessage = async (event) => {
            const text = await event.data.text();
            const msg = JSON.parse(text);
            this.notifyObservers('received', msg.name, msg.msg);
        };

        this.socket.onclose = (event) => {
            this.notifyObservers('system', 'websocket', 'disconnected');
            this.connected = false;
        };
        // this.socket.addEventListener('open', () => {
        //     this.connected = true;
        // ;
    }

    // Message to Websocket
    sendMessage(name, msg) {
        this.notifyObservers('sent', 'me', msg);
        this.socket.send(JSON.stringify({ name, msg }));
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(event, from, msg) {
        this.observers.forEach((h) => h({ event, from, msg }));
    }
}