class Hamster {
    constructor(owner, name, price){
        this.owner = owner;
        this.name = name;
        this.price = price;
    }
    wheelRun(){
        console.log('squeak squeak');
    }
    eatFood(){
        console.log('nibble nibble');
    }
    getPrice(){
        return this.price;
    }
}

class Person {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getName(){
        return this.name;
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight;
    }
    greet(){
        console.log(`Hey I'm ${this.name}`);
    }
    eat(amount){
        this.weight += amount || 1;
        this.mood += amount || 1;
    }
    exercise(amount){
        this.weight -= amount || 1;
    }
    ageUp(num){
        this.age += num || 1;
        this.height += num || 1;
        this.weight += num || 1;
        this.mood -= num || 1;
        this.bankAccount += num || 10;
    }
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood += 10;
        console.log(`${hamster.getPrice()}`)
        this.bankAccount -= hamster.getPrice();
    }
}
//1. Instantiate a new Person named Timmy
const timmy = new Person('Timmy');

//2. Age Timmy five years
timmy.ageUp(5);

//3. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
for(let i = 0; i<5; i++){
    timmy.eat();
}

//4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
for(let i = 0; i<5; i++){
    timmy.exercise();
}

//5. Age Timmy 9 years
timmy.ageUp(9);

//6. && 7. Create a hamster named "Gus" & Set Gus's owner to the string "Timmy"
const gus = new Hamster('Timmy', 'Gus', 15);

//8. Have Timmy "buy" Gus
timmy.buyHamster(gus);

//9. Age Timmy 15 years
timmy.ageUp(15);

//10. Have Timmy eat twice
timmy.eat(2);

//11. Have Timmy exercise twice
timmy.exercise(2)

console.log(timmy);
