export class Profile {
    constructor(username, email, pass)
    {
        this.name = '';
        this.email = '';
        this.pass = '';
        this.score = 0;
        this.auth = false;
    }

    verify(userLibrary)
    {

        // Needs to have logic behind it
        if(userLibrary)
        {
            return true;
        }

        console.warn(userLibrary);
    }

    create(name, email, pass, userLibrary, score = 0)
    {
        // Set Profile Class and variables / Object
        
        this.name = name;
        this.email = email;
        this.pass = pass;

        // VERIFY -> Compare local storage "Players" If present, return error message, if false, navigate
        let isUnique = this.verify(userLibrary);

        if(isUnique == true)
        {
            this.auth = true;
            let file = {name: name, email: email, pass: pass, score: score, auth: this.auth};
            localStorage.setItem(this.name + ' Profile', JSON.stringify(file));
            localStorage.setItem('Username', this.name);
            return file;
        }
        else
        {
            console.warn(`Sorry, you're username, ${name}, is already taken`);
            return false;
        }
    }

    refill(name)
    {
        let temp = JSON.parse(localStorage.getItem(name + ' Profile'));
        this.name = temp.name;
        this.email = temp.email;
        this.pass = temp.pass;
        this.score = temp.score;
    }

    delete()
    {
        localStorage.removeItem(this.name + ' Profile');
        localStorage.removeItem(this.name);
    }

    updateScore(points)
    {
        let temp = JSON.parse(localStorage.getItem(this.name + ' Profile'));
        temp.score = points;
        localStorage.setItem(this.name + ' Profile', JSON.stringify(temp));
    }
}
