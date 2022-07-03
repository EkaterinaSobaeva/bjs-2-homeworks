"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let D = b ** 2 - 4 * a * c;
  let x1;
  let x2;
  if (D > 0) {
    x1 = (-b + Math.sqrt(D))/(2*a);
    x2 = (-b - Math.sqrt(D))/(2*a);
    arr.push(x1);
    arr.push(x2);
  } else if (D===0) {
    x1 = -b/(2*a);
    arr.push(x1);
  } 

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (typeof percent !== "number" || typeof +percent !== "number") {
     return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (typeof contribution !== "number" || typeof +contribution !== "number") {
     return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

   if (typeof amount !== "number" || typeof +amount !== "number") {
     return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let creditBody = amount - contribution;
  let endDate = new Date(date);
  let nowDate = new Date();
  let month = (endDate.getFullYear()*12 + endDate.getMonth()) - (nowDate.getFullYear()*12 + nowDate.getMonth());
  let P = percent/100/12;
  let monthPay = creditBody*(P + (P/(Math.pow(1+P,month)-1)));
  totalAmount = monthPay*month;
  totalAmount = +totalAmount.toFixed(2);
  console.log(totalAmount);

  return totalAmount;
}
