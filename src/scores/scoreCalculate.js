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
                        this.sheet[category][i] = cleaned;
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
        answer = this.#clean(answer);
        guess = this.#clean(guess);

        return guess;
    }

    createTable() 
    {
        // Sets up the table row / Array
    }
}