var dogObj = {
    name : "jojo",
    age : "3",
    legs : "4",
    food : "chicken"
};

function checkObj(checkProp){
    if(dogObj.hasOwnProperty(checkProp)){
        return dogObj[checkProp];
    }
    else 
        return checkProp + " property not found";
}
function binaryConvert(str){
    return parseInt(str, 2);
}
console.log(binaryConvert("0101"));


const name = 'Ankush';
const age = '33';
var string = `hello my name is ${name} and i am ${age} old`;
console.log(string);
