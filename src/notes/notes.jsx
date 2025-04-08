import React from "react";
import ReactDOM from 'react-dom/client';
import './notes.css';

export function Notes({ webSocket }) {
    const [name, setName] = React.useState('');

    return (
        <main className="chat-box">
            <Name updateName={setName} />
            <Message name={name} webSocket={webSocket} />
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
                <input disabled={disabled} onKeyDown={(e) => doneMessage(e)} value={message} />
                <button disabled={disabled || !message} onClick={sendMsg}>Send</button>
            </fieldset>
        </div>
    );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Chat webSocket={new ChatClient()} />);