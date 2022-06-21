// Задача №1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    let newState = this.state * 1.5;
    if (newState > 100) {
      this.state = 100;
    } else {
      this.state = newState;
    }
  }

  set state(num) {
    if (num < 0) {
      this._state = 0;
    }
    if (num > 100) {
      this._state = 100;
    }

    this._state = num;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(...prop) {
    super(...prop);
    this.type = "detective";
  }
}

// Задача №2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book._state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(attr, value) {
    const obj = this.books.find(book => book[attr] === value);
    if (obj === undefined) {
      return null;
    };
    return obj;
  }

  giveBookByName(bookName) {
    const searchedBook = this.books.find(book => book.name === bookName);
    if (searchedBook === undefined) {
      return null;
    } else {
      const index = this.books.indexOf(searchedBook);
      const obj = this.books.splice(index, 1);
      return (searchedBook);
    }
  }
}

//  Задача №3
class Student {
  constructor(name) {
    this.name = name;
    this.subjects = [];
  }

  addMark(grade, subName) {
    if (grade <= 0 || grade > 5) {
      return console.log("Ошибка, оценка должна быть числом от 1 до 5");
    }

    if (isEmpty(this.subjects)) {
      this.subjects.push({ subjectName: subName, grades: [grade] });

    } else {
      const obj = this.subjects.find(subject => subject.subjectName === subName);
      if (obj === undefined) {
        this.subjects.push({ subjectName: subName, grades: [grade] });
      } else {
        obj.grades.push(grade);
      }
    }
  }

  getAverageBySubject(subName) {
    const obj = this.subjects.find(subject => subject.subjectName === subName);
    if (obj === undefined) {
      return console.log("Несуществующий предмет");
    }

    const average = averageCalculation(obj.grades);
    console.log(`Средний балл по предмету ${obj.subjectName} ${average}`);

    return average;
  }

  getAverage() {
    const averages = [];
    this.subjects.forEach(element => {
      const average = this.getAverageBySubject(element.subjectName);
      averages.push(average);
    });
    const totalAverage = averageCalculation(averages);
    console.log(`Средний балл по всем предметам ${totalAverage}`);
    return totalAverage;
  }

  exclude(reason) {
    this.excluded = reason;
    delete (this.subjects);
  }
}

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

function averageCalculation(array) {
  const average = array.reduce(function (acc, item, idx, arr) {
    if (idx === arr.length - 1) {
      return (acc + item) / arr.length;
    } else {
      return acc + item;
    }
  });
  return average;
}

const student = new Student("Петр Иванов");
student.addMark(5, "algebra");
console.log(student);
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.getAverageBySubject("geometry");
student.getAverageBySubject("biology");
student.getAverage();
student.exclude("Исключен за попытку подделать оценки");