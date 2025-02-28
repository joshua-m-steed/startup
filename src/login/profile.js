export class Profile {
    constructor(username, email, pass)
    {
        this.name = username;
        this.email = email;
        this.pass = pass;
        this.score = 0;
    }

    verify(testUsername, testEmail, testPass)
    {
        if(this.name == testUsername && this.email == testEmail && this.pass == testPass)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }

    create()
    {
        let file = {name: this.name, email: this.email, pass: this.pass, score: this.score};
        localStorage.setItem(this.name + ' Profile', JSON.stringify(file));
    }

    delete()
    {
        localStorage.removeItem(this.name + ' Profile');
    }

    updateScore(points)
    {
        let temp = JSON.parse(localStorage.getItem(this.name + ' Profile'));
        temp.score = points;
        localStorage.setItem(this.name + ' Profile', JSON.stringify(temp));
    }
}
