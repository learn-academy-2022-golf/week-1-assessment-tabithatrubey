// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer: 
// b) Verify and explain: 

// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer:10
// b) Verify and explain: This logs "10" because the built-in code ".length" is used to provide the length of the variable it is attached to. In this instance "LEARN 2022" the .length adds the nine characters and one space between LEARN and 2022 to equate to 10 characters.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: 
// "Hello World!"
// "Hello World!"
// "Hello World!"
// "Hello World!"
// b) Verify and explain: I was wrong because I thought the variable "greeting" was being multiplied by 4. However, the square brackets [] indicate an array. Since "4" was inside the array, the log return is supposed to return the 4th variable. Only one variable was defined, so the output is 0.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: This will log "Ruby" because the varbiable is set at the data inside of the array, and since every array is indexed at 0, the index of 1 would take the position to the right of index 0, which in this case is "Ruby"

// --------------------4) What will this log?

const weekendDays = ("saturday","sunday")
// console.log(weekendDays.toUpperCase())

// a) Your answer:SATURDAY, SUNDAY
// b) Verify and explain: I was wrong. This returned an error code stating "weekendDays.toUpperCase is not a function". I beleive this error code generates because a built-in method like ".toUpperCase()" can ONLY be used on the right kind of data, on ONE string of data. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: string 
// b) Verify and explain: I thoguht this would have returned "string" since the data types are all in string notation. However, becuase the built-in '.length' is used it will return 'number' since '.length' is associated with number.
