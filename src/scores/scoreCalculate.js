import { Guess } from "../guess/guess";

export class ScoreCalculator {
    constructor()
    {
        this.points;
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

    score(guess, answer) 
    {
        let cleanAnswer = this.#clean(answer);
        let cleanGuess = this.#clean(guess);

        // for(let category in cleanAnswer)
        // {
        //     while()
        // }
        //     {
        //         for(let section in cleanGuess)
        //         {
        //             let i = 0;
        //             // while(i < sheet[category].length)
        //             // {
        //             // if(typeof sheet[category][i] === 'string')
        //             // {
        //             //     let trimmed = sheet[category][i].trim();
        //             //     let cleaned = trimmed.toLowerCase();
        //             //     sheet[category][i] = cleaned;
        //             // }

        //             // i++;
        //             // }
        //         }
        //     }
        
        let points = 22;
        return points;
    }

    createTable() 
    {
        // Sets up the table row / Array
    }
}