'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let d = b**2 - 4*a*c;

  if (d === 0) {
    arr[0] = (-b/2*a);
  }
  else if (d > 0) {
    arr[0] = ((-b + Math.sqrt(d))/2*a);
    arr[1] = ((-b - Math.sqrt(d))/2*a);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = 0;

  // код для задачи №2 писать здесь
  let p = percent / 100 / 12;
  let currentDate = new Date;
  let months, creditBody, payOfMonth, a, b;

  
  if (isNaN(percent)) {
    let str = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    console.log(str);
    return str;
  }

  if (isNaN(contribution)) {
    let str = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    console.log(str);
    return str;
  }

  if (isNaN(amount)) {
    let str = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    console.log(str);
    return str;
  }
  

  let timeDiff = Math.abs(date.getTime() - currentDate.getTime());
  months = Math.trunc((timeDiff / (1000 * 3600 * 24 * 30)));
  creditBody = +amount - +contribution;
  payOfMonth = creditBody * (p + (p/(((1 + p)**months - 1))));
  totalAmount = payOfMonth * months;
  a = totalAmount * 100;
  b = Math.round(a);
  totalAmount = b / 100;

  console.log(`Сумма, которую Вы выплатите в итоге, равна ${totalAmount}`);

  return totalAmount;
}

