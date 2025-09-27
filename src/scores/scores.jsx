import React from "react";
import './scores.css';

export function Scores() {
    const [scores, setScores] = React.useState([]);
    const [userPoints, setUserPoints] = React.useState(0);
    const userName = localStorage.getItem('Username');
    const [allScores, setAllScores] = React.useState(false);

    const partialScoreDisplay = async () => {
        let fetchCall = `/api/scores/` + userName;
        await fetch(fetchCall)
        .then((response) => response.json())
        .then(([scoresArray, selfPoints]) => {
            setScores(scoresArray);
            setUserPoints(selfPoints);
        });
    }

// NEW FEATURE TO DISPLAY ALL TABLE SCORES
    // const allScoreDisplay = async () => {
    //     let fetchCall = `/api/scores/scores_all`;
    //     await fetch(fetchCall)
    //     .then((response) => response.json())
    //     .then((scoresArray) => {
    //         setScores(scoresArray);
    //     });
    // }

    // const formatTable = async () => {
    //     const scoreRows = [];
    //     if (scores.length) {
    //         for (const [i] of scores.entries()) {
    //             let usr = scores[i].name;
    //             let scr = scores[i].score;
    //             let trp;
    
    //             if(i + 1 == 1)
    //             {
    //                 trp = "🥇";
    //             } else if (i + 1 == 2) 
    //             {
    //                 trp = "🥈";
    //             } else if (i + 1 == 3)
    //             {
    //                 trp = "🥉";
    //             } else {
    //                 trp = "👏";
    //             }
    
    //             scoreRows.push(
    //                 <tr key={i}>
    //                     <td>{i+1}</td>
    //                     <td>{usr}</td>
    //                     <td>{scr}</td>
    //                     <td>{trp}</td>
    //                 </tr>
    //             );
    //         }
    //     } else {
    //         scoreRows.push(
    //             <tr key='0'>
    //                 <td colSpan='4'>Wait to see the scores!</td>
    //             </tr>
    //         )
    //     }
    // }

    const handleScoreBoardDisplay = async () => {
        if(allScores == false)
        {
            await partialScoreDisplay();
        }
        // else if(allScores == true)
        // {
        //     await allScoreDisplay();
        //     formatTable();
        // }
    }

    React.useEffect(() => {
        handleScoreBoardDisplay();
    }, []);

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
                    <input type="number" className="display-user-score" id="user-score" value={userPoints} readOnly />
                </div>
            </div>

            <div className="scoreboard-div">
                <table className="scoreboard">
                    <thead className="scorehead">
                        <tr>
                            <th>Placement</th>
                            <th>Username</th>
                            <th>Points</th>
                            <th>🏆</th>
                        </tr>
                    </thead>
                    <tbody className="scorerows" id='score'>{scoreRows}
                    </tbody>

{/* FEATURE IN THE FUTURE!!!  :: Reference :: index.js - 110/117 :: database.js - 113/120 :: ~ 20/80 */}
                    {/* <caption>
                        <a href="#" onClick={(e) => { 
                            e.preventDefault();
                            setAllScores(allScores => !allScores); 
                            handleScoreBoardDisplay(); 
                        }}>Click me</a>
                    </caption> */}


                </table>
            </div>
            <div className="advice-text">
                Have any <a id="advice" href="https://forms.gle/ucD17eJC8YFJNbQN9">advice</a> to make FGC better?
            </div>
        </main>
    );
}