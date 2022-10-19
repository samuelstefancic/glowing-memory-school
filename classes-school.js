class Students  {
    school = "Debussy";
    constructor(firstname, lastname, gradesFirstSemester, gradesSecondSemester) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.gradesFirstSemester = gradesFirstSemester;
        this.gradesSecondSemester = gradesSecondSemester;
    }

    get noteMoyenne() {
        return (this.gradesFirstSemester + this.gradesSecondSemester) / 2;
    }

    setNotes (notes) {
        this.notes = notes;
    }

    get moyenne() {
        const average = this.notes.reduce((a, b) => a + b, 0) / this.notes.length;
        let averageRounded = average.toFixed(2);
        if (averageRounded >= 10) {
            return `La moyenne de ${this.firstname} est de ${averageRounded}, il passe donc en classe supérieure !`;
        } else {
            return `La moyenne de ${this.firstname} est de ${averageRounded}, il ne passe pas !`;
        }
        return averageRounded;
    }
}

let paul = new Students("Paul", "Maginot", 15, 10);
//console.log(paul);
//console.log(`La moyenne de ${paul.firstname} est de ${paul.noteMoyenne}`);
paul.setNotes([10,2,17,18,14,12,5,18,1]);
console.log(paul.moyenne)

let romain = new Students("Romain", "Zilli", 18, 10);
romain.setNotes([1,2,7,8,4,2,5,8,1]);
console.log(romain.moyenne);

/*let florine = new Students("Florine", "Martin", 17, 15); 
console.log(`La moyenne de ${florine.firstname} est de ${florine.noteMoyenne}`);*/