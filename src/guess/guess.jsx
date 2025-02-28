import React from "react";
import { GuessSheet } from './guessSheet';
import { Profile } from "../login/profile";
import './guess.css';

export function Guess(props) {
    // NOTE :: Attempt to Compress this code, explore ::
    const userGuess = new GuessSheet();
    // const locked = false; // For a future Idea

    const user = new Profile();
    user.refill(localStorage.getItem('Username'));

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

    const [tieNelson, setTieNelson] = React.useState('');
    const [tieOak, setTieOak] = React.useState('');
    const [tieEyring, setTieEyring] = React.useState('');

    const [hymnOne, setHymnOne] = React.useState('');
    const [hymnTwo, setHymnTwo] = React.useState('');
    const [hymnThree, setHymnThree] = React.useState('');

    const [templeOne, setTempleOne] = React.useState('');
    const [templeTwo, setTempleTwo] = React.useState('');
    const [templeThree, setTempleThree] = React.useState('');

    async function saveGuess() 
    {
        userGuess.setGuess('satMor', tri_package(satMorningOne, satMorningTwo, satMorningThree));
        userGuess.setGuess('satAft', tri_package(satAfternoonOne, satAfternoonTwo, satAfternoonThree));
        userGuess.setGuess('satEvn', tri_package(satEveningOne, satEveningTwo, satEveningThree));
        userGuess.setGuess('sunMor', tri_package(sunMorningOne, sunMorningTwo, sunMorningThree));
        userGuess.setGuess('sunAft', tri_package(sunAfternoonOne, sunAfternoonTwo, sunAfternoonThree));
        userGuess.setGuess('tieClr', tri_package(tieNelson, tieOak, tieEyring));
        userGuess.setGuess('hymnNum', tri_package(hymnOne, hymnTwo, hymnThree));
        userGuess.setGuess('templeLoc', tri_package(templeOne.split(', '), templeTwo.split(', '), templeThree.split(', ')));
        
        userGuess.save(localStorage.getItem('Username'));
    }

    function tri_package(var1='', var2='', var3='') {
        return [var1, var2, var3];
    }

    return (
        <main>
            <div>
                <h3 className="guess_title">Welcome to your FGC prediction sheet, {localStorage.getItem('Username')}!</h3>
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
                    <select className="color_picker" id="pick_color_nelson" value={tieNelson} onChange={(e) => setTieNelson(e.target.value)}>
                        <option value=''>[Select]</option>                        
                        <option value="Red">Red</option>
                        <option value="Orange">Orange</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                        <option value="Purple">Purple</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="pick_color_oak">President Oak's: </label>
                    <select className="color_picker" id="pick_color_oak" value={tieOak} onChange={(e) => setTieOak(e.target.value)}>
                        <option value=''>[Select]</option> 
                        <option value="Red">Red</option>
                        <option value="Orange">Orange</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                        <option value="Purple">Purple</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="pick_color_eyring">President Eyring's: </label>
                    <select className="color_picker" id="pick_color_eyring" value={tieEyring} onChange={(e) => setTieEyring(e.target.value)}>
                        <option value=''>[Select]</option> 
                        <option value="Red">Red</option>
                        <option value="Orange">Orange</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                        <option value="Purple">Purple</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                    </select>
                </div>

                <hr />

                <h3>What hymns will be sung? (1pt each)</h3>
                Please input the hymn number: 

                <br />
                <br />

                <div>
                    <label htmlFor="hymn_one">#1</label>
                    <input id="hymn_one" type="number" value={hymnOne} onChange={(e) => setHymnOne(e.target.value)} placeholder="Ex. 284" />
                </div>
                <div>
                    <label htmlFor="hymn_two">#2</label>
                    <input id="hymn_two" type="number" value={hymnTwo} onChange={(e) => setHymnTwo(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="hymn_three">#3</label>
                    <input id="hymn_three" type="number" value={hymnThree} onChange={(e) => setHymnThree(e.target.value)} />
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
                    <input id="temple_one" type="text" value={templeOne} onChange={(e) => setTempleOne(e.target.value)} placeholder="Ex. USA, PA, Susquehanna" />
                </div>
                <div>
                    <label htmlFor="temple_two">#2</label>
                    <input id="temple_two" type="text" value={templeTwo} onChange={(e) => setTempleTwo(e.target.value)} placeholder="Ex. Cuba, Menis" />
                </div>
                <div>
                    <label htmlFor="temple_three">#3</label>
                    <input id="temple_three" type="text" value={templeThree} onChange={(e) => setTempleThree(e.target.value)} />
                </div>

                <hr />
                <br />

                Submit your guesses and enjoy the messages of Conference!
                <div>
                    <button className="submit" type="submit" onClick={() => saveGuess()}>Submit</button>
                    <button onClick={() => userGuess.clear(localStorage.getItem('Username'))}>Clear Guess</button>
                </div>

                <br />

            </form>
        </main>
    );
}