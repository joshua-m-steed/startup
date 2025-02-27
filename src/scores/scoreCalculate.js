export class ScoreCalculator {
    constructor()
    {
        this.points;
    }

    #clean(sheet) 
    {
        for(let category in sheet)
            {
                let i = 0;
                while(i < sheet[category].length)
                {
                    if(typeof sheet[category][i] === 'string')
                    {
                        let trimmed = sheet[category][i].trim();
                        let cleaned = trimmed.toLowerCase();
                        sheet[category][i] = cleaned;
                    }

                    i++;
                }
            }

        return sheet;
        // Clean the Answers
        // - Lowercase
        // - No Whitespace 
    }

    score(guess, answer) 
    {
        let cleanAnswer = this.#clean(answer);
        let cleanGuess = this.#clean(guess);
        
        let points = 22;
        return points;
    }

    createTable() 
    {
        // Sets up the table row / Array
    }
}