import React from "react";
import { GuessSheet } from './guessSheet';
import { ScoreCalculator } from "../scores/scoreCalculate";
import { NavLink, useNavigate } from "react-router-dom";

import './guess.css';

export function Guess() {
    // NOTE :: Attempt to Compress this code, explore ::
    const userGuess = new GuessSheet();
    const scoreCalc = new ScoreCalculator();
    // const [locked, setLocked] = React.useState(false); // For a future Idea

    const [satMorningOne, setSatMorningOne] = React.useState('');
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

    const [tieProphet, setTieProphet] = React.useState('');
    const [tie1stCoun, setTie1stCoun] = React.useState('');
    const [tie2ndCoun, setTie2ndCoun] = React.useState('');

    const [dressSat, setDressSat] = React.useState('');
    const [dressSun, setDressSun] = React.useState('');

    const [hymnOne, setHymnOne] = React.useState('');
    const [hymnTwo, setHymnTwo] = React.useState('');
    const [hymnThree, setHymnThree] = React.useState('');

    const [templeOne, setTempleOne] = React.useState('');
    const [templeTwo, setTempleTwo] = React.useState('');
    const [templeThree, setTempleThree] = React.useState('');

    const nav = useNavigate();

    function tri_package(var1='', var2='', var3='') {
        return [var1, var2, var3];
    }

    const saveGuessHelp = async () => {
        await saveGuess();

        await new Promise((resolve) => setTimeout(resolve, 500));

        nav('../scores');
    }

    async function fetchUserGuess()
    {
        const username = localStorage.getItem("Username");
        let fetchCall = '/api/guess/' + username;

        fetch(fetchCall)
        .then((response) => response.json())
        .then((userGuess) => {
            placeCurrentGuess(userGuess);
        });
    }

    async function placeCurrentGuess(guess)
    {
        setSatMorningOne(guess.satMor[0]);
        setSatMorningTwo(guess.satMor[1]);
        setSatMorningThree(guess.satMor[2]);

        setSatAfternoonOne(guess.satAft[0]);
        setSatAfternoonTwo(guess.satAft[1]);
        setSatAfternoonThree(guess.satAft[2]);

        setSatEveningOne(guess.satEvn[0]);
        setSatEveningTwo(guess.satEvn[1]);
        setSatEveningThree(guess.satEvn[2]);

        setSunMorningOne(guess.sunMor[0]);
        setSunMorningTwo(guess.sunMor[1]);
        setSunMorningThree(guess.sunMor[2]);

        setSunAfternoonOne(guess.sunAft[0]);
        setSunAfternoonTwo(guess.sunAft[1]);
        setSunAfternoonThree(guess.sunAft[2]);

        setTieProphet(guess.tieClr[0]);
        setTie1stCoun(guess.tieClr[1]);
        setTie2ndCoun(guess.tieClr[2]);

        setDressSat(guess.dressClr[0]);
        setDressSun(guess.dressClr[1]);

        setHymnOne(guess.hymnNum[0]);
        setHymnTwo(guess.hymnNum[1]);
        setHymnThree(guess.hymnNum[2]);
        
        let i = 0;
        while(i < guess.templeLoc.length)
        {
            let fullTempleString = "";
            if(guess.templeLoc[i].length == 3)
            {
                fullTempleString = guess.templeLoc[i][0] + ", " + guess.templeLoc[i][1] + ", " + guess.templeLoc[i][2];
            }
            else if (guess.templeLoc[i].length == 2)
            {
                fullTempleString = guess.templeLoc[i][0] + ", " + guess.templeLoc[i][1];
            }
            else if (guess.templeLoc[i].length == 1)
            {
                fullTempleString = guess.templeLoc[i][0];
            }

            console.log(fullTempleString);
            guess.templeLoc[i] = fullTempleString;
            i++;
        }
        
        setTempleOne(guess.templeLoc[0]);
        setTempleTwo(guess.templeLoc[1]);
        setTempleThree(guess.templeLoc[2]);
    }

    function clearGuess(username)
    {
        let fetchCall = `/api/guess/` + username;
        fetch(fetchCall, {
            method: 'delete',
        })
            .catch(() => {
                console.error("Couldn't delete your guess. Sorry!");
            })
            .finally(() => {
                console.log("Your guess has been deleted!");
            })    
    }

    async function saveScore(scoreText)
        {
            console.log(JSON.stringify(scoreText));
            await fetch(`/api/scores`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(scoreText),
            });
        }

    React.useEffect(() => {
        fetchUserGuess();
    }, []);

    async function saveGuess() 
    {
        userGuess.name = localStorage.getItem('Username');
        userGuess.setGuess('satMor', tri_package(satMorningOne, satMorningTwo, satMorningThree));
        userGuess.setGuess('satAft', tri_package(satAfternoonOne, satAfternoonTwo, satAfternoonThree));
        userGuess.setGuess('satEvn', tri_package(satEveningOne, satEveningTwo, satEveningThree));
        userGuess.setGuess('sunMor', tri_package(sunMorningOne, sunMorningTwo, sunMorningThree));
        userGuess.setGuess('sunAft', tri_package(sunAfternoonOne, sunAfternoonTwo, sunAfternoonThree));
        userGuess.setGuess('tieClr', tri_package(tieProphet, tie1stCoun, tie2ndCoun));
        userGuess.setGuess('dressClr', [dressSat, dressSun]);
        userGuess.setGuess('hymnNum', tri_package(hymnOne, hymnTwo, hymnThree));
        userGuess.setGuess('templeLoc', tri_package(templeOne.split(', '), templeTwo.split(', '), templeThree.split(', ')));

        console.log("Going to post Guess...");
        console.log(JSON.stringify(userGuess));
        fetch(`/api/guess`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userGuess),
        });

        // fetch Answer
        const userData = await fetch(`/api/answer`)
        .then((response) => response.json())
        .then((answerKey) => {
            const userScore = scoreCalc.score(userGuess, answerKey);
            const userTable = scoreCalc.createTableRow(userGuess.name, userScore);
            return [userScore, userTable];
        });
        
        await saveScore(userData[1]);
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
                                <tr><td><input id="satMorOne" type="text" value={satMorningOne} onChange={(e) => setSatMorningOne(e.target.value)} placeholder="Ex. Nelson" /></td></tr>
                                <tr><td><input id="satMorTwo" type="text" value={satMorningTwo} onChange={(e) => setSatMorningTwo(e.target.value)}/></td></tr>
                                <tr><td><input id="satMorThree" type="text" value={satMorningThree} onChange={(e) => setSatMorningThree(e.target.value)}/></td></tr>
                            </tbody>
                        </table>
                        <table className="who_speaks">
                            <thead>
                                <tr>
                                    <th>Sat Afternoon</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><input id="satAftOne" type="text" value={satAfternoonOne} onChange={(e) => setSatAfternoonOne(e.target.value)} placeholder="Ex. Oaks" /></td></tr>
                                <tr><td><input id="satAftTwo" type="text" value={satAfternoonTwo} onChange={(e) => setSatAfternoonTwo(e.target.value)}/></td></tr>
                                <tr><td><input id="satAftThree" type="text" value={satAfternoonThree} onChange={(e) => setSatAfternoonThree(e.target.value)}/></td></tr>
                            </tbody>
                        </table>
                        <table className="who_speaks">
                            <thead>
                                <tr>
                                    <th>Sat Evening</th>                            
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><input id="satEvnOne" type="text" value={satEveningOne} onChange={(e) => setSatEveningOne(e.target.value)} placeholder="Ex. Eyring" /></td></tr>
                                <tr><td><input id="satEvnTwo" type="text" value={satEveningTwo} onChange={(e) => setSatEveningTwo(e.target.value)}/></td></tr>
                                <tr><td><input id="satEvnThree" type="text" value={satEveningThree} onChange={(e) => setSatEveningThree(e.target.value)}/></td></tr>
                            </tbody>
                        </table>
                        <table className="who_speaks">
                            <thead>
                                <tr>
                                    <th>Sun Morning</th>                           
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><input id="sunMorOne" type="text" value={sunMorningOne} onChange={(e) => setSunMorningOne(e.target.value)}/></td></tr>
                                <tr><td><input id="sunMorTwo" type="text" value={sunMorningTwo} onChange={(e) => setSunMorningTwo(e.target.value)}/></td></tr>
                                <tr><td><input id="sunMorThree" type="text" value={sunMorningThree} onChange={(e) => setSunMorningThree(e.target.value)}/></td></tr>
                            </tbody>
                        </table>
                        <table className="who_speaks">
                            <thead>
                                <tr>
                                    <th>Sun Afternoon</th>                         
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><input id="sunAftOne" type="text" value={sunAfternoonOne} onChange={(e) => setSunAfternoonOne(e.target.value)}/></td></tr>
                                <tr><td><input id="sunAftTwo" type="text" value={sunAfternoonTwo} onChange={(e) => setSunAfternoonTwo(e.target.value)}/></td></tr>
                                <tr><td><input id="sunAftThree" type="text" value={sunAfternoonThree} onChange={(e) => setSunAfternoonThree(e.target.value)}/></td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr />
                <h3>What color ties will they wear on Sunday Morning? (1pt each)</h3>
                Please select from the drop down menus next to their assignment: 

                <br />
                <br />

                <div>
                    <label htmlFor="pick_color_prophet">Prophet: </label>
                    <select className="color_picker" id="pick_color_prophet" value={tieProphet} onChange={(e) => setTieProphet(e.target.value)}>
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
                    <label htmlFor="pick_color_1stCounselor">1st Counselor: </label>
                    <select className="color_picker" id="pick_color_1stCounselor" value={tie1stCoun} onChange={(e) => setTie1stCoun(e.target.value)}>
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
                    <label htmlFor="pick_color_2ndCounselor">2nd Counselor: </label>
                    <select className="color_picker" id="pick_color_2ndCounselor" value={tie2ndCoun} onChange={(e) => setTie2ndCoun(e.target.value)}>
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
                <h3>What color dress will they wear on both mornings? (1pt each)</h3>
                Please select from the drop down menus next to the session: 

                <br />
                <br />

                <div>
                    <label htmlFor="pick_color_dressSat">Saturday Morning Dress: </label>
                    <select className="color_picker" id="pick_color_dressSat" value={dressSat} onChange={(e) => setDressSat(e.target.value)}>
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
                    <label htmlFor="pick_color_dressSun">Sunday Morning Dress: </label>
                    <select className="color_picker" id="pick_color_dressSun" value={dressSun} onChange={(e) => setDressSun(e.target.value)}>
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

                <h3>Where a temple will be announced? (1pt for each)</h3>
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
                    <button className="submit" type="button" onClick={() => saveGuessHelp()}>Submit</button>
                    <button onClick={() => clearGuess(localStorage.getItem('Username'))}>Clear Guess</button>
                </div>

                <br />

                <div>
                    <NavLink to='../answer'><button className="answer" type="button">Answer Key</button></NavLink>
                </div>

                <br />

            </form>
        </main>
    );
}