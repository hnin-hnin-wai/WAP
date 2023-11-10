function Student(firstName,lastName,grades){
    this.firstName=firstName;
    this.lastName=lastName;
    this.grades=grades || [];
}

Student.prototype.inputNewGrade=function(newGrade){
    //onsole.log(newGrade);
    this.grades.push(newGrade);
}

Student.prototype.computeAverageGrade = function () {

    return this.grades.reduce((avg, current, index, array) => avg + current / 
   array.length, 0);
}

const st1=new Student('Tonny','Smith');
st1.inputNewGrade(80);
st1.inputNewGrade(90);
st1.inputNewGrade(100);

const st2=new Student('John','Smith');
st2.inputNewGrade(100);
st2.inputNewGrade(100);
st2.inputNewGrade(100);


const students = [st1,st2];

console.log(st1.computeAverageGrade());
console.log(st2.computeAverageGrade());
