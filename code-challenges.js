// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// First, create a function: fruits (we will use the declaration 'const' to ensure the function cannot be altered and will maintian functional integrity)
// Create 2 parameters (the two strings): fruit1, fruit2
// Use a conditional statement to determine which of the 2 parameters has more characters: .length (built-in method)
// If fruit1 has more characters than fruit2, then return fruit1
// If fruit2 has more characters than fruit1, then return fruit2
// HOWEVER, if both fruit1 and fruit2 have the same amount of characters then return "fruit1 and fruit2 have the same amount of characters"
// Lastly, if something other than a fruit is entered, return "Please enter a fruit"

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

const fruit5 = "apples"
const fruit6 = "banana"
const fruits = (fruit1, fruit2) => {
    if (fruit1.length > fruit2.length) {
        return fruit1
    }
    else if (fruit1.length < fruit2.length) {
        return fruit2
    }
    else if (fruit1.length === fruit2.length) {
        return `${fruit1} and ${fruit2} have the same amount of characters!`
    }
    // else {
    //     return "Please enter a fruit"
    // }
}
console.log(fruits(fruit1, fruit2))
console.log(fruits(fruit3, fruit4))
console.log(fruits(fruit5, fruit6))
// console.log(fruits(green, yellow))
// In our last challenges we were inputting our own answers for the variables since they weren't defined, which is why I think lines 41-43 wouldn't work unless I defined them above. Even though this is an instructor example.. 


// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:

// First, create a function: yourDegrees
// Create a conditional statement to determine if the variable is less than 212, equal to 212, or less than 212
// If the variable is below 212, use string interpolation to return `${temp} is below boiling point`
// If the variable strictly equates 212, use string interpolation to return `${temp} is at boiling point`
// If the variable is above 212, use string interpolation to return `${temp} is above boiling point`
const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const yourDegrees = (temp) => {
    if (temp < 212) {
        return `${temp} is below boiling point`
    } else if (temp === 212) {
        return `${temp} is at boiling point`
    }
    else if (temp > 212) {
        return `${temp} is above boiling point`
    }
}
console.log(yourDegrees(temp1))
console.log(yourDegrees(temp2))
console.log(yourDegrees(temp3))


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
// Dodgers are better...
// Divide this into two parts: 1. combine the arrays 2.return the length
// To combine the two arrays and preserve both of their values, use the ".concat" accessor. 
    //Create a new variable "concatArrays" to describe the data being combined of the two variables provded.
    // Set the new variable to padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// Next, to determine the length of the new variable, use the ".push" mutator at the end of the new variable. 
    // This will return 9 becuase nine numbers exist in the new array, since they were combined.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

var concatArrays =padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// console.log(concatArrays)
console.log(concatArrays.push())
 
// padres1984WorldSeriesRuns.push(padres1998WorldSeriesRuns)
// console.log(padres1984WorldSeriesRuns.push(padres1998WorldSeriesRuns)) COME BACK TO THIS!!
// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
// First, create a new variable to set at the value of the old variable (currentCohort)
    // use the built-in accessor .split() to split the string into an array of characters
    // This should return 'G' 'o' 'l' 'f' ' ' '2' '0' '2' '2'
// Next reverse the order using the .reverse() mutator 
    //This should return  '2', '2', '0','2', ' ', 'f','l', 'o', 'G'
//Lastly, to join it alltogether to acheive the expected output of "2022 floG" use the .joing() accessor 
// Holy cow, this took an embarrassingly long time to figure out the answer. I knew the accessors and mutators I had to input, but I am having trouble understanding why I have to console.log(newCohort) each time, when terminal returns the answer I am looking for if I didn't type console.log. For example, let newCohort = currentCohort.split("") gives me the array in characters already in the terminal, so I keep getting stuck on why I have to re-call console.log. I dont know if this made any sense, but I would love to describe this over zoom. 

const currentCohort = "Golf 2022"
// Expected output: "2202 floG"
let newCohort = currentCohort.split("")
console.log(newCohort)
console.log(newCohort.reverse())
// console.log(newCohort)
console.log(newCohort.join(""))


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
// Since the values in the array are already provided, run a command that would provide the LAST index of the provided value
// Since the last index is being asked and not the first, use the accessor '.lastIndexOf()'
// If you use '.indexOf()', you will get 2 as the index value for "givenValue1" since it is the first index value of 42 and not the LAST!


const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8
console.log(myNumbers.lastIndexOf(givenValue1))
console.log(myNumbers.lastIndexOf(givenValue2))

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
// Since the array is provided and the data is defined, create a function and use the '.sort()' mutator to change the original array: sanDiegoSummerTemperatures.sort
// Next, define the argument (a,b), that will represent the data inside the array that needs to be sorted
// Next, use function notation (=>) to create a function that sorts from largest to smallest (b-a), instead of smallest to largest (a-b)

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
sanDiegoSummerTemperatures.sort((a,b) => b-a)
console.log(sanDiegoSummerTemperatures)

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]}
sanDiegoWinterTemperatures.sort((a,b) => b-a)
console.log(sanDiegoWinterTemperatures)