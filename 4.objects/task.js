function Student(name, gender, age) {
    // Ваш код
      this.name = name;
      this.gender = gender;
      this.age = age;
  }

Student.prototype.setSubject = function(subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    // добавить первую оценку 
    this.marks = [mark];
    } else {
      // добавить вторую и последующие оценки в массив
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(...mark) {
  this.marks = mark;
}

Student.prototype.getAverage = function() {
  const array = this.marks;
  return this.getAverage = array.reduce(function(acc, item, idx, arr) {
    if (idx === arr.length - 1) {
      return (acc + item) / arr.length;
    } else {
      return acc + item;
    }
  });

}

Student.prototype.exclude = function (reason) {
  this.excluded = reason; 
  delete(this.subject);
  delete(this.marks)
}

/*const student1 = new Student("Ivan", "male", 17);
const student2 = new Student("Maria", "female", 18);


student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);

console.log(student1);
console.log(student1.getAverage()); 

student2.setSubject("Geometry");
student2.addMarks(2,3,2);
student2.getAverage();
//student2.exclude('low grades')
console.log(student2)*/