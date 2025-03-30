import React from "react";
import { ScoreCalculator } from "./scoreCalculate";
import { GuessSheet } from "../guess/guessSheet";
import { Profile } from "../login/profile";
import './scores.css';

export function Scores() {
    const [scores, setScores] = React.useState([]);
    const [points, setPoints] = React.useState(0);
    const userName = localStorage.getItem('Username');
    const userKey = JSON.parse(localStorage.getItem(userName + ' Guess'));
    const answerKey = new GuessSheet();
    const userProfile = new Profile();
    const scoreCalc = new ScoreCalculator();
    
    // userProfile.refill(userName);

    // TEMPORARY --> Note to self, create an Admin/Answer page
    answerKey.satMor = ["a", "b", "c"];
    answerKey.satAft = ["a", "a", "a"];
    answerKey.satEvn = ["a", "a", "a"];
    answerKey.sunMor = ["a", "a", "a"];
    answerKey.sunAft = ["a", "a", "a"];
    answerKey.tieClr = ["Red", "White", "Blue"];
    answerKey.hymnNum = ["4", "4", "4"];
    answerKey.templeLoc = [ ["USA", "PA", "Susquehanna"], ["Cuba", "Menis"], ["Quatamala", "Quatamala City"] ]

    // localStorage.setItem('scores', JSON.stringify(scores));
    const handleScoreUpdate = async (table) => {
        await saveScore(table);

        fetch(`/api/scores`)
        .then((response) => response.json())
        .then(([scoresArray, selfPoints]) => {

            console.log(" ");
            console.log(" === ");
            console.log(" ");

            console.log("Array");
            console.log(JSON.stringify(scoresArray));
            setScores(scoresArray);

            console.log(" ");
            console.log(" === ");
            console.log(" ");

            console.log("Points");
            console.log(selfPoints);
            setPoints(selfPoints);

            console.log(" ");
            console.log(" === ");
            console.log(" ");
        });
    }


    React.useEffect(() => {
        const userScore = scoreCalc.score(userKey, answerKey);
        // console.log(`The score is ${userScore}`);
        setPoints(userScore);

        userProfile.score = userScore;

        // const scoreText = JSON.parse(localStorage.getItem('scores')); // Marked to be removed
        const userTable = scoreCalc.createTableRow(userName, userProfile.score);

        handleScoreUpdate(userTable);
    }, []);


    async function saveScore(scoreText)
    {
        console.log("0.1) PRE-FETCH: Posting...");
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
        </main>
    );
}