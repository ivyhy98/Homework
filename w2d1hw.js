// Define and code the functions below.

// Define the functions using the approach as specified (either as a function expression or declaration).

// Be sure to number each function with a comment above it.

// After each function, call it at least once and console.logthe results.

// Here are the functions:

// 1. Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }

  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

// 2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThree = function(n1, n2, n3){
    if(n1>= n2 && n1>=n3){
        return n1
    } else if(n2>=n1 && n2>=n3){
        return n2
    }else {
        return n3
    }
}

// 3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

    function isCharAVowel(character){
        vowels = ['a', 'e', 'i', 'o','u']
        isVowel = false
        vowels.forEach((vowel) =>{
            if (character.toLowerCase() === vowel) {
                isVowel = true
            }
        })
        return isVowel
    }
    //console.log(isCharAVowel('a'))

// 4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
let arr1 = [1,2,3,4,5]
const sumArray = function(arrNum){
    let sum = 0
    arrNum.forEach((num)=>{
        sum += num
    })
    return sum
}
//console.log(sumArray(arr1))

// 5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
let arr = [2,4,5]
function multiplyArray(arr){
    let product = 1
    arr.forEach((num)=>{
        product *=num
    })
    return product
}

//console.log(multiplyArray([2, 4, 5]))

// 6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.,
    
const numsArg = function(...args){
    return args.length
}
//console.log(numsArg(1,2,"blue"))

// 7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

function reverseString(str){
    return str.split("")
              .reverse()
              .join("")
        
}
//console.log(reverseString("blue"))

// 8. Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function(arrOfStrings){
    word = ""
    let length = 0
    arrOfStrings.forEach((string)=> {
        if(string.length > word.length){
            word = string
            length = word.length
        }
    })
    return `The longest word in this array is ${word} at ${length} letters`
}
arr1 = ["blue","skies","Sunniest","days"]
console.log(longestStringInArray(arr1))

// 9. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments, and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].


function stringsLongerThan(arr, num){
    longer = []
    arr.forEach((string)=>{
        if(string.length > num){
            longer.push(string)
        }
    })
    return longer
}
//console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))

