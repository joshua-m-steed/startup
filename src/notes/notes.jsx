import React from "react";
import ReactDOM from 'react-dom/client';

export function Notes({ webSocket }) {
    const [name, setName] = React.useState('');

    return (
        <main>
            <Name updateName={setName} />
            <button></button>
        </main>
    );
}

    function Name({ updateName }) {
        return (
            <main>
                <div className="name">
                    <fieldset id='name-controls'>
                        <legend>Choose Name</legend>
                        <input onChange={(e) => updateName(e.target.value)} id='my-name' type='text' />
                    </fieldset>
                </div>
            </main>
        );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Chat webSocket={new ChatClient()} />);