import React from "react";
import { Profile } from "./profile";
import { NavLink, useNavigate } from "react-router-dom";

export function Login() {
    const [imageUrl, setImageUrl] = React.useState(`data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=`);
    const [userName, setUserName] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [users, setUsers] = React.useState(() => { return JSON.parse(localStorage.getItem('users')) || [] })

    const user = new Profile()
    localStorage.setItem('users', JSON.stringify(users));

    const navigate = useNavigate();

    //Funciton for updating the users library
    const addUser = (userFile) => {
        setUsers(prevUsers => [...prevUsers, userFile]);
    };

    // Create Profiles to effectively use data throughout
    // Varificiation in the future?
    async function loginUser() {
        // Create userFile
        user.create(userName, userEmail, password, users);

        setUserName(userName);
        setUserEmail(userEmail);
        setPassword(password);
    }

    async function createUser() {
        let userFile = user.create(userName, userEmail, password, users);

        if(user.auth == true)
        {
            setUserName(userName);
            setUserEmail(userEmail);
            setPassword(password);
            
            addUser(userFile);
            localStorage.setItem('users', JSON.stringify(users));
            navigate("guess");
        }
    }

    React.useEffect(() => {
        setImageUrl('https://random.dog/201915e6-89e5-4811-8648-7c433d771af5.jpg');
    }, []);

    // NTS :: Currently an issue with buttons directing to guess.html?
    return (
        <main>
            <h1>Welcome to Fantasy General Conference</h1>
            <div>
                <img className="profile" src={imageUrl} alt="User_Profile_Image" width="10%" height="auto" />
            </div>
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
                <NavLink to='guess'><button className="sign" type="button" onClick={() => loginUser()} disabled={!userName || !password}>Sign In</button></NavLink>
                <button className="create" type="button" onClick={() => createUser()} disabled={!userName || !password}>Create</button>
            </div>
            </form>
        </main>
    );
}