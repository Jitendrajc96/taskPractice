class Student{  
    static studentMarks = 0
    constructor(name,age,phoneNumber,marks){
        this.name  = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.marks = marks;
        Student.studentMarks += 1;
    }
    studentEligibility(){
        if(this.marks>=40) console.log(`${this.name} is eligible for palcements`);
        else console.log(`${this.name} is not eligible for placements`);
    }
    static checkStudentMarks(){   
        console.log(`Total registered students : ${Student.studentMarks}`);
    }
}
let Student1 = new Student('Tarun',24,1234567890,30);
let Student2 = new Student('Sachin',24,2345678910,60);
let Student3 = new Student('Prabhat',25,3456789120,80);
let Student4 = new Student('Pawan',25,4567891230,43);
let Student5 = new Student('Akash',24,5678912340,36);
Student1.studentEligibility();
Student.checkStudentMarks();
