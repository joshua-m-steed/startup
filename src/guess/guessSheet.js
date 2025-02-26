class GuessSheet {
    constructor()
    {
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

    save(username)
    {
        localStorage.setItem(username, JSON.stringify(this));
    }

    load(username)
    {
        const savedData = localStorage.getItem(JSON.parse(username));
        const guessSheet = new GuessSheet();
        Object.assign(guessSheet, savedData);
        return guessSheet;
    }
}