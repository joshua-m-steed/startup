import React from "react";
import './guess.css';

export function Guess(props) {
    const [speakerOne, setSpeakerOne] = React.useState('');

    async function satMorGuess() {
        const userGuess = new Object({});

        const satMor = new Object([speakerOne]);

        userGuess.satMor = satMor;

        localStorage.setItem('userGuess', JSON.stringify(userGuess));
    }

    // async function saveGuess() {
    //     localStorage.setItem('userName', userName);
    //     localStorage.setItem('userEmail', userEmail);
    //     localStorage.setItem('password', password);
    //     props.onLogin(userName);
    //     props.onLogin(userEmail);
    //     props.onLogin(password);
    // }

    return (
        <main>
            <div>
                <h3 className="guess_title">Welcome to your FGC prediction sheet, john_smith!</h3>
            </div>

                <hr />

            <div>
                <img className="qott" src="qott.jpg" alt="Quorum of the Twelve" height="300" />
            </div>
            <form>
                <div>
                    <h3>Who will speak to us? (1pt each)</h3>
                    Enter in a last name from the Quorum of the Twelve and First Presidency: 

                    <br />
                    <br />

                    <div className="table_cloth">
                        <table className="who_speaks">
                            <thead>
                                <tr>
                                    <th>Sat Morning</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><input type="text" value={speakerOne} onChange={(e) => setSpeakerOne(e.target.value)} placeholder="Ex. Nelson" /></td></tr>
                                <tr><td><input type="text" /></td></tr>
                                <tr><td><input type="text" /></td></tr>
                            </tbody>
                        </table>
                        <table className="who_speaks">
                            <thead>
                                <tr>
                                    <th>Sat Afternoon</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><input type="text" placeholder="Ex. Oaks" /></td></tr>
                                <tr><td><input type="text" /></td></tr>
                                <tr><td><input type="text" /></td></tr>
                            </tbody>
                        </table>
                        <table className="who_speaks">
                            <thead>
                                <tr>
                                    <th>Sat Evening</th>                            
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><input type="text" placeholder="Ex. Eyring" /></td></tr>
                                <tr><td><input type="text" /></td></tr>
                                <tr><td><input type="text" /></td></tr>
                            </tbody>
                        </table>
                        <table className="who_speaks">
                            <thead>
                                <tr>
                                    <th>Sun Morning</th>                           
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><input type="text" /></td></tr>
                                <tr><td><input type="text" /></td></tr>
                                <tr><td><input type="text" /></td></tr>
                            </tbody>
                        </table>
                        <table className="who_speaks">
                            <thead>
                                <tr>
                                    <th>Sun Afternoon</th>                         
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><input type="text" /></td></tr>
                                <tr><td><input type="text" /></td></tr>
                                <tr><td><input type="text" /></td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr />
                <h3>What color ties will they wear on Sunday Morning? (1pt each)</h3>
                Please select from the drop down menus next to their names: 

                <br />
                <br />

                <div>
                    <label htmlFor="pick_color_nelson">President Nelson's: </label>
                    <select className="color_picker" id="pick_color_nelson">
                        <option value="#FF0000">Red</option>
                        <option value="#FF8800">Orange</option>
                        <option value="#FFF000">Yellow</option>
                        <option value="#008000">Green</option>
                        <option value="#0000FF">Blue</option>
                        <option value="#800080">Purple</option>
                        <option value="#000000">Black</option>
                        <option value="#FFFFFF">White</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="pick_color_oak">President Oak's: </label>
                    <select className="color_picker" id="pick_color_oak">
                        <option value="#FF0000">Red</option>
                        <option value="#FF8800">Orange</option>
                        <option value="#FFF000">Yellow</option>
                        <option value="#008000">Green</option>
                        <option value="#0000FF">Blue</option>
                        <option value="#800080">Purple</option>
                        <option value="#000000">Black</option>
                        <option value="#FFFFFF">White</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="pick_color_eyring">President Eyring's: </label>
                    <select className="color_picker" id="pick_color_eyring">
                        <option value="#FF0000">Red</option>
                        <option value="#FF8800">Orange</option>
                        <option value="#FFF000">Yellow</option>
                        <option value="#008000">Green</option>
                        <option value="#0000FF">Blue</option>
                        <option value="#800080">Purple</option>
                        <option value="#000000">Black</option>
                        <option value="#FFFFFF">White</option>
                    </select>
                </div>

                <hr />

                <h3>What hymns will be sung? (1pt each)</h3>
                Please input the hymn number: 

                <br />
                <br />

                <div>
                    <label htmlFor="hymn_one">#1</label>
                    <input id="hymn_one" type="number" placeholder="Ex. 284" />
                </div>
                <div>
                    <label htmlFor="hymn_two">#2</label>
                    <input id="hymn_two" type="number" />
                </div>
                <div>
                    <label htmlFor="hymn_three">#3</label>
                    <input id="hymn_three" type="number" />
                </div>
                <hr />

                <div>
                    <img className="lvtemple" src="lv_temple.jpg" alt="Las Vegas Temple" height="300" />
                </div>

                <h3>Where a temple will be announced? (1pt for Country, 2pts for State/Region, 3pts for City)</h3>
                Please input the location as follows: Country, State/Region, City

                <br />
                <br />

                <div>
                    <label htmlFor="temple_one">#1</label>
                    <input id="temple_one" type="text" placeholder="Ex. USA, PA, Susquehanna" />
                </div>
                <div>
                    <label htmlFor="temple_two">#2</label>
                    <input id="temple_two" type="text" placeholder="Ex. Cuba, Menis" />
                </div>
                <div>
                    <label htmlFor="temple_three">#3</label>
                    <input id="temple_three" type="text" />
                </div>

                <hr />
                <br />

                Submit your guesses and enjoy the messages of Conference!
                <div>
                    <button className="submit" type="submit" onClick={() => satMorGuess()}>Submit</button>
                    <button>Clear Guess</button>
                </div>

                <br />

            </form>
        </main>
    );
}