import React from "react";
import { ScoreCalculator } from "./scoreCalculate";
import { GuessSheet } from "../guess/guessSheet";
import { Profile } from "../login/profile";
import './scores.css';

export function Scores() {
    const [scores, setScores] = React.useState(() => { return JSON.parse(localStorage.getItem('scores')) || [] });
    const [points, setPoints] = React.useState(0);
    const userName = localStorage.getItem('Username');
    const userKey = JSON.parse(localStorage.getItem(userName + ' Guess'));
    const answerKey = new GuessSheet();
    const userProfile = new Profile();
    const scoreCalc = new ScoreCalculator();
    
    // userProfile.refill(userName);

    // TEMPORARY --> Note to self, create an Admin/Answer page
    answerKey.satMor = ["a", "a", "a"];
    answerKey.satAft = ["a", "a", "a"];
    answerKey.satEvn = ["a", "a", "a"];
    answerKey.sunMor = ["a", "a", "a"];
    answerKey.sunAft = ["a", "a", "a"];
    answerKey.tieClr = ["Red", "White", "Blue"];
    answerKey.hymnNum = ["4", "4", "4"];
    answerKey.templeLoc = [ ["USA", "PA", "Susquehanna"], ["Cuba", "Menis"], ["Quatamala", "Quatamala City"] ]

    localStorage.setItem('scores', JSON.stringify(scores));

    React.useEffect(() => {
        const userScore = scoreCalc.score(userKey, answerKey);
        // console.log(`The score is ${userScore}`);
        setPoints(userScore);

        userProfile.score = userScore;

        const scoreText = JSON.parse(localStorage.getItem('scores'));
        const userTable = scoreCalc.createTableRow(userName, userProfile.score);

        localStorage.setItem('scores', JSON.stringify(scoreText));
        // console.log(`OOO Collected the score text: ${JSON.stringify(scoreText)}`);
        saveScore(userTable);
        fetch(`/api/scores`)
            .then((response) => response.json())
            .then(([scoresArray, selfPoints]) => {
                // console.log(`OBJECT -> ${JSON.stringify(scoresArray)}`);
                // console.log(`POINTS -> ${JSON.stringify(selfPoints)}`);
                setScores(scoresArray);
                setPoints(selfPoints);
            });
    }, []);

    async function saveScore(scoreText)
    {
        // console.log("--- Within the Save Function --- Scores/L73");
        // console.log(`DATA -> ${JSON.stringify(scoreText)}`);
        await fetch(`/api/scores`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(scoreText),
        });
        // console.log("XXX Exiting the Save Function XXX Scores/L79");
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
        </main>
    );
}