export class Profile {
    constructor(username, email, pass)
    {
        this.name = '';
        this.email = '';
        this.pass = '';
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

    create(name, email, pass, score = 0)
    {
        let file = {name: name, email: email, pass: pass, score: score};
        this.name = name;
        this.email = email;
        this.pass = pass;
        localStorage.setItem(this.name + ' Profile', JSON.stringify(file));
    }

    refill(name)
    {
        let temp = JSON.parse(localStorage.getItem(name + ' Profile'));
        this.name = temp.name;
        this.email = temp.email;
        this.pass = temp.pass;
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
