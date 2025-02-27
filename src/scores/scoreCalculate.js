export class ScoreCalculator {
    constructor()
    {
        this.points = 0;
    }

    #clean(sheet) {
        for (let category in sheet) {
            let i = 0;
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
        let cleanAnswer = this.#clean(answer);
        let cleanGuess = this.#clean(guess);

        for(let category in cleanAnswer) {
            if (!Array.isArray(cleanAnswer[category]) || !Array.isArray(cleanGuess[category])) {
                    console.error(`Category ${category} is not an array or doesn't exist.`);
                    continue;
            }

            let i = 0;
            while(i < cleanAnswer[category].length && i < cleanGuess[category].length) {
                if(category === 'templeLoc') {
                    let j = 0;
                    while (j < cleanAnswer[category][i].length && j < cleanGuess[category][i].length) {
                        if(cleanAnswer[category][i][j] == cleanGuess[category][i][j]) {
                            this.points++;
                        }
                        j++;
                    }
                } else {
                    if(cleanAnswer[category][i] === cleanGuess[category][i]) {
                        this.points++;
                    }
                }
                i++; 
            }
        }
        return this.points;
    }

    createTable() 
    {
        // Sets up the table row / Array
    }
}