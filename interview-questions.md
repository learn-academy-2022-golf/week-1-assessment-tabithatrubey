# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer:

Researched answer:

1. What is git? What is the difference between git and Github?

Your answer: Git is a software embedded in your computer that tracks information and changes and acts similar to a sandbox environment. Github is the storage of this data on cloud-based repositories.

Researched answer: Git is an open-source tool used especially in pair programming. It allows pair programmers to work together on code pulled down from GitHub. Git also enables programmers to work through their code in an environment that will not affect the original repository or code, until merged. Github uses git to provide task management functions and version control to ensure only the accepted branches and files are merged into the original code. It is especially useful when a team of developers are working on a project and can submit their individual portions to Github via git for final review. 

2. Which JavaScript operators will return a Boolean value?

Your answer: Equality and comparison relational operators will return a Boolean value.
ex. === or !== will generate TRUE or FALSE depending on the variables plugged into the operation

Researched answer: Equality, logical, and relational operators will all return a Boolean value. Equality operators determine if one value is set at the same value on the oppostie side of the assignment operator (either loose or strict), and returns either TRUE or FALSE. Logical operators check if each value on either side of the assignment operator is logical and (&&)/logical or (||) TRUE/FALSE, or not logical (!). Lastly, relational operators determine whether the value on one end of the operator (<,>) is either greater than or less than the value on the other end of the assignment operator and returns either TRUE or FALSE.

3. What is an index? What is the difference between index and value?

Your answer: An index is a specific location in an array; each array is indexed at 0. The difference between an index and value is an index starts at 0, has three standard functions in a for loop sequence, and a value is the output of a defined variable. An index is always a number, whereas a value can be numbers, words, or a combination of the two. 

Researched answer: Indexes are sequential locations in an array, which means the first value in the string is set at 0 and moves to the right, so the next value is set at 1, even though it is the second value in the string. The content in each element in an array is defined as the value. For example, let myNumbers = [1, 2, 3, 4] : the values are "1,2,3,4" while the index of 1 is 0, 2 is 1, 3 is 2, and 4 is 3.  

4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: The visual difference between arrays and strings is arrays are defined by square brackets [] and strings are defined by quotations " " , ' ', ` `. The functional difference between arrays and strings is arrays are meant to hold large amounts of data in one defined variable and strings are intended to be a language that communicates code to another human, since the computer does not understand words. Both arrays and strings are indexed at 0. Additionally, they both can hold lots of data types.

Researched answer: Strings can be added to arrays ex. let myNames = ["tabi" , "tabitha" "tabitha trubey"]. An array holds a conglomoration of varaibles, as long as they are JS datatypes that can be called on as one variable altogether. A string holds a set of characters defined by quotations.
Despite many differences, they also share many similarities, like being indexed at 0 and having length properties. You can also convert arrays into strings and strings into arrays by using .join("") and .split("") accessors. 

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Pair programming allows two developers to work on one portion of code to mitigate flaws/bugs and to produce a comprhensive project as two brains are better than one. The proper techniques for pair programming consist of a driver and navigator. The driver is the only one on the keyboard typing code. The navigator informs the driver what to write and how to write the proper syntax. The navigator also corrects any spelling or syntax errors in each line before proceeding to the next line. This ensures an efficient work flow and encourages communication. 

Researched answer: Pair programming allows two programmers to work on the same code at the same time from a driver and a navigator position. The navigator tells the driver what code to write and the driver executes the code. This increases communication and prevents hidden agendas or confusion in code, as two people are physically sitting right next to each other talking through the code together. Roles are often switched to allow for equal distribution of work and responsibilities. Pair programming creates efficiency, as expectations are outlined and executed with accountability from each partner. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions:
    A higher order function is a built-in method that makes a function operate as an argument. They typically operate on arrays. The function operating as an argument will occur once for every item in an array. This appears to simplify iteration in loops. For example, using the .map() method we can write :
const myNumbers = [7, 3, 5, 2]
const addition = myNumbers.map((value)) => {
    return value + 3
}
console.log(addition)
The results would be 10,6,8,5, which appears MUCH simpler than creting a for loop sequence. 
2. Jest: 
    Jest is a framework designed to test JavaScript code to ensure it is accurate and no bugs exist. Jest is a conglomoration of files, defined as dependencies, which contain bits of code, and when ran together correctly allows users to run tests.  

3. Objects:
    Objects operate as a single entity with data types and properties. Objects store keys, which are followed by a ':", and values, which are denoted by strings. 

4. Method:
    A method is a function that belongs to an object. Since the object contains a function, the function will be invoked in the sequence to return the output of the method. A method gives an object behavior. 

5. Classes:
    Classes can be reused and customized, like functions. Classes hold both behavior and data and create objects. Classes have specific syntax rules:
    1.The names of classes are always capitalized
    2.The class names are PascalCased, not camelCased, which means the first letter is also capitalized
    3.The class' objects are always lowercased