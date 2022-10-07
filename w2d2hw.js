class Cat {
// give the class at least 3 properties
    constructor(name, color, traits){
        this.name = name;
        this.color = color;
        this.traits = traits;
    }
// give the class at least 3 methods

    eat() {
        this.isHungry = false;
        console.log(`${this.name} is not hungry anymore :)`);
    }

    bath() {
        this.isClean = true;
        console.log(`${this.name} is nice and clean :)`);
    }
}
// create two instances of the class (two cats)

let pumpkin = new Cat('Pumpkin', 'Orange', ['Calm','Cuddly','Clingy']);
let obsidian = new Cat('Obsidian','Orange',['Energetic','Playful', 'Cuddly','Thief']);

// log both instances to see their properties

console.log(pumpkin);
console.log(obsidian);

// invoke each method from both instances

pumpkin.eat();
obsidian.bath();

class Pirate {
// create 3 properties that are set by the constructor

  constructor(name, shipName, hasPatch){
        this.name = name;
        this.shipName = shipName;
        this.hasPatch = hasPatch;
  }
// create 3 methods

  greet(){
    console.log('AHOY MATEY');
  }

  hijack () {
    this.isRich = true;
    console.log(` Arghh ${this.name} has come for ye treasure`);

  }

  drink(){
    this.drunk  = true;
    console.log('whasudhowoeo')
  }

}

// instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
 
// loop over each array and print 3 properties of each pirate






