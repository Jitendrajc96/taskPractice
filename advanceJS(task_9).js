
let userData1 = { 
    name : "Jitendra Singh",
    age : 26,
    profile : "Software Engineer"
}
let printUserData = function(state){
    console.log(this.name+" from "+state)
}
let userData2 = { 
    name : "Saurabh Sahu",
    age : 28,
    profile : "Software Engineer"
} 
// ANSWER(1): call function or function borrowing 
printUserData.call(userData2,"Chattisgarh");

// ANSWER(2): apply function
printUserData.apply(userData1,["UP"]);

// ANSWER(3): bind function
let newFun = printUserData.bind(userData2,"Chattisgarh");
newFun();

/* ANSWER(4):  Create a new object called Student with age 20 , 
write a function which prints the age of the student from the student object.*/
let student = { 
    name : "Muskan",
    Age : 22
}
let printStudentDetails = function(){
    console.log(this.Age)
}
let newFunction = printStudentDetails.bind(student);
newFunction();
