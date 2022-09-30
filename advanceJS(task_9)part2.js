//funciton curring
function sum(num1){
    return function(num2){
        return function(num3){
            return function(num4){
                console.log(num1 + num2 + num3 + num4);
            }
        }
    }
}
sum(1)(2)(3)(4);

// 2nd way of currying 
const add = (num1) => (num2) => (num3) => (num4)=> console.log(num1+num2+num3+num4);
add(1)(2)(3)(4);
