// ==== Q+A ====
/* How do we assign a value to a variable?
    const a = 3;
    let i = 5;
*/

/* How do we change the value of a variable?
    It has to be a let variable declaration and then we assign it
    i = 10;

/* How do we assign an existing variable to a new variable?
    let variable = a;
*/
/* Remind me, what are declare, assign, and define?
    declaring a variable is like const a;
    assigning is like saying a = 6;
    
*/
/* What is pseudocoding and why should you do it?

    Pseudo coding is like planning out the logic of your program 
    before you actually start the code so that when you do start
    you can code it out easier and faster.
*/
/* What percentage of time should be spent thinking about how you're
   going to solve a problem vs actually typing in code to solve it? 

   90% is trying to solve it and 10% is actually typing the code
   */

// ==== STRINGS ====
/* Create a variable called firstVariable
    let firstVariable;
*/
/* Assign it the value of the string "Hello World"
    firstVariable = "Hello World"
*/
/* Change the value of this variable to some number
    firstVariable = 3
*/
/* Store the value of firstVariablein a new variable called secondVariable
    let secondVariable = firstVariable

*/
/* Change the value of secondVariableto any string.
    secondVaariable = "Hello There"

*/
/* What is the value of firstVariable?
    3
*/

/*
Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
    yourName = "Ivana"
    const sayHello = (name) => {
        console.log(`Hello, my name is ${name}`);
    }
    sayHello(yourName);
*/

// ==== BOOLEANS ====

/*
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name'=== 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false ||  false || false || false || false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');
*/

// ==== THE FARM ====
/* Declare a variable animal. Set it to be either "cow" or something else
   Write code that will print out "mooooo" if the it is equal to cow
   Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
   Commit

    const animal = "cow"
    if(animal === "cow"){
        console.log("mooooo")
    } else {
        console.log("You're not a cow")
    }

*/

// ==== Driver's Ed ====

/* Make a variable that holds a person's age; be semantic
   Write code that will print out "Here are the keys!", if the age is 16 years or older, or, 
   if the age is younger than 16, a message should print "Sorry, you're too young."

   let age;

   if(age < 16){
    console.log("Sorry, you're too young")
   } else {
    console.log("Here are the keys!")
   }

*/

// ==== LOOPS ====

// == The Basics ==
/* Write a loop that will print out all the numbers from 0 to 10, inclusive
   for(let i = 0; i<=10; i++){
    console.log(i);
   }
   Write a loop that will print out all the numbers from 10 up to and including 400
   for(let a = 10; a <= 400; a++){
    console.log(a)
   }
   Write a loop that will print out every third number starting with 12 and going no higher than 4000
    for(let b = 12; b<4000; b+=3){
        console.log(b);   
    }
*/

// == Get Even ==

/*
    Print out the numbers that are within the range of 1 - 100
    Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

    for(let num = 1; num <=100; num++){
        if(num % 2 === 0){
            console.log(`${num} <-- is an even number`)
        }else{
            console.log(num)
        }
    }
*/

// == Give Me Five ==

/*
    for(let number = 0; number <= 100; number ++){
        if(number % 5 === 0 && number % 3 === 0){
            console.log(`I found a ${number}. Three is a crowd`)
            console.log(`I found a ${number}. High five!`)         
        } else if(number % 5 === 0){
            console.log(`I found a ${number}. High five!`)
        }else if( number % 3 === 0){
            console.log(`I found a ${number}. Three is a crowd`)
        }
    }
*/

// ===Savings Account ===
/*Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.
    let sum = 0;
    for(let i = 1; i<=10; i++){
        sum+=i;
    }

*/

/* You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
   Check your work! Your bank_account should have $10,100 in it.
   
    for(let i = 1; i<=100; i++){
        sum += i*2;
    }
    console.log(sum)

*/

// ==== ARRAY'S & CONTROL FLOW ====
// == Talk About It ==
/*
    What are the things in an array called?
    Elements
    Do Arrays guarantee those things will be in order?
    No it is random
    What real-life thing could you model with an array?
    Social network feed
*/

// == Easy Does It ==
/* 
    Create an array that contains three quotes and store it in a variable called quotes
    const quotes = ["As Above So Below", "There Can't be a rainbow without any rain", "Real Eyes Realize Real lies"];
    
*/

// == Accessing Elements ==

//const randomThings = [1, 10, "Hello", true];
/*How do you access the 1st element in the array?
    const firstElement = randomThings[0];
*/
/* Change the value of "Hello"to "World"
    randomThings[2] = "World";
*/
/* Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
    console.log(randomThings);
*/

// == Change Values ==
/*
Given the following array

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

What would you write to access the 3rd element of the array?

let thirdElement = ourClass[2];

Change the value of "Github" to "Octocat"

ourClass[4]="Octocat";

Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);
*/

