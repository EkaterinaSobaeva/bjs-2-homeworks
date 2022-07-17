function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  for (let i=0; i< mark.length; i++) {
    if (this.marks === undefined) {
     this.marks = [mark[0]];
    } else {
      this.marks.push(mark[i]);
   }
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  
  for (let i=0; i< this.marks.length; i++) {
    sum += this.marks[i];
  }
  
  const avg = sum/this.marks.length;
  return avg;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}


let student2 = new Student("Buzz", "female", 35);
    student2.setSubject("Geometry");
    student2.addMarks(2,3,2);
    console.log(student2);