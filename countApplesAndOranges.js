/**
 * Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

In the diagram below:

The red region denotes the house, where  is the start point, and  is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
Assume the trees are located on a single point, where the apple tree is at point , and the orange tree is at point .
When a fruit falls from its tree, it lands  units of distance from its tree of origin along the -axis. *A negative value of  means the fruit fell  units to the tree's left, and a positive value of  means it falls  units to the tree's right. *

s = 7
t = 11
a = 5
b = 15
apples = [ -2, 2, 1 ]
oranges = [ 5, -6 ]

             ♀
             |(y)(tree)
             |
             | 
-|--|--|--|--|--|--|--|--|-----------------(x)
             |
             |
 */

const s = 7
const t = 11
const a = 5// aca esta en manzano
const b = 15// aca el naranjo
const apples = [-2, 2, 1]
const oranges = [5, -6]
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let houseApples = 0;
    let houseOranges = 0;

    for (let i = 0; i < apples.length; i++) {
        console.log((apples[i] + a))
        if ((apples[i] + a) >= s && (apples[i] + a) <= t) {

            houseApples++;
        }
    }
    for (let i = 0; i < oranges.length; i++) {
        if ((oranges[i] + b) >= s && (oranges[i] + b) <= t) {
            houseOranges++;
        }
    }
    console.log(houseApples)
    console.log(houseOranges)
}
countApplesAndOranges(s, t, a, b, apples, oranges);
