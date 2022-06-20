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
    this.subjects = {};
  }

  addMark(grade, subName) {
    if (grade <= 0 || grade > 5) {
      return ("Ошибка, оценка должна быть числом от 1 до 5");
    }

    if (this.subjects.isEmpty()) {
      this.subjects.subjectName = subName;
      this.subjects.grades = [grade];
    }
  }
}

