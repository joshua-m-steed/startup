import React from "react";

export function Login() {
    return (
        <main>
            <h1>Welcome to Fantasy General Conference</h1>
            <div>
                <img className="profile" src="https://random.dog/201915e6-89e5-4811-8648-7c433d771af5.jpg" alt="Placeholder_Dog_User_Image" width="10%" height="auto" />
            </div>
            <form id="user_info" method="get" action="guess.html">
            <div className="input_container">
               <span>👨‍💻</span> 
               <input id="user_name" type="user" placeholder="username" />
            </div>
            <div className="input_container">
                <span>📧</span>
                <input id="user_email" type="email" placeholder="your@email.com" />
            </div>
            <div className="input_container">
                <span>🔒</span>
                <input id="user_pass" type="password" placeholder="password" />
            </div>
            <br />
            <div>
                <button className="sign" type="submit">Sign In</button>
                <button id="create" type="submit">Create</button>
            </div>
            </form>
        </main>
    );
}