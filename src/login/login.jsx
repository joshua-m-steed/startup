import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export function Login({ savedName, authState, onAuthStateChange }) {
    const [imageUrl, setImageUrl] = React.useState(`data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=`);
    const [userName, setUserName] = React.useState( savedName || '');
    const [userEmail, setUserEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [displayErrorMessage, setDisplayErrorMessage] = React.useState('');
    const navigate = useNavigate();
    
    // Calls fetch function to verify if they can login
    async function loginUser() {
        const success = await userLoginOrCreate(`/api/auth/login`);
        if (success) {
            onAuthStateChange(userName, true);
        }
        else
        {
            console.log("Account creation failed");
            setDisplayErrorMessage("Login failed: Incorrect name, email, or password");
        }
    }

    // Calls a fetch from database in order to see if no matching users exists
    async function createUser() {
        const success = await userLoginOrCreate(`/api/auth/create`);
        if (success)
        {
            onAuthStateChange(userName, true);
        }
        else
        {
            console.log("Account created failed");
            setDisplayErrorMessage(`Creation failed: "${userName}" is already in use`)
        }
    }

    // Fetches data via call and removes username and token
    async function logoutUser() {
        fetch(`/api/auth/logout`, {
            method: 'delete',
        })
            .catch(() => {
                console.error("Couldn't log you out. Sorry!");
            })
            .finally(() => {
                localStorage.removeItem("Username");
                onAuthStateChange(userName, false);
            })
    }

    // Handles api calls from other functions
    async function userLoginOrCreate(endpoint) {
        console.log("Entering the feilds and awaiting response...");
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ name: userName, email: userEmail, password: password}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        });
        if (response?.status === 200) {
            localStorage.setItem('Username', userName);
            return true;
        }
        else
        {
            console.log("Sorry: You aren't Authenticated");
        }
    }

    // Keystroke listener
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if(e.key === ("Enter" || "ENTER"))
            {
                if(authState)
                {
                    navigate("/guess");
                }
                else if(userName && password && userEmail)
                {
                    loginUser();
                }
            }
            else if(e.key === ("Escape" || "ESCAPE"))
            {
                if(authState)
                {
                    logoutUser();
                }
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    })

    // One time api dog image call
    React.useEffect(() => {
        fetch(`https://random.dog/woof.json`)
            .then((response) => response.json())
            .then((data) => {
                if(data.url.endsWith(".mp4"))
                {
                    setImageUrl("https://random.dog/ed6c2ace-d58e-41d5-bc89-96846b110f92.jpg");
                }
                else
                {
                    console.log(`You're profile image is ${data.url}`);
                    setImageUrl(data.url);
                }
            })
            .catch((error) => console.error("Error fetching dog image:", error));
    }, []);

    return (
        <main>
            <h1>Welcome to Fantasy General Conference</h1>
            <div>
                <img className="profile" src={imageUrl} alt="User_Profile_Image" width="10%" height="auto" />
            </div>
            {authState == false ? (
            <form id="user_info" method="get" action="guess.html">
            <div className="input_container">
               <span>👨‍💻</span> 
               <input id="user_name" type="user" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="username" />
            </div>
            <div className="input_container">
                <span>📧</span>
                <input id="user_email" type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="your@email.com" />
            </div>
            <div className="input_container">
                <span>🔒</span>
                <input id="user_pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            </div>
            <br />
                    <div>
                        <button className="sign" type="button" onClick={() => loginUser()} disabled={!userName || !userEmail || !password}>Sign In</button>
                        <button className="create" type="button" onClick={() => createUser()} disabled={!userName || !userEmail || !password}>Create</button>
                    </div>
                    <div>
                        {displayErrorMessage}
                    </div>
            </form>
                ) : (
                    <div>
                        <h1>{userName}</h1>
                        <NavLink to='guess'><button className="play" type="button" disabled={authState != true}>Play</button></NavLink>
                        <button className="logout" type="button" onClick={() => logoutUser()}>Logout</button>
                    </div>
                )}
        </main>
    );
}