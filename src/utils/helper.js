/**
 * Repair a string
 * Write a function that takes a string. The function converts the first letter of each word to uppercase and the rest to lowercase. Set a white space where you meet a special character like *, @, - etc.

 * Examples:
 * if a string = "HellO%woRld", the function should return: "Hello World"
 * if a string = "tHe>dOOrs&aRE?Open", the function should return: "The Doors Are Open"

 * @param {*} input 
 * @returns 
 */

const mainFunction = (input) => {
    const word = input.replace(/[^a-zA-Z ^0-9]/g, " ").toLocaleLowerCase();

    const words = word.split(' ').map(item => capitalizeFirstLetter(item))

    return words.join(' ');
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Squares with odd numbers
 * Write a function that takes an array of strings representing rows in a matrix. 
 * The function returns the number of 2x2 squares made of only odd numbers. 
 * 
 * For example: an array equals: [ "123", "215","137" ] represents the matrix:
 */

