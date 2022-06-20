//  Задача №1

function parseCount(num) {
  const parsed = parseInt(num);
  if (isNaN(parsed)) throw new Error("Невалидное значение");
  return parsed;
}

const validateCount = (num) => {
  try {
    const number = parseCount(num);
  } catch(err) {
      return err;
  }
  return +num;
}

//  Задача №2

class Triangle {
  constructor(a, b, c) {
    if (!(((a + b) > c) && ((b + c) > a) && ((a + c) > b))) throw new Error("Треугольник с такими сторонами не существует");
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.perimetr = this.a + this.b + this.c;
  }

  getArea() {
    const p = this.getPerimeter() / 2;
    this.s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return this.s.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    const triangle = new Triangle(a, b, c);
    return triangle;
  } catch(err) {
    const obj = {
      getArea: () => ("Ошибка! Треугольник не существует"),
      getPerimeter: () => ("Ошибка! Треугольник не существует"),
    }
    return obj;
  }
}



