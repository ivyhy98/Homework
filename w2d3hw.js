// ==== Governor class ====
class Governor {
    constructor(politicalParty, gender, education, age, stateGoverned, ){
        this.politicalParty = politicalParty;
        this.gender = gender;
        this.education = education;
        this.age = age;
        this.stateGoverned;
        this.laws = [];
    }

    setLaw (newLaw){
        this.laws.push(newLaw);
    }

    appointJudge(judge){
        if(judge.isGood){
            console.log(`${judge.name} I've decided You can be a judge`);
        } else{
            console.log(`${judge.name}Get outta here`);
        }
    }

    approveBudget(budget){
        if(budget > 150000){
            console.log('This is to expensive no');
        }else{
            console.log('Do watcha gotta do');
        }
    }


}

let mikeDeWine = new Governor('Rebublican', 'Male,',['Ohio Northern University', 'Miami University'],75, 'Ohio', []);
let sharon = {
    name: 'Sharon L. Kennedy',
    isGood: true,
};
// console.log(mikeDeWine);
// mikeDeWine.appointJudge(sharon);
// mikeDeWine.setLaw('House Bill 188')
// console.log(mikeDeWine);

// ==== Person Class ====

class Person {
    constructor(name, age, gender, location, skills){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.location = location;
        this.skills = skills;
    }
    birthday(){
        this.age += 1;
        console.log(`HAPPPYYYY BIRTHDAYYYY ${this.name.toUpperCase()}`);
    }
    learn(newSkill){
        this.skills.push(newSkill);
        console.log(`You learned a new skill! Look at you learning new things ${this.name}! Makin' em' proud!`)
    }

    sleep(){
        console.log(`Goodnight ${this.name}`)
    }

}

class PostalWorker extends Person {
    constructor(type){
        super(name, age, gender, location, skills);
        this.type = type;
    }
    changeType(newType){
        this.type = newType;
    }


}



