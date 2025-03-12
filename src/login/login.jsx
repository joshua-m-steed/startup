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

    const [loggedIn, setLoggedIn] = React.useState(() => { 
        let temp = JSON.parse(localStorage.getItem(userName + ' Profile')) || [];
        return temp.auth || user.auth;});

    // const navigate = useNavigate();

    //Funciton for updating the users library
    const addUser = (userFile) => {
        setUsers(prevUsers => [...prevUsers, userFile]);
    };

    // Create Profiles to effectively use data throughout
    async function loginUser() {
        userLoginOrCreate(`/api/auth/login`);
        console.log("You've made it back");
        user.login(userName, userEmail, password, users);

        if(user.auth == true)
        {
            // setUserName(userName);
            // setUserEmail(userEmail);
            // setPassword(password);

            setLoggedIn(user.auth);

            // navigate("guess");
        }
    }

    async function createUser() {
        userLoginOrCreate(`/api/auth/create`);
        console.log("You've returned");
        // let userFile = user.create(userName, userEmail, password, users);

        if(user.auth == true)
        {       
            // addUser(userFile);
            // localStorage.setItem('users', JSON.stringify(users));

            setLoggedIn(user.auth);

            // navigate("guess");
        }
        else
        {
            user.reset();
        }
    }

    async function logoutUser() {
        user.reset();
        localStorage.removeItem("Username");
        setLoggedIn(user.auth);
    }

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


        }
    }

    React.useEffect(() => {
        setImageUrl('https://random.dog/201915e6-89e5-4811-8648-7c433d771af5.jpg');
    }, []);

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
                {loggedIn == false ? (
                    <div>
                        <button className="sign" type="button" onClick={() => loginUser()} disabled={!userName || !password}>Sign In</button>
                        <button className="create" type="button" onClick={() => createUser()} disabled={!userName || !password}>Create</button>
                    </div>
                ) : (
                    <div>
                        <NavLink to='guess'><button className="play" type="button" disabled={loggedIn != true}>Play</button></NavLink>
                        <button className="logout" type="button" onClick={() => logoutUser()}>Logout</button>
                    </div>
                )}
            </form>
        </main>
    );
}