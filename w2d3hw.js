// ==== Governor class ====
class Governor {
    constructor(politicalParty, gender, education, age, ){
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
//// ==== Postal Worker Class ====
class PostalWorker extends Person {

    constructor(name, age, gender, location, skills,type){
        super(name, age, gender, location, skills);
        this.type = type;
        this.mail = []
    }

    changeType(newType){
        this.type = newType;
    }
    deliverPackage(){
        console.log("Your package has been delivered");
    }
    addMailToRoute(newMail){
        this.mail.push(newMail);
        console.log('Mail has been added to your route')
    }
}

// ==== Chef Class ====

class Chef extends Person{
    constructor(name, age, gender, location, skills, cuisine){
        super(name, age, gender, location, skills)
        this.recipes = [];
        this.cuisine = cuisine;
    }

    addRecipe(recipe){
        this.recipes.push(recipe);
    }
    cook(index){
        if(this.recipes.length >= index){
            console.log(this.recipes[index]);
        }
    }
}
//Create 2 Chefs, log them and test all their methods
const jay = new Chef('Jay', 25, 'Male', 'Cincinnati', ['Baking', 'Rapping'], 'Senegalese');
const gopal = new Chef('Gopal', 43, 'Male', 'Nepal',['Jokes','Strength'], 'Nepalese');

//jay.addRecipe('fufu');
//jay.cook(0);


//Create 2 PostalWorkers, log them and test all their methods
const tania = new PostalWorker('Tania', 35, 'Female', ['training dogs', 'Running','Shopping'], 'Driver');
const jules = new PostalWorker('Jules', 22,'Non-binary',['Public Speaking','DJing','Multitasking'],'Mail Sorter');


//jules.deliverPackage();
//tania.addMailToRoute("Ivana's house");


//==== HUNGRY FOR MORE ====

// Bank Account Class
class BankAccount{
    constructor(){
        this.ownerName= "";
        this.balance = 0;
        this.acctNum = 0;
    }
    deposit(amount){
        this.balance +=amount;
        console.log(`You're balance is now ${this.balance}`)
    }
    withdraw(amount){
        if(this.balance <= 0 || this.balance - amount <=0){
            console.log('Your account is less than zero please deposit money');
        } else{
            this.balance -=amount;
            console.log(`Transaction Complete. Have a great day ${ownerName}`)  
        }
    }
}

// Checking Account Class

class CheckingAccount extends BankAccount{
    constructor(){
        super(ownerName, acctNum)
        this.balance = 500;
        this.overDraftEnabled = true;
    }
    withdraw(amount){
        if((this.balance <= 0 || this.balance - amount <=0)&& this.overDraftEnabled){
            this.balance -=amount;
            console.log(`This action will result in account overdrawn. Your account balance is now ${this.balance}`);
        }else{
            this.balance -=amount;
            console.log(`Transaction Complete. Have a great day ${ownerName}`);
        }
    }
}

// Savings Account Class

class SavingsAccount extends BankAccount{
    constructor(){
        super(ownerName, balance, acctNum)
    }
    withdraw(){
        console.log('Withdraw Transaction Declined')
    }
}






