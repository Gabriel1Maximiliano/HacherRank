/**
 * Note: This challenge introduces precision problems. 
 * The test cases are scaled to six decimal places, 
 * 
 * though answers with absolute error of up to  are acceptable.

Example
arr =[1,2,0,-1,-1];

n= 5;

There are 5 elements, two positive(1,2), two negative (-1,-1)and one zero.
 Their ratios are ,  and . Results are printed as:
 0.400000;
 0.400000;
 0.200000;

 Print
Print the ratios of positive, negative and zero values in the array. 
Each value should be printed on a separate line with  digits after the decimal. 
The function should not return a value.
 */


arr =[1,2,0,-1,-1];

//P(E) = Number of Favourable Outcomes/Number of total outcomes
function plusMinus(arr) {
    // Write your code here
   
   let totalOutcomes = arr.length;
    const positiveFavourableOutcomes = arr.filter(n => n > 0);
    const negativeFavourableOutcomes = arr.filter(n => n < 0);
    const zeroFavourableOutcomes = arr.filter(n => n === 0);
    
    const positiveRatios = positiveFavourableOutcomes.length/totalOutcomes;
    const negativeRatios = negativeFavourableOutcomes.length/totalOutcomes;
    const zeroRatios     = zeroFavourableOutcomes.length/totalOutcomes;

    console.log(positiveRatios.toFixed(6));
    console.log(negativeRatios.toFixed(6));
    console.log(zeroRatios.toFixed(6));
}

plusMinus( arr );