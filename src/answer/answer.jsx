import React from "react";
import { GuessSheet } from "../guess/guessSheet";
import { ScoreCalculator } from "../scores/scoreCalculate";
import { NavLink } from "react-router-dom";

import './answer.css';

// BUG NOTES: 
// When comparing guesses, 'dressClr' shows as missing/not array || Priority - NA, RSN - Guess are missing on guess sheets, will need to be reset

export function Answer() {
    // NOTE :: Attempt to Compress this code, explore ::
    const scoreCalc = new ScoreCalculator();
    const answerKey = new GuessSheet();
    // const [locked, setLocked] = React.useState(false); // For a future Idea
    const [updateText, setUpdateText] = React.useState("Update");

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

    // const [hymnOne, setHymnOne] = React.useState('');
    // const [hymnTwo, setHymnTwo] = React.useState('');
    // const [hymnThree, setHymnThree] = React.useState('');

    const [templeOne, setTempleOne] = React.useState('');
    const [templeTwo, setTempleTwo] = React.useState('');
    const [templeThree, setTempleThree] = React.useState('');

    const [hymnRowsVal, setHymnRowsVal] = React.useState(['']);
    const hymnRowsChange = (index, newVal) => {
            const updated = [...hymnRowsVal];
            updated[index] = newVal;
            setHymnRowsVal(updated);
            };

    const [templeRowsVal, setTempleRowsVal] = React.useState(['']);
    const templeRowsChange = (index, newVal) => {
            const updated = [...templeRowsVal];
            updated[index] = newVal;
            setTempleRowsVal(updated); 
            };

    // Collects from DB
    async function fetchAnswerKey()
    {
        fetch(`api/answer`)
        .then((response) => response.json())
        .then((answerKey) => {
            placeCurrent(answerKey);
        });
    }

    // Sets values from Answer Key DB
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

        setTieProphet(answer.tieClr[0]);
        setTie1stCoun(answer.tieClr[1]);
        setTie2ndCoun(answer.tieClr[2]);

        setDressSat(answer.dressClr[0]);
        setDressSun(answer.dressClr[1]);

        setHymnRowsVal(answer.hymnNum);

        // setHymnOne(answer.hymnNum[0]);
        // setHymnTwo(answer.hymnNum[1]);
        // setHymnThree(answer.hymnNum[2]);
        
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
        
        setTempleRowsVal(answer.templeLoc);

        // setTempleOne(answer.templeLoc[0]);
        // setTempleTwo(answer.templeLoc[1]);
        // setTempleThree(answer.templeLoc[2]);
    }

    // Compares Answer and User Keys
    async function calculateAndUpdate(guess, answer)
    {
        const userScore = scoreCalc.score(guess, answer);
        const userTable = scoreCalc.createTableRow(guess.name, userScore);

        console.log(userTable);

        console.log(JSON.stringify(userTable));
        await fetch(`/api/scores`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userTable),
        });
    }

    // Updates scores when updating Answer
    async function updateAndCompareGuesses(answer)
    {
        setUpdateText("Updating...");

        const guessesCollected = await fetch(`/api/answer/guessAll`)
        .then((response) => response.json())
        .then((guessAll) => { 
            return guessAll;
        });

        for(let i = 0; i < guessesCollected.length; i++)
        {
            await calculateAndUpdate(guessesCollected[i], answer);
        }

        setUpdateText("Update");
    }

    async function saveAnswerKey() 
    {
        answerKey.name = "ANSWER";
        answerKey.setGuess('satMor', tri_package(satMorningOne, satMorningTwo, satMorningThree));
        answerKey.setGuess('satAft', tri_package(satAfternoonOne, satAfternoonTwo, satAfternoonThree));
        answerKey.setGuess('satEvn', tri_package(satEveningOne, satEveningTwo, satEveningThree));
        answerKey.setGuess('sunMor', tri_package(sunMorningOne, sunMorningTwo, sunMorningThree));
        answerKey.setGuess('sunAft', tri_package(sunAfternoonOne, sunAfternoonTwo, sunAfternoonThree));
        answerKey.setGuess('tieClr', tri_package(tieProphet, tie1stCoun, tie2ndCoun));
        answerKey.setGuess('dressClr', [dressSat, dressSun]);
        // answerKey.setGuess('hymnNum', tri_package(hymnOne, hymnTwo, hymnThree));
        answerKey.setGuess('hymnNum', hymnRowsVal);
        // answerKey.setGuess('templeLoc', tri_package(templeOne.split(', '), templeTwo.split(', '), templeThree.split(', ')));

        let i = 0;
        while(i < templeRowsVal.length)
        {
            let temp = templeRowsVal[i].split(', ');
            console.log(temp);
            templeRowsVal[i] = temp;
            console.log(templeRowsVal[i]);
            i++;
        }

        answerKey.setGuess('templeLoc', templeRowsVal);

        console.log(JSON.stringify(answerKey));

        await fetch(`/api/answer`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(answerKey),
        });

        updateAndCompareGuesses(answerKey);

        console.log(answerKey.templeLoc);
    }

    function tri_package(var1='', var2='', var3='') {
        return [var1, var2, var3];
    }

    // Wipes
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

    // NOTE TO SELF :: Row Count Variable isn't needed. Just use Array.length()

    function addHymnRows()
    {
        setHymnRowsVal(prevRows => [
            ...prevRows, ''
        ]);
    }

    function delHymnRows()
    {
        setHymnRowsVal((prevRows) => {
            const newRows = [...prevRows];
            if(newRows.length != 1)
            {
                newRows.pop();
            }
            else
            {
                hymnRowsChange(0, '');
            }
            
            return newRows;
        });
    }

    function addTempleRows()
    {
        setTempleRowsVal(prevRows => [
            ...prevRows, ''
        ]);
    }

    function delTempleRows()
    {
        setTempleRowsVal((prevRows) => {
            const newRows = [...prevRows];
            if(newRows.length != 1)
            {
                newRows.pop();
            }
            else
            {
                templeRowsChange(0, '');
            }
            
            return newRows;
        });
    }

    // PLACEHOLDER TO READ WHAT IS HAPPENING WITH KEYS AND INPUTS
    function readRows(rowVal)
    {
        console.log(rowVal);
    }

    React.useEffect(() => {
        fetchAnswerKey();
    }, []);

    return (
        <main>
            <div>
                <h3 className="guess_title">Welcome to the Answer Key, {localStorage.getItem('Username')}!</h3>
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
                <h3>Dress Color</h3>
                Please select from the drop down menus next to the session: 

                <br />
                <br />

                <div>
                    <label htmlFor="pick_color_dressSat">Saturday Morning Dress: </label>
                    <select className="color_picker" id="pick_color_dressSat" value={dressSat} onChange={(e) => setDressSat(e.target.value)}>
                        <option value=''>[Select]</option>                        
                        <option value="Raspberry">Raspberry</option>
                        <option value="Fuchsia">Fuchsia</option>
                        <option value="Turquoise">Turquoise</option>
                        <option value="Royal Blue">Royal Blue</option>
                        <option value="Purple">Purple</option>
                        <option value="Black">Black</option>
                        <option value="Cream">Cream</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="pick_color_dressSun">Sunday Morning Dress: </label>
                    <select className="color_picker" id="pick_color_dressSun" value={dressSun} onChange={(e) => setDressSun(e.target.value)}>
                        <option value=''>[Select]</option>                        
                        <option value="Raspberry">Raspberry</option>
                        <option value="Fuchsia">Fuchsia</option>
                        <option value="Turquoise">Turquoise</option>
                        <option value="Royal Blue">Royal Blue</option>
                        <option value="Purple">Purple</option>
                        <option value="Black">Black</option>
                        <option value="Cream">Cream</option>
                    </select>
                </div>

                <hr />

                <h3>Hymns</h3>
                Please input the hymn number: 

                <br />
                <br />

                <div className="hymns-div">
                <table className="adaptive">
                    <thead className="hymnhead">
                        <tr>
                            <th>Hymn Number(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hymnRowsVal.map((val, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                    type="number"
                                    value={val}
                                    onChange={(e) => hymnRowsChange(index, e.target.value)}
                                />
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                    <caption className="adaptive_button_div">
                        <button type="button" className="adaptive_button" onClick={() => addHymnRows()}> + </button>
                        <button type="button" className="adaptive_button" onClick={() => delHymnRows()}> - </button>
                        {/* Read button intended for bugfixing */}
                        <button type="button" className="adaptive_button" onClick={() => readRows(hymnRowsVal)}> Read </button>
                    </caption> 
                </table>
                </div>

                <hr />

                <div>
                    <img className="lvtemple" src="lv_temple.jpg" alt="Las Vegas Temple" height="300" />
                </div>

                <h3>Temples</h3>
                Please input the location as follows: Country, State/Region, City

                <br />
                <br />
                
                <div className="temples-div">
                <table className="adaptive">
                    <thead className="templehead">
                        <tr>
                            <th>Temple Prediction(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {templeRowsVal.map((val, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                    type="text"
                                    value={val}
                                    onChange={(e) => templeRowsChange(index, e.target.value)}
                                />
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                    <caption className="adaptive_button_div">
                        <button type="button" className="adaptive_button" onClick={() => addTempleRows()}> + </button>
                        <button type="button" className="adaptive_button" onClick={() => delTempleRows()}> - </button>
                        {/* Read button intended for bugfixing */}
                        <button type="button" className="adaptive_button" onClick={() => readRows(templeRowsVal)}> Read </button>
                    </caption> 
                </table>
                </div>

                <hr />
                <br />

                Fill out the Answer Sheet as you watch General Conference!
                <div>
                    <button className="submit" type="button" onClick={() => saveAnswerKey()}>{updateText}</button>
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