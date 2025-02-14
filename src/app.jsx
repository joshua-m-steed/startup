import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Guess } from './guess/guess';
import { Scores } from './scores/scores';

export default function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <header>
                    <h1>Fantasy General Conference</h1>
                    <nav>
                        <menu class="navlinks">
                        <li>
                            <a href="index.html">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="guess.html">
                                Guess
                            </a>
                        </li>
                        <li>
                            <a href="scores.html">
                                Scores
                            </a>
                        </li>
                        </menu>
                    </nav>
                    <hr />
                </header>

                <main>
                    <Routes>
                        <Route path='/' element={<Login />} exact />
                        <Route path='guess' element={<Guess />} />
                        <Route path='scores' element={<Guess />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </main>

                <footer>
                    <hr />
                        <span>Joshua Steed</span>
                    <br />
                        <a href="https://github.com/Joshua-S25/startup">
                        FGC Github
                    </a>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main>404: Return to sender. Address unknown.</main>
}