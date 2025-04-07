import React from "react";
import ReactDOM from 'react-dom/client';

export function Notes({ webSocket }) {
    const [name, setName] = React.useState('');

    return (
        <main>
            <button></button>
        </main>
    );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Chat webSocket={new ChatClient()} />);