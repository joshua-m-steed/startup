import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Guess } from './guess/guess';
import { Scores } from './scores/scores';
import { Answer } from './answer/answer';
import { Notes, ChatClient } from './notes/notes';

export default function App() {
    const [savedName, setSavedName] = React.useState(localStorage.getItem('Username') || '');
    const currAuthState = savedName ? true : false;
    const [authState, setAuthState] = React.useState(currAuthState);

    return (
        <BrowserRouter>
            <div className='app'>
                <header>
                    <div className='header_box'>
                        <a className='FGC_ico' href="/"><img src='../fgc.ico' /></a>
                        <h1 className='FGC'> Fantasy General Conference</h1>
                    </div>
                    <nav>
                        <menu className='navlinks'>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        {authState === true && (
                        <li>
                            <NavLink to="guess">
                                Guess
                            </NavLink>
                        </li>
                        )}
                        {authState === true && (
                        <li>
                            <NavLink to="scores">
                                Scores
                            </NavLink>
                        </li>
                        )}
                        {authState === true && (
                        <li>
                            <NavLink to="notes">
                                Notes
                            </NavLink>
                        </li>
                        )}
                        </menu>
                    </nav>
                </header>

                <main>
                    <Routes>
                        <Route path='/' element={
                            <Login 
                                savedName={savedName}
                                authState={authState} 
                                onAuthStateChange={(savedName, authState) => {
                                    setSavedName(savedName);
                                    setAuthState(authState);
                                }}
                            />} exact />
                        <Route path='guess' element={<Guess />} />
                        <Route path='scores' element={<Scores />} />
                        <Route path='answer' element={<Answer />} />
                        <Route path='notes' element={<Notes webSocket={new ChatClient()}/>} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </main>

                <footer>
                    <div className='credit_box'>
                        <span className='dev'>Joshua Steed</span>
                        <span className='FGC_link'>
                            <a href="https://github.com/joshua-m-steed/startup">
                            FGC Github
                            </a>
                        </span>
                    </div> 
                    <div className='version'>v.1.1.0</div>
                        
                    
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main>404: Return to sender. Address unknown.</main>
}