// == Mix It Up ==
const myArray = [5, 10, 500, 20]
/*
Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
    myArray.push("Aegon");

Remove the 5from the beginning of the array.
    myArray.shift();

Add the string "Bob Marley"to the beginning of the array.
    myArray.unshift("Bob Marley");

Remove the string of your choice from the end of the array.
    myArray.pop();

Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
    const reversed = myArray.reverse();
    console.log(reversed);
    console.log(myArray.reverse());
    so the array is mutated instead of creating a new array it changes the array the reverse method doesn't change anything

*/

// == Biggie Smalls ==

/*Write an if ... elsestatement that:

console.log()s "little number" if the number is entered is less than 100
console.log()s big numberif the number is greater than or equal to 100.
*/

/* const number = 10;

if(number < 100){
    console.log(`${number} is a little number`);
}else{
    console.log(`${number} is a big number`);
}
*/

// == Monkey in the Middle ==
/*  
console.log()little numberif the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".
let num = 11;
    if(num < 5){
        console.log("little number");
    } else if (num > 10){
        console.log("Big Number");
    } else {
        console.log("Monkey");
    }
*/

// == What's in Your Closet ==

/*

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today`);

//Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6,0, 'raybans');
    console.log(kristynsCloset);

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
    kristynsCloset[5] = "stained knit hat";

//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
    const thomsShirt = thomsCloset[0][1];

//In the same way, access one item from Thom's pants array.
    const thomsPants = thomsCloset[1][1];
//Access one item from Thom's accessories array.
    const thomsAcc = thomsCloset[2][2];
//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
    console.log(`Thom is looking fierce in a ${thomsShirt}, ${thomsPants} and ${thomsAcc}`);

//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas
    thomsCloset[2] = "Footie Pajamas";
*/

// ==== FUNCTIONS ====
/*
// == printCool ==

function printCool(name){
    console.log(`${name} is cool`);
}
printCool('Ivana')
// == calculateCube ==

function calculateCube(number){
    return number ** 3;
}
console.log(calculateCube(5))

function isVowel(character){
    character.toLowerCase()
    const vowels = ['a','e','i','o','u'];
    for(let i = 0; i<vowels.length; i++){
        return vowels[i] === character.toLowerCase();
    }
}

console.log(isVowel('f'))

// == getTwoLengths == 
function getTwoLengths(str1, str2){
    return array = [str1.length, str2.length];
}
console.log(getTwoLengths('Ivana', 'friends'));

// == getMultipleLengths ==

function getMultipleLengths(arrOfStrings){
    let length = [];
    arrOfStrings.forEach((str) =>{
         length.push(str.length);
    })
    return length;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// == maxOfThree ==
function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1
    } else if(num2 > num1 && num2 > num3){
        return num2
    } else{
        return num3
    }
}

console.log(maxOfThree(6,9,1));

// == printLongestWord ==

const printLongestWord = (arr) => {
    let longest="";
    arr.forEach((str)=>{
        if(longest.length < str.length){
            longest = str;
        }
    })
    return longest;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))
*/

// ==== OBJECTS ====
/*

// == Make a user object ==
const user = {
    name: 'Ivana',
    age: 24,
    email: 'ivanahy98@gmail.com',
    purchased: [],
};

// == Update the user == 
user.email = "kidsractive@gmail.com";

// == Adding keys and Values ==
user.location = 'Cincinnati, Ohio';

// == Shopaholic ==\
user.purchased.push('carbohydrates');
user.purchased.push('peace of mind');
user.purchased.push('Merino jodhpurs');

console.log(user.purchased[2]);

// == object-within-object ==
    user.friend = {
        name: 'Morgan',
        age: '25',
        email: 'morganR97@gmail.com',
        location: 'Cincinnati, Ohio',
        purchased:[],
    }

    console.log(user.friend.name);
    console.log(user.friend.location);
    user.friend.age = 55;
    user.friend.purchased.push("The One Ring");
    user.friend.purchased.push("A Latte");
    console.log(user.friend.purchased[1]);
    console.log(user);
// == Loops ==

for(let i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i])
}

for(let i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i])
}

// == Functions can operate on objects ==

const updateUser =()=>{
    user.age += 1;
    user.name.toUpperCase();
}
const oldAndLoud =(person)=>{
    person.age +=1;
    person.name.toUpperCase();
}
console.log(user);
oldAndLoud(user);
console.log(user);

*/

// ==== Hungry For More ====
/*

const cat1 = {
    name: 'Luna',
    breed:'black',
    age: 2,
};
console.log(cat1.age, cat1.breed);

const cat2 = {
    name: 'Obsidian',
    breed: 'orange',
    age: 3,
};

const combineCats = (cat1, cat2) =>{
    let newCat = {
        name: `${cat1.name}${cat2.name}`,
        age: 1,
        breed: `${cat1.breed}-${cat2.breed}`
    }
    return newCat;
}
console.log(combineCats(cat1, cat2));

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1,cat2)), combineCats(cat1,cat2)))
*/





    












































































































































































































































































































