export class ScoreCalculator {
    #clean(sheet) {
        for (let category in sheet) {
            let i = 0;
            if(category == 'name' || category == '_id')
            {
                continue;
            }
            while (i < sheet[category].length) {
                if (typeof sheet[category][i] === 'string') {
                    let trimmed = sheet[category][i].trim();
                    let cleaned = trimmed.toLowerCase();
                    sheet[category][i] = cleaned;
                } else if (Array.isArray(sheet[category][i])) {
                    let j = 0;
                    while (j < sheet[category][i].length) {
                        if (typeof sheet[category][i][j] === 'string') {
                            let trimmed = sheet[category][i][j].trim(); 
                            let cleaned = trimmed.toLowerCase();
                            sheet[category][i][j] = cleaned;
                        }
                        j++;
                    }
                }
                i++;
            }
        }
        return sheet;
    }

    score(guess, answer) {
        console.log("PRE");
        let cleanAnswer = this.#clean(answer);
        console.log("POST");
        let cleanGuess = this.#clean(guess);
        console.log("DOUBLE POST");

        console.log(JSON.stringify(answer));
        console.log(JSON.stringify(guess));
        let points = 0;


        // Needs to be specific to the position

        // for(let category in cleanAnswer) {
        //     if (cleanAnswer == null || cleanGuess == null) {
        //         // console.error("Either cleanAnswer or cleanGuess is null or undefined.");
        //         continue;
        //     }
        //     else if (!Array.isArray(cleanAnswer[category]) || !Array.isArray(cleanGuess[category])) {
        //         console.error(`Category ${category} is not an array or doesn't exist.`);
        //         continue;
        //     }

        //     let i = 0;
        //     while(i < cleanAnswer[category].length && i < cleanGuess[category].length) {
        //         if(category === 'templeLoc') {
        //             let j = 0;
        //             while (j < cleanAnswer[category][i].length && j < cleanGuess[category][i].length) {
        //                 if(cleanAnswer[category][i][j] == cleanGuess[category][i][j]) {
        //                     points++;
        //                 }
        //                 j++;
        //             }
        //         } else {
        //             if(cleanAnswer[category][i] === cleanGuess[category][i]) {
        //                 points++;
        //             }
        //         }
        //         i++; 
        //     }
        // }

        // === This is a where one guess matters in any order

        for (let category in cleanAnswer) {
            if (cleanAnswer == null || cleanGuess == null) {
                continue;
            } else if (!Array.isArray(cleanAnswer[category]) || !Array.isArray(cleanGuess[category])) {
                console.error(`Category ${category} is not an array or doesn't exist.`);
                continue;
            }

            if (category === 'templeLoc') {
                for (let i = 0; i < cleanAnswer[category].length; i++) {
                    if (!Array.isArray(cleanAnswer[category][i]) || !Array.isArray(cleanGuess[category][i])) {
                        continue;
                    }

                    let answerSet = new Set(cleanAnswer[category][i]);
                    let guessSet = new Set(cleanGuess[category][i]);

                    for (let value of guessSet) {
                        if(value === "")
                        {
                            continue;
                        }
                        if (answerSet.has(value)) {
                            points++;
                        }
                    }
                }
            } else if (category == 'tieClr') {
                for (let i = 0; i < 3; i++)
                {
                    const answerVal = cleanAnswer[category][i];
                    const guessVal = cleanGuess[category][i];

                    if(guessVal === "")
                    {
                        continue;
                    }

                    if(guessVal === answerVal)
                    {
                        points++;
                    }
                }
            } 
            else {
                let answerSet = new Set(cleanAnswer[category]);
                let guessSet = new Set(cleanGuess[category]);

                for (let value of guessSet) {
                    if(value === "")
                    {
                        continue;
                    }
                    if (answerSet.has(value)) {
                        points++;
                    }
                }
            }
        }
        console.log(points);
        return points;
    }

    createTableRow(username, points) 
    {
        const score_row = {name: username, score: points, trophy: "👏"};
        return score_row;
    }
}