export class ScoreCalculator {
    #clean(sheet) {
        let copy = structuredClone(sheet);
        for (let category in copy) {
            let i = 0;
            if(category == 'name' || category == '_id')
            {
                continue;
            }
            while (i < copy[category].length) {
                if (typeof copy[category][i] === 'string') {
                    let trimmed = copy[category][i].trim();
                    let cleaned = trimmed.toLowerCase();
                    copy[category][i] = cleaned;
                } else if (Array.isArray(copy[category][i])) {
                    let j = 0;
                    while (j < copy[category][i].length) {
                        if (typeof copy[category][i][j] === 'string') {
                            let trimmed = copy[category][i][j].trim(); 
                            let cleaned = trimmed.toLowerCase();
                            copy[category][i][j] = cleaned;
                        }
                        j++;
                    }
                }
                i++;
            }
        }
        return copy;
    }

    score(guess, answer) {
        let cleanAnswer = this.#clean(answer);
        let cleanGuess = this.#clean(guess);
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
                if(category == "name" || category == "_id") // Known moments of incompatibility
                {
                    continue;
                }
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
            } else if (category == 'dressClr') {
                for (let i = 0; i < 2; i++)
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