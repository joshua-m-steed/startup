export class GuessSheet {
    constructor()
    {
        this.name = "";
        this.satMor = [];
        this.satAft = [];
        this.satEvn = [];
        this.sunMor = [];
        this.sunAft = [];
        this.tieClr = [];
        this.hymnNum = [];
        this.templeLoc =[];
    }

    setGuess(category, values)
    {
        if(this.hasOwnProperty(category))
        {
            this[category] = values;
        }
        else
        {
            console.warn(`Invalid Category: ${category}`)
        }
    }
    
    load(username)
    {
        const savedData = JSON.parse(localStorage.getItem(username + ' Guess'));
        const guessSheet = new GuessSheet();
        Object.assign(guessSheet, savedData);
        return guessSheet;
    }

    clear(username)
    {
        localStorage.removeItem(username + ' Guess');
    }
}