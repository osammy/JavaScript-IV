// CODE here for your Lambda Classes
(function() {
  class Person {
    constructor(props) {
      const { name, age, location } = props;
      this.location = location;
      this.age = age;
      this.name = name;
    }
    speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
      return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
  }

  class Instructor extends Person {
    constructor(props) {
      super(props);
      const {specialty,catchPhrase,favLanguage } = props;
      this.specialty = specialty;
      this.catchPhrase = catchPhrase;
      this.favLanguage = favLanguage;
    }

    demo(subject) {
      if (typeof subject !== "string") return "subject must be a string!";
      console.log(`Today we are learning about ${subject}`)
      return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
      console.log(`${student.name} receives a perfect score on ${subject}`)
      return `${student.name} receives a perfect score on ${subject}`;
    }
    
    modifyStudentGrade(student) {
        const max = 1;
        const min = 100;
        const grade = Math.round(Math.random() * (max - min) + min);
        student.grade = grade; 
        console.log(student.grade);
//         return grade;
    }
  }

    class Students extends Person {
    constructor(props) {
      super(props);
      const { previousBackground , className } = props;

    //   this.name = name;
      this.previousBackground  = previousBackground ;
      this.className  = className ;
      this.favSubjects = ['Html', 'CSS', 'JavaScript'];
      this.grade = 50;
    }

    listsSubjects () {
      this.favSubjects.forEach(eachSubject =>{
          console.log(eachSubject);
      })
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
        `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge (subject) {
      console.log(`${student.name} has begun sprint challenge on ${subject}`)
      return `${student.name} has begun sprint challenge on ${subject}`;
    }
      
    graduate(myInstructor) {
        while (this.grade <= 70) {
            console.log("grade --->"+this.grade)
            myInstructor.modifyStudentGrade(this);
        }

        if(this.grade > 70) {
            console.log("You are a graduate!")
        }
    }
  }

    class ProjectManagers extends Instructor {
    constructor(props) {
      super(props);
      const {gradClassName,favInstructor } = props;

    //   this.name = name;
      this.gradClassName  = gradClassName;
      this.favInstructor  = favInstructor;
    }

    standUp(channel) {
      console.log(`${this.name} announces to channel, @${channel} standy times!`);
        return `${this.name} announces to channel, @${channel} standy times!`;
    }

    debugsCode (student,subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
  }

const personProps = {
    name:"sam", age:29, location:"Lagos" 
}

const instructorProps = {
    name:"gabe", age:39, location:"Carlifornia" ,specialty:'Java',catchPhrase:'Serotonin',favLanguage:'Python'
}

const studentProps = {
    name:"sam", age:29, location:"Lagos" ,previousBackground:'CS' , className:'webeu3'
}


const projectManagerProps = {
    name:"Justin", age:32, location:"Lithuania" ,specialty:'NodeJs',catchPhrase:'Trust the process',favLanguage:'Javascript',gradClassName:'webeu2',favInstructor:'kennan'
}
 


})();
