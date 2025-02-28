import React from "react";
import { ScoreCalculator } from "./scoreCalculate";
import { GuessSheet } from "../guess/guessSheet";
import { Profile } from "../login/profile";
import './scores.css';

export function Scores() {
    const [score, setScore] = React.useState([]);
    const [points, setPoints] = React.useState([]);
    const userName = localStorage.getItem('Username');
    const userKey = JSON.parse(localStorage.getItem(userName + ' Guess'));
    const userProfile = new Profile();
    const scoreCalc = new ScoreCalculator();
    const answerKey = new GuessSheet();
   
    userProfile.refill(userName);

    answerKey.satMor = ["a", "a", "a"];
    answerKey.satAft = ["a", "a", "a"];
    answerKey.satEvn = ["a", "a", "a"];
    answerKey.sunMor = ["a", "a", "a"];
    answerKey.sunAft = ["a", "a", "a"];
    answerKey.tieClr = ["Red", "White", "Blue"];
    answerKey.hymnNum = ["4", "4", "4"];
    answerKey.templeLoc = [ ["USA", "PA", "Susquehanna"], ["Cuba", "Menis"], ["Quatamala", "Quatamala City"] ]

    localStorage.setItem('scores', JSON.stringify([]));

    React.useEffect(() => {
        let userScore = scoreCalc.score(userKey, answerKey);
        setPoints(scoreCalc.score(userKey, answerKey))
        userProfile.updateScore(userScore);

        const scoreText = JSON.parse(localStorage.getItem('scores'));
        const userTable = scoreCalc.createTableRow(userName, userProfile.score);

        scoreText.push(userTable);

        if (scoreText) {
            setScore(scoreText);
        }

        
    }, []);

    const scoreRows = [];
    if (score.length) {
        for (const [i] of score.entries()) {
            let usr = score[0].name;
            let scr = score[0].score;
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
                    <input type="number" className="display-user-score" id="score" value={points} readOnly />
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