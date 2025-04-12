import React from "react";
import { ScoreCalculator } from "./scoreCalculate";
import { GuessSheet } from "../guess/guessSheet";
import { Profile } from "../login/profile";
import './scores.css';

export function Scores() {
    const [scores, setScores] = React.useState([]);
    const [points, setPoints] = React.useState(0);
    const userName = localStorage.getItem('Username');
    
    // userProfile.refill(userName);

    // TEMPORARY --> Note to self, create an Admin/Answer page
    // answerKey.satMor = ["Holland", "Rasband", "Cook", "Eyring"];
    // answerKey.satAft = ["Andersen", "Renlund", "Uchtdorf"];
    // answerKey.satEvn = ["Stevenson", "Christofferson", ""];
    // answerKey.sunMor = ["Gong", "Bednar", "Oaks"];
    // answerKey.sunAft = ["Kearon", "Soares", "Nelson"];
    // answerKey.tieClr = ["", "Red", "Red"];
    // answerKey.hymnNum = ["58", "71", "34", "2", "87", "30", "70", "1031", "364", "1015", "254", "1201", "14", "1206", "66", "83", "72", "1027", "243", "141", "1003", "147", "1030", "67", "76", "6"];
    // answerKey.templeLoc = [ ["USA", "UT", "Spanish Fork"], ["Mexico", "Reynosa"], ["Peru", "Chorrillos"], ["Uruguay", "Rivera"], ["Brazil", "Campo Grande"], ["Portugal", "Porto"], ["Nigeria", "Uyo"], ["Philippines", "San Jose del Monte"], ["New Caledonia", "Nouméa"], ["Australia", "Liverpool"], ["USA", "ID", "Caldwell"], ["USA", "AZ", "Flagstaff"], ["USA", "SD", "Rapid City"], ["USA", "SC", "Greenville"], ["USA", "VA", "Norfolk"] ]

    const handleScoreUpdate = async () => {
        // await saveScore(table);
        let fetchCall = `/api/scores/` + userName;
        await fetch(fetchCall)
        .then((response) => response.json())
        .then(([scoresArray, selfPoints]) => {
            setScores(scoresArray);
            setPoints(selfPoints);
        });
    }


    React.useEffect(() => {
        handleScoreUpdate();
    }, []);


    async function saveScore(scoreText)
    {
        await fetch(`/api/scores`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(scoreText),
        });
    }

    const scoreRows = [];
    if (scores.length) {
        for (const [i] of scores.entries()) {
            let usr = scores[i].name;
            let scr = scores[i].score;
            let trp;

            if(i + 1 == 1)
            {
                trp = "🥇";
            } else if (i + 1 == 2) 
            {
                trp = "🥈";
            } else if (i + 1 == 3)
            {
                trp = "🥉";
            } else {
                trp = "👏";
            }

            scoreRows.push(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{usr}</td>
                    <td>{scr}</td>
                    <td>{trp}</td>
                </tr>
            );
        }
    } else {
        scoreRows.push(
            <tr key='0'>
                <td colSpan='4'>Wait to see the scores!</td>
            </tr>
        )
    }

    return (
        <main>
            <h3>Scores</h3>

            <div className="user_score">
                <div>
                    <label htmlFor="user-score">Your score: </label>
                </div>
                <div>
                    <input type="number" className="display-user-score" id="user-score" value={points} readOnly />
                </div>
            </div>

            <div className="scoreboard-div">
                <table className="scoreboard">
                    <thead>
                        <tr>
                            <th>Placement</th>
                            <th>Username</th>
                            <th>Points</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id='score'>{scoreRows}
                    </tbody>
                </table>
            </div>
            <div>
                Any <a id="advice" href="https://forms.gle/ucD17eJC8YFJNbQN9">advice</a>?
            </div>
        </main>
    );
}