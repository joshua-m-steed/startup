import React from "react";
import { ScoreCalculator } from "./scoreCalculate";
import { GuessSheet } from "../guess/guessSheet";
import './scores.css';

export function Scores() {
    const [score, setScore] = React.useState([]);
    const userKey = new GuessSheet().load(localStorage.getItem('userName'));

    const answerKey = new Object({
        satMor: ["a", "a", "a"],
        satAft: ["a", "a", "a"],
        satEvn: ["a", "a", "a"],
        sunMor: ["a", "a", "a"],
        sunAft: ["a", "a", "a"],
        tieCol: ["Red", "White", "Blue"],
        hymnNum: ["4", "4", "4"],
        templeLoc: [ ["USA", "PA", "Susquehanna"], ["Cuba", "Menis"], ["Quatamala", "Quatamala City"] ]
    })

    React.useEffect(() => {
        let points = new ScoreCalculator().score(userKey, answerKey);
        localStorage.setItem('CurScore', points);

        const scoreText = localStorage.getItem('score');
        // const userGuess = JSON.parse(localStorage.getItem('userGuess'));
        if (scoreText) {
            setScore(calcScore(scoreText, answerKey)); //JSON.parse(scoreText)
        }
    }, []);

    const scoreRows = [];
    if (score.length) {
        for (const [i, score_data] of score.entries()) {
            //if i + 1 = 1, setTrophy to first
            //if i + 1 = 2, setTrophy to second
            //if i + 1 = 3, setTrophy to third
            //else keep trophy as hand clap

            scoreRows.push(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{/*UserName*/}</td>
                    <td>{/*UserScore*/}</td>
                    <td>{/*Trophy*/}</td>
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
                    <input type="number" className="display-user-score" id="score" value="0" readOnly />
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
                        {/* <tr>
                            <td>1</td>
                            <td>Matt</td>
                            <td>21</td>
                            <td> 🥇 </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Kayla</td>
                            <td>17</td>
                            <td> 🥈 </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Tim</td>
                            <td>9</td>
                            <td> 🥉 </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Emma</td>
                            <td>7</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>john_smith</td>
                            <td>0</td>
                            <td></td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </main>
    );
}