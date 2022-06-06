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

  if (typeof percent !== 'number') {
    console.log(`Параметр процентная ставка содержит неправильное значение ${percent}`);
  }
  if (typeof contribution !== 'number') {
    console.log(`Параметр сумма первоначального взноса содержит неправильное значение ${contribution}`);
  }
  if (typeof amount !== 'number') {
    console.log(`Параметр сумма кредита содержит неправильное значение ${amount}`);
  }
  if (typeof date !== 'object' || date < currentDate) {
    console.log(`Параметр дата окончания кредита содержит неправильное значение ${date}`);
  }

  months = (date - currentDate) / (1000 * 3600 * 24 * 30);
  creditBody = +amount - +contribution;
  payOfMonth = creditBody * (p + (p/(((1 + p)**months - 1))));
  totalAmount = payOfMonth * months;
  a = totalAmount * 100;
  b = Math.round(a);
  totalAmount = b / 100;

  console.log(`Сумма, которую Вы выплатите в итоге, равна ${totalAmount}`);

  return totalAmount;
}
