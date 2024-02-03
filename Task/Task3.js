//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(array,size){
    let sum = 0;
    for(const number of array){
        sum+=number;
    }
    avg = sum/size ;
    return avg;
}
const arr = [ 10 , 20 , 30 , 10 , 50];
const size = arr.length ;

const average = make_avg(arr , size);
console.log(average);
    