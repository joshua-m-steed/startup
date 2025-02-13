import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
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

            <main>App Components Here</main>

            <footer>
                <hr />
                    <span>Joshua Steed</span>
                <br />
                    <a href="https://github.com/Joshua-S25/startup">
                    FGC Github
                </a>
            </footer>
        </div>
    );
}