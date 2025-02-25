import React from "react";
import './guess.css';

export function Guess(props) {
    // NOTE :: Attempt to Compress this code, explore ::
    const [satMorningOne, setSatMoringOne] = React.useState('');
    const [satMorningTwo, setSatMorningTwo] = React.useState('');
    const [satMorningThree, setSatMorningThree] = React.useState('');

    const [satAfternoonOne, setSatAfternoonOne] = React.useState('');
    const [satAfternoonTwo, setSatAfternoonTwo] = React.useState('');
    const [satAfternoonThree, setSatAfternoonThree] = React.useState('');
    
    const [satEveningOne, setSatEveningOne] = React.useState('');
    const [satEveningTwo, setSatEveningTwo] = React.useState('');
    const [satEveningThree, setSatEveningThree] = React.useState('');

    const [sunMorningOne, setSunMorningOne] = React.useState('');
    const [sunMorningTwo, setSunMorningTwo] = React.useState('');
    const [sunMorningThree, setSunMorningThree] = React.useState('');

    const [sunAfternoonOne, setSunAfternoonOne] = React.useState('');
    const [sunAfternoonTwo, setSunAfternoonTwo] = React.useState('');
    const [sunAfternoonThree, setSunAfternoonThree] = React.useState('');

    const userGuess = new Object({});

    async function saveGuess() {
        userGuess.satMor = tri_package(satMorningOne, satMorningTwo, satMorningThree);
        userGuess.satAft = tri_package(satAfternoonOne, satAfternoonTwo, satAfternoonThree);
        userGuess.satEvn = tri_package(satEveningOne, satEveningTwo, satEveningThree);
        userGuess.sunMor = tri_package(sunMorningOne, sunMorningTwo, sunMorningThree);
        userGuess.sunAft = tri_package(sunAfternoonOne, sunAfternoonTwo, sunAfternoonThree);

        localStorage.setItem('userGuess', JSON.stringify(userGuess));
    }

    function tri_package(var1='', var2='', var3='') {
        return [var1, var2, var3];
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
                                <tr><td><input type="text" value={satMorningOne} onChange={(e) => setSatMoringOne(e.target.value)} placeholder="Ex. Nelson" /></td></tr>
                                <tr><td><input type="text" value={satMorningTwo} onChange={(e) => setSatMorningTwo(e.target.value)}/></td></tr>
                                <tr><td><input type="text" value={satMorningThree} onChange={(e) => setSatMorningThree(e.target.value)}/></td></tr>
                            </tbody>
                        </table>
                        <table className="who_speaks">
                            <thead>
                                <tr>
                                    <th>Sat Afternoon</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><input type="text" value={satAfternoonOne} onChange={(e) => setSatAfternoonOne(e.target.value)} placeholder="Ex. Oaks" /></td></tr>
                                <tr><td><input type="text" value={satAfternoonTwo} onChange={(e) => setSatAfternoonTwo(e.target.value)}/></td></tr>
                                <tr><td><input type="text" value={satAfternoonThree} onChange={(e) => setSatAfternoonThree(e.target.value)}/></td></tr>
                            </tbody>
                        </table>
                        <table className="who_speaks">
                            <thead>
                                <tr>
                                    <th>Sat Evening</th>                            
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><input type="text" value={satEveningOne} onChange={(e) => setSatEveningOne(e.target.value)} placeholder="Ex. Eyring" /></td></tr>
                                <tr><td><input type="text" value={satEveningTwo} onChange={(e) => setSatEveningTwo(e.target.value)}/></td></tr>
                                <tr><td><input type="text" value={satEveningThree} onChange={(e) => setSatEveningThree(e.target.value)}/></td></tr>
                            </tbody>
                        </table>
                        <table className="who_speaks">
                            <thead>
                                <tr>
                                    <th>Sun Morning</th>                           
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><input type="text" value={sunMorningOne} onChange={(e) => setSunMorningOne(e.target.value)}/></td></tr>
                                <tr><td><input type="text" value={sunMorningTwo} onChange={(e) => setSunMorningTwo(e.target.value)}/></td></tr>
                                <tr><td><input type="text" value={sunMorningThree} onChange={(e) => setSunMorningThree(e.target.value)}/></td></tr>
                            </tbody>
                        </table>
                        <table className="who_speaks">
                            <thead>
                                <tr>
                                    <th>Sun Afternoon</th>                         
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><input type="text" value={sunAfternoonOne} onChange={(e) => setSunAfternoonOne(e.target.value)}/></td></tr>
                                <tr><td><input type="text" value={sunAfternoonTwo} onChange={(e) => setSunAfternoonTwo(e.target.value)}/></td></tr>
                                <tr><td><input type="text" value={sunAfternoonThree} onChange={(e) => setSunAfternoonThree(e.target.value)}/></td></tr>
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
                    <button className="submit" type="submit" onClick={() => saveGuess()}>Submit</button>
                    <button>Clear Guess</button>
                </div>

                <br />

            </form>
        </main>
    );
}