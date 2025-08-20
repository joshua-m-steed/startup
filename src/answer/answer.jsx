import React from "react";
import { GuessSheet } from "../guess/guessSheet";
import { ScoreCalculator } from "../scores/scoreCalculate";
import { NavLink } from "react-router-dom";

import './answer.css';

// BUG NOTES: 
// When comparing guesses, 'dressClr' shows as missing/not array || Priority - NA, RSN - Guess are missing on guess sheets, will need to be reset
// PRIORITY :: WHY does my answer key become lower case once I hit update? #clean?
// PRIORITY :: WOULD it be POSSIBLE to *full table* all five tables?

export function Answer() {
    // NOTE :: Attempt to Compress this code, explore ::
    const scoreCalc = new ScoreCalculator();
    const answerKey = new GuessSheet();
    // const [locked, setLocked] = React.useState(false); // For a future Idea
    const [updateText, setUpdateText] = React.useState("Update");

    const [satMorRowsVal, setSatMorRowsVal] = React.useState(['']);
    const satMorRowsChange = (index, newVal) => {
            const updated = [...satMorRowsVal];
            updated[index] = newVal;
            setSatMorRowsVal(updated);
            };

    const [satAftRowsVal, setSatAftRowsVal] = React.useState(['']);
    const satAftRowsChange = (index, newVal) => {
            const updated = [...satAftRowsVal];
            updated[index] = newVal;
            setSatAftRowsVal(updated);
            };

    const [satEvnRowsVal, setSatEvnRowsVal] = React.useState(['']);
    const satEvnRowsChange = (index, newVal) => {
            const updated = [...satEvnRowsVal];
            updated[index] = newVal;
            setSatEvnRowsVal(updated);
            };

    const [sunMorRowsVal, setSunMorRowsVal] = React.useState(['']);
    const sunMorRowsChange = (index, newVal) => {
            const updated = [...sunMorRowsVal];
            updated[index] = newVal;
            setSunMorRowsVal(updated);
            };

    const [sunAftRowsVal, setSunAftRowsVal] = React.useState(['']);
    const sunAftRowsChange = (index, newVal) => {
            const updated = [...sunAftRowsVal];
            updated[index] = newVal;
            setSunAftRowsVal(updated);
            };

    const [tieProphet, setTieProphet] = React.useState('');
    const [tie1stCoun, setTie1stCoun] = React.useState('');
    const [tie2ndCoun, setTie2ndCoun] = React.useState('');

    const [dressSat, setDressSat] = React.useState('');
    const [dressSun, setDressSun] = React.useState('');

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

    const [stateRowsVal, setStateRowsVal] = React.useState([['','']]);
    const stateRowsChange = (index, newVal, place) => {
            const updated = [...stateRowsVal];
            console.log("Here is the: " + index + " " + newVal + " " + place);
            updated[index][place] = newVal;
            setStateRowsVal(updated); 
            };

    const [worldRowsVal, setWorldRowsVal] = React.useState([['','']]);
    const worldRowsChange = (index, newVal, place) => {
            const updated = [...worldRowsVal];
            console.log("Here is the: " + index + " " + newVal + " " + place);
            updated[index][place] = newVal;
            setWorldRowsVal(updated); 
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
        setSatMorRowsVal(answer.satMor);
        setSatAftRowsVal(answer.satAft);
        setSatEvnRowsVal(answer.satEvn);
        setSunMorRowsVal(answer.sunMor);
        setSunAftRowsVal(answer.sunAft);

        setTieProphet(answer.tieClr[0]);
        setTie1stCoun(answer.tieClr[1]);
        setTie2ndCoun(answer.tieClr[2]);

        setDressSat(answer.dressClr[0]);
        setDressSun(answer.dressClr[1]);

        setHymnRowsVal(answer.hymnNum);
        
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

            answer.templeLoc[i] = fullTempleString;
            i++;
        }
        
        setTempleRowsVal(answer.templeLoc);
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
        answerKey.setGuess('satMor', satMorRowsVal);
        answerKey.setGuess('satAft', satAftRowsVal);
        answerKey.setGuess('satEvn', satEvnRowsVal);
        answerKey.setGuess('sunMor', sunMorRowsVal);
        answerKey.setGuess('sunAft', sunAftRowsVal);
        answerKey.setGuess('tieClr', [tieProphet, tie1stCoun, tie2ndCoun]);
        answerKey.setGuess('dressClr', [dressSat, dressSun]);
        answerKey.setGuess('hymnNum', hymnRowsVal);

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

        await fetch(`/api/answer`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(answerKey),
        });

        updateAndCompareGuesses(answerKey);
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

    function addSatMorRows()
    {
        setSatMorRowsVal(prevRows => [
            ...prevRows, ''
        ]);
    }

    function delSatMorRows()
    {
        setSatMorRowsVal((prevRows) => {
            const newRows = [...prevRows];
            if(newRows.length != 1)
            {
                newRows.pop();
            }
            else
            {
                satMorRowsChange(0, '');
            }
            
            return newRows;
        });
    }

    function addSatAftRows()
    {
        setSatAftRowsVal(prevRows => [
            ...prevRows, ''
        ]);
    }

    function delSatAftRows()
    {
        setSatAftRowsVal((prevRows) => {
            const newRows = [...prevRows];
            if(newRows.length != 1)
            {
                newRows.pop();
            }
            else
            {
                satAftRowsChange(0, '');
            }
            
            return newRows;
        });
    }

    function addSatEvnRows()
    {
        setSatEvnRowsVal(prevRows => [
            ...prevRows, ''
        ]);
    }

    function delSatEvnRows()
    {
        setSatEvnRowsVal((prevRows) => {
            const newRows = [...prevRows];
            if(newRows.length != 1)
            {
                newRows.pop();
            }
            else
            {
                satEvnRowsChange(0, '');
            }
            
            return newRows;
        });
    }

    function addSunMorRows()
    {
        setSunMorRowsVal(prevRows => [
            ...prevRows, ''
        ]);
    }

    function delSunMorRows()
    {
        setSunMorRowsVal((prevRows) => {
            const newRows = [...prevRows];
            if(newRows.length != 1)
            {
                newRows.pop();
            }
            else
            {
                sunMorRowsChange(0, '');
            }
            
            return newRows;
        });
    }

    function addSunAftRows()
    {
        setSunAftRowsVal(prevRows => [
            ...prevRows, ''
        ]);
    }

    function delSunAftRows()
    {
        setSunAftRowsVal((prevRows) => {
            const newRows = [...prevRows];
            if(newRows.length != 1)
            {
                newRows.pop();
            }
            else
            {
                sunAftRowsChange(0, '');
            }
            
            return newRows;
        });
    }

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

    function addStateRows()
    {
        setStateRowsVal(prevRows => [
            ...prevRows, ['','']
        ]);
    }

    function delStateRows()
    {
        setStateRowsVal((prevRows) => {
            const newRows = [...prevRows];
            if(newRows.length != 1)
            {
                newRows.pop();
            }
            else
            {
                stateRowsChange(0, '', 0);
                stateRowsChange(0, '', 1);
            }
            
            return newRows;
        });
    }

    function addWorldRows()
    {
        setWorldRowsVal(prevRows => [
            ...prevRows, ['','']
        ]);
    }

    function delWorldRows()
    {
        setWorldRowsVal((prevRows) => {
            const newRows = [...prevRows];
            if(newRows.length != 1)
            {
                newRows.pop();
            }
            else
            {
                worldRowsChange(0, '', 0);
                worldRowsChange(0, '', 1);
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
                        <div className="whospeaks-satmor-div">
                        <table className="adaptive">
                            <thead className="whospeaks-satmor-head">
                                <tr>
                                    <th>Sat Morning</th>
                                </tr>
                            </thead>
                            <tbody>
                                {satMorRowsVal.map((val, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                            type="text"
                                            value={val}
                                            onChange={(e) => satMorRowsChange(index, e.target.value)}
                                        />
                                        </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                            <caption className="adaptive_button_div">
                                <button type="button" className="adaptive_button" onClick={() => addSatMorRows()}> + </button>
                                <button type="button" className="adaptive_button" onClick={() => delSatMorRows()}> - </button>
                                {/* Read button intended for bugfixing */}
                                {/* <button type="button" className="adaptive_button" onClick={() => readRows(templeRowsVal)}> Read </button> */}
                            </caption> 
                        </table>
                        </div>

                        <div className="whospeaks-sataft-div"> 
                        <table className="adaptive">
                            <thead className="whospeaks-sataft-head">
                                <tr>
                                    <th>Sat Afternoon</th>
                                </tr>
                            </thead>
                            <tbody>
                                {satAftRowsVal.map((val, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                            type="text"
                                            value={val}
                                            onChange={(e) => satAftRowsChange(index, e.target.value)}
                                        />
                                        </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                            <caption className="adaptive_button_div">
                                <button type="button" className="adaptive_button" onClick={() => addSatAftRows()}> + </button>
                                <button type="button" className="adaptive_button" onClick={() => delSatAftRows()}> - </button>
                                {/* Read button intended for bugfixing */}
                                {/* <button type="button" className="adaptive_button" onClick={() => readRows(templeRowsVal)}> Read </button> */}
                            </caption> 
                        </table>
                        </div>

                        <div className="whospeaks-satevn-div"> 
                        <table className="adaptive">
                            <thead className="whospeaks-satevn-head">
                                <tr>
                                    <th>Sat Evening</th>
                                </tr>
                            </thead>
                            <tbody>
                                {satEvnRowsVal.map((val, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                            type="text"
                                            value={val}
                                            onChange={(e) => satEvnRowsChange(index, e.target.value)}
                                        />
                                        </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                            <caption className="adaptive_button_div">
                                <button type="button" className="adaptive_button" onClick={() => addSatEvnRows()}> + </button>
                                <button type="button" className="adaptive_button" onClick={() => delSatEvnRows()}> - </button>
                                {/* Read button intended for bugfixing */}
                                {/* <button type="button" className="adaptive_button" onClick={() => readRows(templeRowsVal)}> Read </button> */}
                            </caption> 
                        </table>
                        </div>

                        <div className="whospeaks-sunmor-div"> 
                        <table className="adaptive">
                            <thead className="whospeaks-sunmor-head">
                                <tr>
                                    <th>Sun Morning</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sunMorRowsVal.map((val, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                            type="text"
                                            value={val}
                                            onChange={(e) => sunMorRowsChange(index, e.target.value)}
                                        />
                                        </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                            <caption className="adaptive_button_div">
                                <button type="button" className="adaptive_button" onClick={() => addSunMorRows()}> + </button>
                                <button type="button" className="adaptive_button" onClick={() => delSunMorRows()}> - </button>
                                {/* Read button intended for bugfixing */}
                                {/* <button type="button" className="adaptive_button" onClick={() => readRows(templeRowsVal)}> Read </button> */}
                            </caption> 
                        </table>
                        </div>        

                        <div className="whospeaks-sunaft-div"> 
                        <table className="adaptive">
                            <thead className="whospeaks-sunaft-head">
                                <tr>
                                    <th>Sun Afternoon</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sunAftRowsVal.map((val, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                            type="text"
                                            value={val}
                                            onChange={(e) => sunAftRowsChange(index, e.target.value)}
                                        />
                                        </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                            <caption className="adaptive_button_div">
                                <button type="button" className="adaptive_button" onClick={() => addSunAftRows()}> + </button>
                                <button type="button" className="adaptive_button" onClick={() => delSunAftRows()}> - </button>
                                {/* Read button intended for bugfixing */}
                                {/* <button type="button" className="adaptive_button" onClick={() => readRows(templeRowsVal)}> Read </button> */}
                            </caption> 
                        </table>
                        </div> 
                        
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
                        {/* <button type="button" className="adaptive_button" onClick={() => readRows(hymnRowsVal)}> Read </button> */}
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
                        {/* <button type="button" className="adaptive_button" onClick={() => readRows(templeRowsVal)}> Read </button> */}
                    </caption> 
                </table>

                <br></br>

                <table className="adaptive">
                    <thead className="templehead">
                        <tr>
                            <th>Temple Predictions</th>
                        </tr>
                    </thead>
                    <thead className="templehead">
                        <tr>
                            <th>State-side Temples</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stateRowsVal.map((val, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                    type="text"
                                    placeholder={index === 0 ? 'City' : ''}
                                    value={val[0]}
                                    onChange={(e) => stateRowsChange(index, e.target.value, 0)}
                                />
                                    <input
                                    type="text"
                                    placeholder={index === 0 ? 'State' : ''}
                                    value={val[1]}
                                    onChange={(e) => stateRowsChange(index, e.target.value, 1)}
                                />
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                    <caption className="adaptive_button_div">
                        <button type="button" className="adaptive_button" onClick={() => addStateRows()}> + </button>
                        <button type="button" className="adaptive_button" onClick={() => delStateRows()}> - </button>
                        {/* Read button intended for bugfixing */}
                        <button type="button" className="adaptive_button" onClick={() => readRows(stateRowsVal)}> Read </button>
                    </caption> 
                </table>

                <br></br>

                <table className="adaptive">
                    <thead className="templehead">
                        <tr>
                            <th>Temple Predictions</th>
                        </tr>
                    </thead>
                    <thead className="templehead">
                        <tr>
                            <th>World Temples</th>
                        </tr>
                    </thead>
                    <tbody>
                        {worldRowsVal.map((val, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                    type="text"
                                    placeholder={index === 0 ? 'City' : ''}
                                    value={val[0]}
                                    onChange={(e) => worldRowsChange(index, e.target.value, 0)}
                                />
                                    <input
                                    type="text"
                                    placeholder={index === 0 ? 'Country' : ''}
                                    value={val[1]}
                                    onChange={(e) => worldRowsChange(index, e.target.value, 1)}
                                />
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                    <caption className="adaptive_button_div">
                        <button type="button" className="adaptive_button" onClick={() => addWorldRows()}> + </button>
                        <button type="button" className="adaptive_button" onClick={() => delWorldRows()}> - </button>
                        {/* Read button intended for bugfixing */}
                        <button type="button" className="adaptive_button" onClick={() => readRows(worldRowsVal)}> Read </button>
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