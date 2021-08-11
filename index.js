// Code your solution in this file!
let result = 0; 
let cost = 0; 
function distanceTravelledInFeet(num1, num2) {
    if (num1 > num2) {
        result = (num1-num2)*264;
    }
    else {
        result = (num2-num1)*264;
    }
    return result; 
}
function calculatesFarePrice(num1, num2) {
    result = distanceTravelledInFeet(num1, num2);
    if (result <= 400) {
        cost = 0; 
    }
    else if (result >= 2000 && result <= 2500) {
        cost = 25; 
    }
    else if (result > 2500) {
        cost = `cannot travel that far`; 
    }
    else {
        cost = (result-400)*0.02; 
    }
    return cost; 
}
function distanceFromHqInBlocks(num) {
    let res2 = 1; 
    if (num < 42) {
        res2 = 42-num; 
    }
    else {
        res2 = num-42; 
    }
    return res2; 
}
function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num) * 264; 
}
