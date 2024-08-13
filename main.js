//task1

var a= ["alaa" , "salma" , "aya"];
function arrLength(arr){
    let count=0;
    while(arr[count]!==undefined){
        count++;
    }
    return count;
}
console.log(arrLength(a)); 

//task2

var b= [1,2,3,4,5];
function exitinArr(arr,element){
    for(let i=0; i < arr.length; i++){
        if(arr[i]===element){
            return true;
    }
    return false;
}
}
console.log(exitinArr(b,1));


//task3

var c=[10,15,20,25,30];
function squareOfArr(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
        result.push(arr[i]**2);
        }
        return result;
}
console.log(squareOfArr(c));


//task4
function MinMax(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
            }
            if(arr[i]>max){
                max = arr[i];
                }
                }
                return [min,max];
}
console.log(MinMax([1,2,3,4,5]));
console.log(MinMax(c));


//task5

function calcarr(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
        }
        return sum;
}
console.log(calcarr([1,2,3,4,5]));
console.log(calcarr(c));

//task6

function FindAverarr(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
        }
        return sum/arr.length;
}
console.log(FindAverarr(c));

//task7

function concatenatearr(arr1,arr2){
    let result = [...arr1, ...arr2];
    return result;
}

console.log(concatenatearr(c,b));


//task8

function intertwoarr(arr1,arr2){
    let result = [];
    for(let i=0; i<arr1.length; i++){
        if(arr2.includes(arr1[i])){
            result.push(arr1[i]);
        }
}
return result;
}
var e=[1.2,3,4,5,6];
var s=[3,4,5,7,8,9];
console.log(intertwoarr(e,s));









