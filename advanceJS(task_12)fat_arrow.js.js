class Student{   
    static studentNum = 0
    static studentLst = []

    constructor(name,age,phoneNumber,marks){
     
         this.minMarks = 40
        this.eligibleAge = 18
        this.name  = name
        this.age = age
        this.phoneNumber = phoneNumber
        this.marks = marks
        Student.studentNum+=1
        let count = Student.studentNum
        this.studentObj ={}
        this.studentObj[count] = this.name
        Student.studentLst.push(this.studentObj)

    }
    checkEligibility() {
        if(this.marks>=40) console.log(`${this.name} is eligible for palcements`);
        else console.log(`${this.name} is not eligible for placements`);
        return ()=>{
            if(this.age>this.eligibleAge && this.marks>this.minMarks)
            {
                console.log(`${this.name} is eligible for placements`)

                // console.log(Student.studentLst)
            }
            else (console.log(`${this.name} is not eligible for placements`))
        }
    }
    static checkStudentNums(){   
        console.log(`Number of registered students is ${Student.studentNum}`)
    }
    static displayEligibleLst(){   
        var x = checkEligibility()
        for(let i of Student.studentLst){

        }
    }
}
