import React from "react";
import { GuessSheet } from "../guess/guessSheet";
import { ScoreCalculator } from "../scores/scoreCalculate";
import { Profile } from "../login/profile";
import './answer.css';
import { NavLink } from "react-router-dom";

export function Answer() {
    // NOTE :: Attempt to Compress this code, explore ::
    const userGuess = new GuessSheet();
    const answerKey = new GuessSheet(); // Call and compare the sheets upon submission?
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

    const [tieNelson, setTieNelson] = React.useState('');
    const [tieOak, setTieOak] = React.useState('');
    const [tieEyring, setTieEyring] = React.useState('');

    const [hymnOne, setHymnOne] = React.useState('');
    const [hymnTwo, setHymnTwo] = React.useState('');
    const [hymnThree, setHymnThree] = React.useState('');

    const [templeOne, setTempleOne] = React.useState('');
    const [templeTwo, setTempleTwo] = React.useState('');
    const [templeThree, setTempleThree] = React.useState('');

    async function fetchAnswerKey()
    {
        fetch(`api/answer`)
        .then((response) => response.json())
        .then((answerKey) => {
            placeCurrent(answerKey);
        });
    }

    async function placeCurrent(answer)
    {
        setSatMorningOne(answer.satMor[0]);
        setSatMorningTwo(answer.satMor[1]);
        setSatMorningThree(answer.satMor[2]);

        setSatAfternoonOne(answer.satAft[0]);
        setSatAfternoonTwo(answer.satAft[1]);
        setSatAfternoonThree(answer.satAft[2]);

        setSatEveningOne(answer.satEvn[0]);
        setSatEveningTwo(answer.satEvn[1]);
        setSatEveningThree(answer.satEvn[2]);

        setSunMorningOne(answer.sunMor[0]);
        setSunMorningTwo(answer.sunMor[1]);
        setSunMorningThree(answer.sunMor[2]);

        setSunAfternoonOne(answer.sunAft[0]);
        setSunAfternoonTwo(answer.sunAft[1]);
        setSunAfternoonThree(answer.sunAft[2]);

        setTieNelson(answer.tieClr[0]);
        setTieOak(answer.tieClr[1]);
        setTieEyring(answer.tieClr[2]);

        setHymnOne(answer.hymnNum[0]);
        setHymnTwo(answer.hymnNum[1]);
        setHymnThree(answer.hymnNum[2]);
        
        let i = 0;
        while(i < answer.templeLoc.length)
        {
            let fullTempleString = "";
            if(answer.templeLoc[i].length == 3)
            {
                fullTempleString = answer.templeLoc[i][0] + ", " + answer.templeLoc[i][1] + ", " + answer.templeLoc[i][2];
            }
            else if (answer.templeLoc[i].length == 2)
            {
                fullTempleString = answer.templeLoc[i][0] + ", " + answer.templeLoc[i][1];
            }
            else if (answer.templeLoc[i].length == 1)
            {
                fullTempleString = answer.templeLoc[i][0];
            }

            console.log(fullTempleString);
            answer.templeLoc[i] = fullTempleString;
            i++;
        }
        
        setTempleOne(answer.templeLoc[0]);
        setTempleTwo(answer.templeLoc[1]);
        setTempleThree(answer.templeLoc[2]);
    }

    async function calculateAndUpdate(answer, guess)
    {
        console.log(JSON.stringify(guess) + JSON.stringify(answer));
    }

    async function updateAndCompareGuesses(answer)
    {
        console.log("Now we're here");
        const guessesCollected = await fetch(`/api/answer/guessAll`)
        .then((response) => response.json())
        .then((guessAll) => { 
            // console.log(JSON.stringify(guessAll));
            return guessAll;
        });

        for(let i = 0; i < guessesCollected.length; i++)
        {
            // console.log(`Guess ${i} \n\n` +  JSON.stringify(guessesCollected[i]));

            await calculateAndUpdate(answer, guessesCollected[i]);
        }
    }

    async function saveAnswerKey() 
    {
        answerKey.name = "ANSWER";
        answerKey.setGuess('satMor', tri_package(satMorningOne, satMorningTwo, satMorningThree));
        answerKey.setGuess('satAft', tri_package(satAfternoonOne, satAfternoonTwo, satAfternoonThree));
        answerKey.setGuess('satEvn', tri_package(satEveningOne, satEveningTwo, satEveningThree));
        answerKey.setGuess('sunMor', tri_package(sunMorningOne, sunMorningTwo, sunMorningThree));
        answerKey.setGuess('sunAft', tri_package(sunAfternoonOne, sunAfternoonTwo, sunAfternoonThree));
        answerKey.setGuess('tieClr', tri_package(tieNelson, tieOak, tieEyring));
        answerKey.setGuess('hymnNum', tri_package(hymnOne, hymnTwo, hymnThree));
        answerKey.setGuess('templeLoc', tri_package(templeOne.split(', '), templeTwo.split(', '), templeThree.split(', ')));
        
        await fetch(`/api/answer`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(answerKey),
        });

        updateAndCompareGuesses(answerKey);
    }

    function tri_package(var1='', var2='', var3='') {
        return [var1, var2, var3];
    }

    function clearAnswer()
    {
        fetch(`/api/answer`, {
            method: 'delete',
        })
            .catch(() => {
                console.error("Couldn't delete the answer key. Sorry!");
            })
            .finally(() => {
                console.log("The answer key has been deleted!");
            })    
    }

    React.useEffect(() => {
        fetchAnswerKey();
    }, []);

    return (
        <main>
            <div>
                <h3 className="guess_title">Welcome to Answer Key, {localStorage.getItem('Username')}!</h3>
            </div>

                <hr />

            <div>
                <img className="qott" src="qott.jpg" alt="Quorum of the Twelve" height="300" />
            </div>
            <form>
                <div>
                    <h3>Speakers</h3>
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
                <h3>Tie color</h3>
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

                <h3>Hymns</h3>
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

                <h3>Temples</h3>
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

                Fill out the Answer Sheet as you watch General Conference!
                <div>
                    <button className="submit" type="button" onClick={() => saveAnswerKey()}>Update</button>
                    <button onClick={() => clearAnswer()}>Clear Answer</button>
                </div>

                <br />

                <div>
                    <NavLink to='../guess'><button className="answer" type="button">Return to Guess</button></NavLink>
                </div>

                <br />

            </form>
        </main>
    );
}