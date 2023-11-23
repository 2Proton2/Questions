let arr1 = [1, 3, 5, 7];
let arr2 = [0, 2, 6, 8, 9];

function sortOut(arr1, arr2) {
    let combinedArray  = arr1.concat(arr2);
    let sortedArr = combinedArray.sort((a,b) => a-b);
    let arrayToBeReturned = [sortedArr.slice(0, arr1.length), sortedArr.slice(arr1.length, sortedArr.length)]
    return arrayToBeReturned;
}

let requiredArr = sortOut(arr1, arr2);
[arr1, arr2] = requiredArr;
console.log('arr1 => ',arr1);
console.log('arr2 => ',arr2);