/**
 * This is a staircase of size : n=4;
 *        #
 *       ##
 *      ###
 *     ####
 * 
 * Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .
 */

function staircase(n) {

    for (let i = 0; i < n; i++) {

        let staircaseString = '';

        for (let j = 0; j < (n - 1 - i); j++) { //n=5 
            staircaseString = staircaseString + '#'; // aca genro 4 espacios 
            
        }
        for (let k = 0; k < i+1; k++) {
            

            staircaseString = staircaseString + '#';
        }
        console.log(staircaseString)

    }
}

const n = 6;
staircase(n); 